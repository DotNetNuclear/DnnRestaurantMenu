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
//using System.Xml;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Search;

namespace DotNetNuclear.Modules.RestaurantMenuWF.Components
{
    //uncomment the interfaces to add the support.
    public class FeatureController //: IPortable, ISearchable, IUpgradeable
    {


        #region Optional Interfaces

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ExportModule implements the IPortable ExportModule Interface
        /// </summary>
        /// <param name="ModuleID">The Id of the module to be exported</param>
        /// -----------------------------------------------------------------------------
        //public string ExportModule(int ModuleID)
        //{
        //string strXML = "";

        //List<RestaurantMenuInfo> colRestaurantMenus = GetRestaurantMenus(ModuleID);
        //if (colRestaurantMenus.Count != 0)
        //{
        //    strXML += "<RestaurantMenus>";

        //    foreach (RestaurantMenuInfo objRestaurantMenu in colRestaurantMenus)
        //    {
        //        strXML += "<RestaurantMenu>";
        //        strXML += "<content>" + DotNetNuke.Common.Utilities.XmlUtils.XMLEncode(objRestaurantMenu.Content) + "</content>";
        //        strXML += "</RestaurantMenu>";
        //    }
        //    strXML += "</RestaurantMenus>";
        //}

        //return strXML;

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ImportModule implements the IPortable ImportModule Interface
        /// </summary>
        /// <param name="ModuleID">The Id of the module to be imported</param>
        /// <param name="Content">The content to be imported</param>
        /// <param name="Version">The version of the module to be imported</param>
        /// <param name="UserId">The Id of the user performing the import</param>
        /// -----------------------------------------------------------------------------
        //public void ImportModule(int ModuleID, string Content, string Version, int UserID)
        //{
        //XmlNode xmlRestaurantMenus = DotNetNuke.Common.Globals.GetContent(Content, "RestaurantMenus");
        //foreach (XmlNode xmlRestaurantMenu in xmlRestaurantMenus.SelectNodes("RestaurantMenu"))
        //{
        //    RestaurantMenuInfo objRestaurantMenu = new RestaurantMenuInfo();
        //    objRestaurantMenu.ModuleId = ModuleID;
        //    objRestaurantMenu.Content = xmlRestaurantMenu.SelectSingleNode("content").InnerText;
        //    objRestaurantMenu.CreatedByUser = UserID;
        //    AddRestaurantMenu(objRestaurantMenu);
        //}

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// GetSearchItems implements the ISearchable Interface
        /// </summary>
        /// <param name="ModInfo">The ModuleInfo for the module to be Indexed</param>
        /// -----------------------------------------------------------------------------
        //public DotNetNuke.Services.Search.SearchItemInfoCollection GetSearchItems(DotNetNuke.Entities.Modules.ModuleInfo ModInfo)
        //{
        //SearchItemInfoCollection SearchItemCollection = new SearchItemInfoCollection();

        //List<RestaurantMenuInfo> colRestaurantMenus = GetRestaurantMenus(ModInfo.ModuleID);

        //foreach (RestaurantMenuInfo objRestaurantMenu in colRestaurantMenus)
        //{
        //    SearchItemInfo SearchItem = new SearchItemInfo(ModInfo.ModuleTitle, objRestaurantMenu.Content, objRestaurantMenu.CreatedByUser, objRestaurantMenu.CreatedDate, ModInfo.ModuleID, objRestaurantMenu.ItemId.ToString(), objRestaurantMenu.Content, "ItemId=" + objRestaurantMenu.ItemId.ToString());
        //    SearchItemCollection.Add(SearchItem);
        //}

        //return SearchItemCollection;

        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// UpgradeModule implements the IUpgradeable Interface
        /// </summary>
        /// <param name="Version">The current version of the module</param>
        /// -----------------------------------------------------------------------------
        //public string UpgradeModule(string Version)
        //{
        //	throw new System.NotImplementedException("The method or operation is not implemented.");
        //}

        #endregion

    }

}
