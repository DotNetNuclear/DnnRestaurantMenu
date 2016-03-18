// *************************************************************************** 
// Project: Data Access Tutorial
// Copyright (c) DotNetNuclear LLC.
// http://www.dotnetnuclear.com
//
// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, 
// EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED 
// WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
// *************************************************************************** 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Services.Exceptions;

namespace DotNetNuclear.Modules.DataAccess.Components.EF
{
    class ItemRepository : IItemRepository
    {

        /// <summary>
        /// </summary>
        public void ClearCache(int moduleid)
        {
            DataCache.RemoveCache(itemCacheKey(moduleid));
        }

        public void CreateItem(IItemModel t)
        {
            try
            {
                using (ItemEntities context = ItemEntities.Instance())
                {
                    context.AddToItems((Item)t);
                    context.SaveChanges();

                    DataCache.RemoveCache(itemCacheKey(t.ModuleId));
                }
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        public void DeleteItem(int itemId, int moduleId)
        {
            try
            {
                using (ItemEntities context = ItemEntities.Instance())
                {
                    var delItem = GetItem(itemId, false, context);
                    context.DeleteObject(delItem);
                    context.SaveChanges();

                    DataCache.RemoveCache(itemCacheKey(moduleId));
                }
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        public IEnumerable<IItemModel> GetItems(int moduleId)
        {
            List<IItemModel> items = null;
            try
            {
                items = (List<IItemModel>)DataCache.GetCache(itemCacheKey(moduleId));

                if (items == null || items.Count == 0)
                {
                    using (ItemEntities context = ItemEntities.Instance())
                    {
                        var itemData = (from x in context.Items where x.ModuleId == moduleId select x).ToList();
                        items = new List<IItemModel>(itemData.Cast<IItemModel>());
                    }
                    DataCache.SetCache(itemCacheKey(moduleId), items);
                }
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
            return items;
        }

        public IItemModel GetItem(int itemId, int moduleId)
        {
            IItemModel itembyId = null;
            using (ItemEntities context = ItemEntities.Instance())
            {
                itembyId = context.Items
                            .Where(x => x.ItemId == itemId)
                            .FirstOrDefault();
            }
            return itembyId;
        }


        public Item GetItem(int itemId, bool detach, ItemEntities context)
        {
            if (context == null)
            {
                context = ItemEntities.Instance();
            }
            Item itembyId = null;
            itembyId = context.Items
                        .Where(x => x.ItemId == itemId)
                        .FirstOrDefault();
            if (detach) { context.Detach(itembyId); }

            return itembyId;
        }

        public void UpdateItem(IItemModel t)
        {
            try
            {
                using (ItemEntities context = ItemEntities.Instance())
                {
                    System.Data.EntityKey pKey = ((Item)t).EntityKey;
                    if (pKey != null)
                    {
                        object pObject;
                        if (context.TryGetObjectByKey(pKey, out pObject))
                        {
                            context.ApplyPropertyChanges(pKey.EntitySetName, (Item)t);
                        }
                    }
                    context.SaveChanges();
                }
                DataCache.RemoveCache(itemCacheKey(t.ModuleId));
            }
            catch (Exception ex)
            {
                Exceptions.LogException(ex);
            }
        }

        private string itemCacheKey(int moduleId)
        {
            return "DNNuclear_DataAccess_EF_" + moduleId.ToString();
        }

    }
}
