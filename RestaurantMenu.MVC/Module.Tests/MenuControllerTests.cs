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
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using DotNetNuclear.Modules.RestaurantMenuMVC.Controllers;
using DotNetNuclear.Modules.RestaurantMenuMVC.Components;
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;
using Moq;


namespace DotNetNuclear.Modules.RestaurantMenuMVC.Tests
{
    [TestClass]
    public class MenuControllerTests
    {
        private Mock<IMenuItemRepository> mockStore;

        /// <summary>
        /// Test whether we are assining the default image to a new item before editing
        /// </summary>
        [TestMethod]
        public void Edit_AssignDefaultImage_NewPendingItemHasDefaultImage()
        {
            //arrange
            int moduleId = 1;
            mockStore = _MockStores.ItemRepositoryFake();
            //** Here is how we could populate our mock data repository for testing data scenarios
            //** ...but that's not needed in this unit test!
            //mockStore.Object.CreateItem(new MenuItem { MenuItemId = 1, ModuleId = 1, Name = "Item 1", Desc = "Item 1 Description", AddedByUserId = 0, DateAdded = DateTime.Now.AddDays(-1), ModifiedByUserId = 0, DateModified = DateTime.Now });
            //mockStore.Object.CreateItem(new MenuItem { MenuItemId = 2, ModuleId = 1, Name = "Item 2", Desc = "Item 2 Description", AddedByUserId = 0, DateAdded = DateTime.Now.AddDays(-1), ModifiedByUserId = 0, DateModified = DateTime.Now });
            //mockStore.Object.CreateItem(new MenuItem { MenuItemId = 3, ModuleId = 2, Name = "Item 3", Desc = "Item 3 Description", AddedByUserId = 0, DateAdded = DateTime.Now.AddDays(-1), ModifiedByUserId = 0, DateModified = DateTime.Now });
            //mockStore.Object.CreateItem(new MenuItem { MenuItemId = 4, ModuleId = 2, Name = "Item 4", Desc = "Item 4 Description", AddedByUserId = 0, DateAdded = DateTime.Now.AddDays(-1), ModifiedByUserId = 0, DateModified = DateTime.Now });
            var menuViewController = new MenuController(mockStore.Object, moduleId);

            //act
            var view = (ViewResult)menuViewController.Edit();
            var model = (IMenuItem)view.Model;

            //assert
            Assert.IsTrue(model != null && model.ImageUrl.EndsWith("noimage.png"));
        }
    }
}