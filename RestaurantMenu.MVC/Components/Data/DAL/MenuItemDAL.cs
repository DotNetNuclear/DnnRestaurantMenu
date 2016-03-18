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
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.FileSystem;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL
{
    public class MenuItemDAL : BaseModel, IHydratable, IMenuItem
    {
        [SQLParamAttribute(true, false)]
        public int MenuItemId { get; set; }

        public int ModuleId { get; set; }

        public string Name { get; set; }

        public string Desc { get; set; }

        public string ImageUrl { get; set; }

        public bool IsDailySpecial { get; set; }

        public bool IsVegetarian { get; set; }

        public decimal Price { get; set; }

        public int DisplayOrder { get; set; }

        [SQLParamAttribute(false, true)]
        public int AddedByUserId { get; set; }

        [SQLParamAttribute(true, false)]
        public int ModifiedByUserId { get; set; }

        [SQLParamAttribute(false, false)]
        public DateTime DateAdded { get; set; }

        [SQLParamAttribute(false, false)]
        public DateTime DateModified { get; set; }

        #region IHydratable

        public void Fill(System.Data.IDataReader dr)
        {
            try
            {
                MenuItemId = int.Parse(dr["MenuItemId"].ToString());
                ModuleId = int.Parse(dr["ModuleId"].ToString());
                Name = Convert.ToString(dr["Name"]);
                Desc = Convert.ToString(dr["Desc"]);
                ImageUrl = Convert.ToString(dr["ImageUrl"]);
                IsDailySpecial = bool.Parse(dr["IsDailySpecial"].ToString());
                IsVegetarian = bool.Parse(dr["IsVegetarian"].ToString());
                Price = Convert.ToDecimal(dr["Price"]);
                DisplayOrder = int.Parse(dr["DisplayOrder"].ToString());
                AddedByUserId = int.Parse(dr["AddedByUserId"].ToString());
                DateAdded = Convert.ToDateTime(dr["DateAdded"]);
                ModifiedByUserId = int.Parse(dr["ModifiedByUserId"].ToString());
                DateModified = Convert.ToDateTime(dr["DateModified"]);
            }
            catch (Exception ex)
            {
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
            }
        }

        [SQLParamAttribute(false, false)]
        public int KeyID
        {
            get { return MenuItemId; }
            set { MenuItemId = value; }
        }

        #endregion
    }
}
