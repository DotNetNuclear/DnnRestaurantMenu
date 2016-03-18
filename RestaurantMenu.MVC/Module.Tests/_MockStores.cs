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
using System.Linq;
using DotNetNuclear.Modules.RestaurantMenuMVC.Components;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;
using Moq;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Tests
{
    public class _MockStores
    {
        public static Mock<IMenuItemRepository> ItemRepositoryFake()
        {
            var allItems = new List<IMenuItem>();
            var mock = new Mock<IMenuItemRepository>();

            mock.Setup(x => x.CreateItem(It.IsAny<IMenuItem>()))
                .Callback((IMenuItem i) =>
                {
                    allItems.Add(i);
                });
            mock.Setup(x => x.DeleteItem(It.IsAny<int>(), It.IsAny<int>()))
                .Callback((int id, int mid) =>
                {
                    var remItem = allItems.FirstOrDefault(i => i.MenuItemId == id);
                    allItems.Remove(remItem);
                });
            mock.Setup(x => x.GetItems(It.IsAny<int>()))
                .Returns((int mid) => allItems.Where(x => x.ModuleId == mid));
            mock.Setup(x => x.GetItem(It.IsAny<int>(), It.IsAny<int>()))
                .Returns((int id, int mid) => allItems.FirstOrDefault(i => i.MenuItemId == id));
            return mock;
        }

        //static public Mock<ISettingsRepository> ModuleSettingsFake()
        //{
        //    var _allItems = new List<Item>();
        //    var mock = new Mock<ISettingsRepository>();

        //    mock.Setup(x => x.MaxItems).Returns(5);
        //    return mock;
        //}

    }
}
