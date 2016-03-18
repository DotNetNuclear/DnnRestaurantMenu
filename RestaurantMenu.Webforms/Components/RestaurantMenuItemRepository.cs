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
using DotNetNuke.Data;

namespace DotNetNuclear.Modules.RestaurantMenuWF.Components
{
    public class RestaurantMenuItemRepository
    {
        public void CreateItem(RestaurantMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RestaurantMenuItem>();
                rep.Insert(t);
            }
        }

        public void DeleteItem(int itemId, int moduleId)
        {
            var t = GetItem(itemId, moduleId);
            DeleteItem(t);
        }

        public void DeleteItem(RestaurantMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RestaurantMenuItem>();
                rep.Delete(t);
            }
        }

        public IEnumerable<RestaurantMenuItem> GetItems(int moduleId)
        {
            IEnumerable<RestaurantMenuItem> t;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RestaurantMenuItem>();
                t = rep.Get(moduleId);
            }
            return t;
        }

        public RestaurantMenuItem GetItem(int itemId, int moduleId)
        {
            RestaurantMenuItem t;
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RestaurantMenuItem>();
                t = rep.GetById(itemId, moduleId);
            }
            return t;
        }

        public void UpdateItem(RestaurantMenuItem t)
        {
            using (IDataContext ctx = DataContext.Instance())
            {
                var rep = ctx.GetRepository<RestaurantMenuItem>();
                rep.Update(t);
            }
        }

    }
}
