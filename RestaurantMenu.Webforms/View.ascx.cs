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
using System.Linq;
using System.Web.UI.WebControls;
using DotNetNuclear.Modules.RestaurantMenuWF.Components;
using DotNetNuke.Security;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Services.Localization;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.UI.Utilities;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Web.Client.ClientResourceManagement;
using System.Web.UI.HtmlControls;
using System.Collections.Generic;
using System.Globalization;


namespace DotNetNuclear.Modules.RestaurantMenuWF
{

    public partial class View : RestaurantMenuModuleBase, IActionable
    {
        private PortalInfo _currentPortal;
        private bool _hasItems;

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                PortalController pctrl = new PortalController();
                _currentPortal = pctrl.GetPortal(PortalId);

                var tc = new RestaurantMenuItemRepository();
                IEnumerable<RestaurantMenuItem> items = tc.GetItems(ModuleId);
                _hasItems = items.Any();
                rptItemList.DataSource = items;
                rptItemList.DataBind();
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

        protected void rptItemListOnItemDataBound(object sender, RepeaterItemEventArgs e)
        {
            if (!_hasItems)
            {
                if (e.Item.ItemType == ListItemType.Header)
                {
                    HtmlGenericControl noRecordsDiv = (e.Item.FindControl("NoRecords") as HtmlGenericControl);
                    if (noRecordsDiv != null)
                    {
                        noRecordsDiv.Visible = true;
                    }
                }
            }

            if (e.Item.ItemType == ListItemType.AlternatingItem || e.Item.ItemType == ListItemType.Item)
            {
                var lnkEdit = e.Item.FindControl("lnkEdit") as HyperLink;
                var lnkDelete = e.Item.FindControl("lnkDelete") as LinkButton;
                var pnlFeatures = e.Item.FindControl("pnlFeatures") as Panel;
                var pnlAdminControls = e.Item.FindControl("pnlAdmin") as Panel;
                var lblPrice = e.Item.FindControl("lblPrice") as Label;

                try
                {
                    var t = (RestaurantMenuItem)e.Item.DataItem;
                
                    var pic = e.Item.FindControl("imgItemPic") as Image;
                    FileInfo fi = (FileInfo)FileManager.Instance.GetFile(t.PictureFileId);
                    if (fi != null)
                        pic.ImageUrl = "/" + _currentPortal.HomeDirectory + "/" + fi.RelativePath;

                    string culSetting = (string)Settings["culture"];
                    if (string.IsNullOrEmpty(culSetting)) {culSetting = "en-US"; }
                    var culture = new CultureInfo(culSetting );

                    lblPrice.Text = t.Price.ToString("c", culture);

                    if (t.IsVegetarian) 
                    {
                        pnlFeatures.Controls.Add(new Image { ImageUrl = base.ControlPath + "resources/images/nomeat.jpg" });
                    }

                    if (t.IsDailySpecial)
                    {
                        pnlFeatures.Controls.Add(new Image { ImageUrl = base.ControlPath + "resources/images/recommended.png" });
                    }                

                    if (IsEditable && lnkDelete != null && lnkEdit != null && pnlAdminControls != null)
                    {
                        pnlAdminControls.Visible = true;
                        lnkDelete.CommandArgument = t.MenuItemId.ToString();
                        lnkDelete.Enabled = lnkDelete.Visible = lnkEdit.Enabled = lnkEdit.Visible = true;

                        lnkEdit.NavigateUrl = EditUrl(string.Empty, string.Empty, "Edit", "tid=" + t.MenuItemId);

                        ClientAPI.AddButtonConfirm(lnkDelete, Localization.GetString("ConfirmDelete", LocalResourceFile));
                    }
                    else
                    {
                        pnlAdminControls.Visible = false;
                    }
                }
                catch (Exception exc) //Module failed to load
                {
                    Exceptions.ProcessModuleLoadException(this, exc);
                }
            }
        }


        public void rptItemListOnItemCommand(object source, RepeaterCommandEventArgs e)
        {
            if (e.CommandName == "Edit")
            {
                Response.Redirect(EditUrl(string.Empty, string.Empty, "Edit", "tid=" + e.CommandArgument));
            }

            if (e.CommandName == "Delete")
            {
                var tc = new RestaurantMenuItemRepository();
                tc.DeleteItem(Convert.ToInt32(e.CommandArgument), ModuleId);
            }
            Response.Redirect(DotNetNuke.Common.Globals.NavigateURL());
        }

        public ModuleActionCollection ModuleActions
        {
            get
            {
                var actions = new ModuleActionCollection
                    {
                        {
                            GetNextActionID(), Localization.GetString("EditModule", LocalResourceFile), "", "", "",
                            EditUrl(), false, SecurityAccessLevel.Edit, true, false
                        }
                    };
                return actions;
            }
        }
    }
}