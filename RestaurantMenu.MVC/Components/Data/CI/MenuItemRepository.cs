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
using System.Collections.Generic;
using System.Web.Script.Serialization;
using DotNetNuke.Entities.Content;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Services.Exceptions;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.CI
{
    class MenuItemRepository : IMenuItemRepository
    {
        private const string DATAACCESSITEM_CONTENTTYPE = "DotNetNuclear_RestaurantMenu_Item";

        private ContentController _ciCtrl;
        private int _itemContentTypeId;

        #region cstor
        public MenuItemRepository()
        {
            _ciCtrl = new ContentController();

            _itemContentTypeId = getContentType();
        }
        #endregion

        public void ClearCache(int moduleid)
        {
            DataCache.RemoveCache(itemCacheKey(moduleid));
        }

        public void CreateItem(IMenuItem t)
        {
            try
            {
                int cid = _ciCtrl.AddContentItem(convertModelItemtoContentItem((MenuItem)t));
                // Put the contentItemId in the ItemId by updating after we insert the content item
                // and get the identity
                t.MenuItemId = cid;
                _ciCtrl.UpdateContentItem(convertModelItemtoContentItem((MenuItem)t));
                DataCache.RemoveCache(itemCacheKey(t.ModuleId));
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        public void DeleteItem(int itemId, int moduleId)
        {
            _ciCtrl.DeleteContentItem(itemId);
            DataCache.RemoveCache(itemCacheKey(moduleId));
        }

        public void DeleteItem(IMenuItem t)
        {
            DeleteItem(t.MenuItemId, t.ModuleId);
        }

        public IEnumerable<IMenuItem> GetItems(int moduleId)
        {

            List<MenuItem> items = (List<MenuItem>)DataCache.GetCache(itemCacheKey(moduleId));
            if (items == null)
            {
                items = new List<MenuItem>();
                var contentItems = _ciCtrl.GetContentItemsByModuleId(moduleId).Where(c => c.ContentTypeId == _itemContentTypeId).ToList();
                foreach (ContentItem ci in contentItems)
                {
                    items.Add(convertContentItemtoModelItem(ci));
                }
                DataCache.SetCache(itemCacheKey(moduleId), items, false);
            }
            return items;
        }

        public IMenuItem GetItem(int itemId, int moduleId)
        {
            ContentItem ci = _ciCtrl.GetContentItem(itemId);
            if (ci != null)
            {
                return convertContentItemtoModelItem(ci);
            }
            else
            {
                return null;
            }
        }

        public void UpdateItem(IMenuItem t)
        {
            _ciCtrl.UpdateContentItem(convertModelItemtoContentItem((MenuItem)t));
            DataCache.RemoveCache(itemCacheKey(t.ModuleId));
        }

        #region private methods

        private string itemCacheKey(int moduleId)
        {
            return "DNNuclear_DataAccess_CI_" + moduleId.ToString();
        }

        private MenuItem convertContentItemtoModelItem(ContentItem ci)
        {
            MenuItem t = new MenuItem();

            try
            {
                t = new JavaScriptSerializer().Deserialize<MenuItem>(ci.Content);
                if (t != null) { t.MenuItemId = ci.ContentItemId; }
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }

            return t;
        }

        private ContentItem convertModelItemtoContentItem(MenuItem t)
        {
            ContentItem ci = new ContentItem();
            ci = new ContentItem
            {
                Content = new JavaScriptSerializer().Serialize(t),
                ContentKey = t.MenuItemId.ToString(),
                ContentTitle = t.Name,
                ContentTypeId = _itemContentTypeId,
                ModuleID = t.ModuleId,
                ContentItemId = t.MenuItemId
            };
            
            return ci;
        }

        private int getContentType()
        {
            ContentTypeController ctCtrl = new ContentTypeController();
            var ct = ctCtrl.GetContentTypes().FirstOrDefault(c => c.ContentType == DATAACCESSITEM_CONTENTTYPE);
            if (ct != null)
            {
                return ct.ContentTypeId;
            }
            else
            {
                // Add our custom content type
                return ctCtrl.AddContentType(new ContentType { ContentType = DATAACCESSITEM_CONTENTTYPE, KeyID = 0 });
            }
        }

        #endregion

    }
}
