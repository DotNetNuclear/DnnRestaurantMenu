/*
' Copyright (c) 2017 DotNetNuclear.com
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
using System.Net.Http;
using DotNetNuclear.RestaurantMenu.PersonaBar.Components;
using DotNetNuclear.RestaurantMenu.PersonaBar.Services.ViewModels;
using DotNetNuke.Common;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using Dnn.PersonaBar.Library;
using Dnn.PersonaBar.Library.Attributes;
using DotNetNuke.Instrumentation;
using DotNetNuke.Security;
using DotNetNuke.Services.FileSystem;
using DotNetNuke.Web.Api;

namespace DotNetNuclear.RestaurantMenu.PersonaBar.Services.Controllers
{
    [MenuPermission(MenuName = "DotNetNuclear.RestaurantMenu")]
    public class MenuController : PersonaBarApiController
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(MenuController));
        private readonly IMenuItemRepository _repository;
        private readonly IFileInfo _noImageFile = null;

        public string CultureCode { get; set; }

        public MenuController(IMenuItemRepository repository)
        {
            Requires.NotNull(repository);
            this._repository = repository;
        }

        public MenuController() : this(MenuItemRepository.Instance)
        {
            CultureCode = "en-US";
            var menuImageFolder = FolderManager.Instance.GetFolder(base.PortalId, "RestaurantMenu");
            if (menuImageFolder != null)
            {
                _noImageFile = FileManager.Instance.GetFile(menuImageFolder, "noimage.png");
            }
        }

        [HttpGet]  //[baseURL]/Menu/list
        [ActionName("list")]
        public HttpResponseMessage GetList()
        {
            int moduleId = 0;

            var items = GetItemList(moduleId, CultureCode);

            return Request.CreateResponse(HttpStatusCode.OK, new MenuListDto() { Results = items, TotalResults = items.Count });
        }


        [HttpPost]  //[baseURL]/Menu/upsert
        [ActionName("upsert")]
        public HttpResponseMessage Upsert(ItemViewModel item)
        {
            if (item.ImageFileId <= 0)
            {
                item.ImageFileId = _noImageFile.FileId;
            }

            MenuItem t = item.Id > 0 ? Update(item) : Create(item);

            item = new ItemViewModel(t, CultureCode, _noImageFile);
            return Request.CreateResponse(HttpStatusCode.OK, item);
        }

        [HttpPost]  //[baseURL]/Menu/delete
        [ActionName("delete")]
        public HttpResponseMessage Delete(ItemViewModel item)
        {
            int moduleId = 0;
            var delItem = _repository.GetItem(item.Id, moduleId);

            _repository.DeleteItem(delItem);

            return Request.CreateResponse(HttpStatusCode.OK, new { itemId = delItem.MenuItemId });
        }

        /// <summary>
        /// This non-webapi method is used for both the PB Menu controller 
        /// and the module's menu list controller
        /// </summary>
        /// <returns></returns>
        public List<ItemViewModel> GetItemList(int moduleId, string cultureCode)
        {
            List<ItemViewModel> items = _repository.GetItems(moduleId)
                .Select(item => new ItemViewModel(item, cultureCode, _noImageFile))
                .ToList();
            return items;
        }

        #region Private Methods

        private MenuItem Create(ItemViewModel item)
        {
            MenuItem t = new MenuItem
            {
                Name = item.Name,
                Desc = item.Desc,
                Price = item.Price,
                ImageFileId = item.ImageFileId,
                IsDailySpecial = item.IsDailySpecial,
                IsVegetarian = item.IsVegetarian,
                AddedByUserId = UserInfo?.UserID ?? -1,
                ModifiedByUserId = UserInfo?.UserID ?? -1,
                DateAdded = DateTime.UtcNow,
                DateModified = DateTime.UtcNow,
                ModuleId = 0
            };

            _repository.AddItem(t);

            return t;
        }

        private MenuItem Update(ItemViewModel item)
        {
            int moduleId = 0;
            MenuItem t = _repository.GetItem(item.Id, moduleId);
            if (t != null)
            {
                t.Name = item.Name;
                t.Desc = item.Desc;
                t.Price = item.Price;
                t.ImageFileId = item.ImageFileId;
                t.IsDailySpecial = item.IsDailySpecial;
                t.IsVegetarian = item.IsVegetarian;
                t.ModifiedByUserId = UserInfo?.UserID ?? -1;
                t.DateModified = DateTime.UtcNow;
            }
            _repository.UpdateItem(t);

            return t;
        }

        #endregion
    }

    public class MenuListDto
    {
        public List<ItemViewModel> Results { get; set; }
        public int TotalResults { get; set; }
    }
}
