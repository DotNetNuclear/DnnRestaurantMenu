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
using System.Collections.Generic;
using System.Data;
using System.Linq;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Services.Exceptions;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL
{
    /// <summary>
    /// Implementation class for item data
    /// </summary>
    public class MenuItemRepository : IMenuItemRepository
    {

        /// <summary>
        /// </summary>
        public void ClearCache(int moduleid)
        {
            DataCache.RemoveCache(itemCacheKey(moduleid));
        }


        public void CreateItem(IMenuItem t)
        {
            try
            {
                DataProvider.Instance().AddItem(t.ModuleId, (MenuItemDAL)t);
                DataCache.RemoveCache(itemCacheKey(t.ModuleId));
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        /// <summary>
        /// </summary>
        public void DeleteItem(int itemId, int moduleId)
        {
            try
            {
                DataProvider.Instance().DeleteItem(itemId);
                DataCache.RemoveCache(itemCacheKey(moduleId));
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        public void DeleteItem(IMenuItem t)
        {
            throw new NotImplementedException();
        }

        IEnumerable<IMenuItem> IMenuItemRepository.GetItems(int moduleId)
        {
            IEnumerable<IMenuItem> items = (List<IMenuItem>)DataCache.GetCache(itemCacheKey(moduleId));
            if (items == null)
            {
                items = CBO.FillCollection<IMenuItem>(DataProvider.Instance().GetItemList(moduleId));
                DataCache.SetCache(itemCacheKey(moduleId), new List<IMenuItem>(items.Cast<IMenuItem>()), false);
            }
            return items;
        }

        IMenuItem IMenuItemRepository.GetItem(int itemId, int moduleId)
        {
            return CBO.FillObject<MenuItem>(DataProvider.Instance().GetItem(itemId));
        }

        public void UpdateItem(IMenuItem t)
        {
            try
            {
                DataProvider.Instance().UpdateItem((MenuItemDAL)t);
                DataCache.RemoveCache(itemCacheKey(t.ModuleId));
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        private string itemCacheKey(int moduleId)
        {
            return "DNNuclear_RestaurantMenuMVC_DAL_" + moduleId.ToString();
        }

    }

}