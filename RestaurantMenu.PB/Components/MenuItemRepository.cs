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
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotNetNuke.Collections;
using DotNetNuke.Common;
using DotNetNuke.Data;
using DotNetNuke.Framework;

namespace DotNetNuclear.RestaurantMenu.PersonaBar.Components
{
    public class MenuItemRepository : ServiceLocator<IMenuItemRepository, MenuItemRepository>, IMenuItemRepository
    {

        protected override Func<IMenuItemRepository> GetFactory()
        {
            return () => new MenuItemRepository();
        }

        public int AddItem(MenuItem t)
        {
            Requires.NotNull(t);
            Requires.PropertyNotNegative(t, "ModuleId");

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Insert(t);
            }
            return t.MenuItemId;
        }

        public void DeleteItem(MenuItem t)
        {
            Requires.NotNull(t);
            Requires.PropertyNotNegative(t, "MenuItemId");

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Delete(t);
            }
        }

        public void DeleteItem(int itemId, int moduleId)
        {
            Requires.NotNegative("MenuItemId", itemId);
            Requires.NotNegative("ModuleId", moduleId);

            var t = GetItem(itemId, moduleId);
            DeleteItem(t);
        }

        public MenuItem GetItem(int itemId, int moduleId)
        {
            Requires.NotNegative("MenuItemId", itemId);
            Requires.NotNegative("ModuleId", moduleId);

            MenuItem t;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                t = rep.GetById(itemId, moduleId);
            }
            return t;
        }

        public IQueryable<MenuItem> GetItems(int moduleId)
        {
            Requires.NotNegative("ModuleId", moduleId);

            IQueryable<MenuItem> t = null;

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();

                t = rep.Get(moduleId).AsQueryable();
            }

            return t;
        }

        public IPagedList<MenuItem> GetItems(string searchTerm, int moduleId, int pageIndex, int pageSize)
        {
            Requires.NotNegative("ModuleId", moduleId);

            var t = GetItems(moduleId).Where(c => c.Name.Contains(searchTerm)
                                                || c.Desc.Contains(searchTerm));


            return new PagedList<MenuItem>(t, pageIndex, pageSize);
        }

        public void UpdateItem(MenuItem t)
        {
            Requires.NotNull(t);
            Requires.PropertyNotNegative(t, "MenuItemId");

            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Update(t);
            }
        }
    }
}