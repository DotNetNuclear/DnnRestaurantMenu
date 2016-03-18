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
using System.Collections.Generic;
using System.Linq;
using DotNetNuke.Data;
using DotNetNuke.Framework;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL2
{
    public class MenuItemRepository :  IMenuItemRepository
    {
        public void CreateItem(IMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Insert((MenuItem)t);
            }
        }

        public void DeleteItem(int itemId, int moduleId)
        {
            var t = GetItem(itemId, moduleId);
            DeleteItem(t);
        }

        public void DeleteItem(IMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Delete((MenuItem)t);
            }
        }

        public IEnumerable<IMenuItem> GetItems(int moduleId)
        {
            IEnumerable<MenuItem> t;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                t = (IEnumerable<MenuItem>)rep.Get(moduleId);
            }
            return t;
        }

        public IMenuItem GetItem(int itemId, int moduleId)
        {
            IMenuItem t;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                t = rep.GetById(itemId, moduleId);
            }
            return t;
        }

        public void UpdateItem(IMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<MenuItem>();
                rep.Update((MenuItem)t);
            }
        }

    }
}
