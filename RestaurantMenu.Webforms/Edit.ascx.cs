/*
' Copyright (c) 2016 DotNetNuclear.com
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/

using System;
using DotNetNuke.Entities.Users;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.FileSystem;
using DotNetNuclear.Modules.RestaurantMenuWF.Components;
using DotNetNuke.Web.Client.ClientResourceManagement;

namespace DotNetNuclear.Modules.RestaurantMenuWF
{
    public partial class Edit : RestaurantMenuModuleBase
    {
        protected DotNetNuke.Web.UI.WebControls.DnnFilePicker fpPicture;

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                //Implement your edit logic for your module
                if (!Page.IsPostBack)
                {
                    //check if we have an ID passed in via a querystring parameter, if so, load that item to edit.
                    //ItemId is defined in the ItemModuleBase.cs file
                    if (ItemId > 0)
                    {
                        var tc = new RestaurantMenuItemRepository();

                        var t = tc.GetItem(ItemId, ModuleId);
                        if (t != null)
                        {
                            txtName.Text = t.Name;
                            txtDescription.Text = t.Description;
                            chkDailySpecial.Checked = t.IsDailySpecial;
                            chkVegetarian.Checked = t.IsVegetarian;
                            txtPrice.Text = t.Price.ToString("0.##");
                            FileInfo fiPic = (FileInfo)FileManager.Instance.GetFile(t.PictureFileId);
                            fpPicture.FileID = fiPic.FileId;
                            fpPicture.FilePath = fiPic.RelativePath;
                        }
                    }
                }
            }
            catch (Exception exc) //Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        protected void Page_PreRender(object sender, EventArgs e)
        {
            ClientResourceManager.RegisterStyleSheet(this.Page, base.ControlPath + "resources/css/module.css");
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            var t = new RestaurantMenuItem();
            var tc = new RestaurantMenuItemRepository();

            if (ItemId > 0)
            {
                t = tc.GetItem(ItemId, ModuleId);
                t.Name = txtName.Text.Trim();
                t.Description = txtDescription.Text.Trim();
                t.IsDailySpecial = chkDailySpecial.Checked;
                t.IsVegetarian = chkVegetarian.Checked;
                t.Price = Convert.ToDecimal(txtPrice.Text);
                t.PictureFileId = fpPicture.FileID;
            }
            else
            {
                t = new RestaurantMenuItem()
                {
                    AddedByUserId = UserId,
                    DateAdded = DateTime.Now,
                    Name = txtName.Text.Trim(),
                    Description = txtDescription.Text.Trim(),
                    IsDailySpecial = chkDailySpecial.Checked,
                    IsVegetarian = chkVegetarian.Checked,
                    Price = Convert.ToDecimal(txtPrice.Text),
                    PictureFileId = fpPicture.FileID,
                };
            }

            t.DateModified = DateTime.Now;
            t.ModifiedByUserId = UserId;
            t.ModuleId = ModuleId;

            if (t.MenuItemId > 0)
            {
                tc.UpdateItem(t);
            }
            else
            {
                tc.CreateItem(t);
            }
            Response.Redirect(DotNetNuke.Common.Globals.NavigateURL());
        }

        public string GetResourceString(string key)
        {
            return LocalizeString(key);
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            Response.Redirect(DotNetNuke.Common.Globals.NavigateURL());
        }
    }
}