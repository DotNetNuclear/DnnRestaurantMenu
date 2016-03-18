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
using System.Data;
using System.Collections.Generic;
using DotNetNuke.Framework;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL
{
    /// <summary>
    /// </summary>        
    public abstract class DataProvider
    {
        private static DataProvider objProvider = null;

        static DataProvider()
        {
            CreateProvider();
        }

        private static void CreateProvider()
        {
            objProvider = (DataProvider)Reflection.CreateObject("data", "DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL", "");
        }

        /// <summary>
        /// </summary>        
        public static DataProvider Instance()
        {
            return objProvider;
        }

        #region DAL Abstract Methods
        /// <summary>
        /// </summary>
        public abstract int AddItem(int ModuleId, MenuItemDAL newItem);
        /// <summary>
        /// </summary>
        public abstract bool DeleteItem(int itemId);
        /// <summary>
        /// </summary>
        public abstract IDataReader GetItem(int itemId);
        /// <summary>
        /// </summary>
        public abstract IDataReader GetItemList(int ModuleId);
        /// <summary>
        /// </summary>
        public abstract bool UpdateItem(MenuItemDAL newItem);
        #endregion
    }
}