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
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using DotNetNuclear.Modules.RestaurantMenuSPA.Components;
using DotNetNuclear.Modules.RestaurantMenuSPA.Services.ViewModels;
using DotNetNuke.Common;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using DotNetNuke.Common.Utilities;
using System.Collections.Generic;
using System.Net;
using DotNetNuke.Entities.Modules;
using DotNetNuke.UI.Modules.Html5;

namespace DotNetNuclear.Modules.RestaurantMenuSPA.Services.Controllers
{
    [SupportedModules(FeatureController.MODULENAME)]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
    public class MenuController : DnnApiController
    {
        private readonly IMenuItemRepository _repository;

        public MenuController(IMenuItemRepository repository)
        {
            Requires.NotNull(repository);

            this._repository = repository;
        }

        public MenuController() : this(MenuItemRepository.Instance) {}
        

        public HttpResponseMessage Delete(int itemId)
        {
            var item = _repository.GetItem(itemId, ActiveModule.ModuleID);

            _repository.DeleteItem(item);

            return Request.CreateResponse(HttpStatusCode.OK, "success");
        }

        public HttpResponseMessage Get(int itemId)
        {
            var item = new ItemViewModel(_repository.GetItem(itemId, ActiveModule.ModuleID), GetCultureCode());
            item.ViewUrl = Globals.NavigateURL();
            
            return Request.CreateResponse(HttpStatusCode.OK, item);
        }

        public HttpResponseMessage GetList()
        {
            List<ItemViewModel> items;

            if (Globals.IsEditMode())
            {
                items = _repository.GetItems(ActiveModule.ModuleID)
                       .Select(item => new ItemViewModel(item, GetCultureCode(), GetEditUrl(item.MenuItemId)))
                       .ToList();
            }
            else
            {
                items = _repository.GetItems(ActiveModule.ModuleID)
                       .Select(item => new ItemViewModel(item, GetCultureCode(), ""))
                       .ToList();
            }

            return Request.CreateResponse(HttpStatusCode.OK, items);
        }

        public HttpResponseMessage Upsert(ItemViewModel item)
        {
            MenuItem t = item.Id > 0 ? Update(item) : Create(item);

            item = new ItemViewModel(t, GetCultureCode(), "");
            item.ViewUrl = Globals.NavigateURL();
            return Request.CreateResponse(HttpStatusCode.OK, item);
        }

        #region Private Methods

        private string GetEditUrl(int id)
        {
            string editUrl = Globals.NavigateURL("Edit", string.Format("mid={0}", ActiveModule.ModuleID), string.Format("tid={0}", id));

            if (ActiveModule.ModuleDefinition.ModuleControls.ContainsKey("Edit"))
            {
                if (ActiveModule.ModuleDefinition.ModuleControls["Edit"].SupportsPopUps)
                {
                    editUrl = UrlUtils.PopUpUrl(editUrl, PortalSettings, false, false, 550, 950);
                }
            }

            return editUrl;
        }

        private string GetViewUrl()
        {
            return Globals.NavigateURL();
        }

        private MenuItem Create(ItemViewModel item)
        {
            MenuItem t = new MenuItem
            {
                Name = item.Name,
                Desc = item.Desc,
                Price = item.Price,
                ImageUrl = item.ImageUrl,
                IsDailySpecial = item.IsDailySpecial,
                IsVegetarian = item.IsVegetarian,
                ModuleId = ActiveModule.ModuleID,
                AddedByUserId = UserInfo.UserID,
                ModifiedByUserId = UserInfo.UserID,
                DateAdded = DateTime.UtcNow,
                DateModified = DateTime.UtcNow
            };
            _repository.AddItem(t);

            return t;
        }

        private string GetCultureCode()
        {
            string cultureCode = "en-US";
            if (ActiveModule.ModuleSettings.ContainsKey(FeatureController.MODSETTING_CULTURECODE))
                cultureCode = ActiveModule.ModuleSettings[FeatureController.MODSETTING_CULTURECODE].ToString();

            return cultureCode;
        }

        private MenuItem Update(ItemViewModel item)
        {

            MenuItem t = _repository.GetItem(item.Id, ActiveModule.ModuleID);
            if (t != null)
            {
                t.Name = item.Name;
                t.Desc = item.Desc;
                t.Price = item.Price;
                t.ImageUrl = item.ImageUrl;
                t.IsDailySpecial = item.IsDailySpecial;
                t.IsVegetarian = item.IsVegetarian;
                t.ModifiedByUserId = UserInfo.UserID;
                t.DateModified = DateTime.UtcNow;
            }
            _repository.UpdateItem(t);

            return t;
        }

        #endregion

    }
}
