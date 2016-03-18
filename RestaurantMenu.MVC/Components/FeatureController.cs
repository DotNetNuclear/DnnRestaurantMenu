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

using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components
{

    public class FeatureController //: IPortable, ISearchable, IUpgradeable
    {
        public const string BASEMODULEPATH = @"/DesktopModules/MVC/DotNetNuclear/RestaurantMenu";

        public static IMenuItemRepository DataRepositoryFactory(string datalayer)
        {
            IMenuItemRepository repo;
            switch (datalayer.ToUpper())
            {
                case "DAL2":
                    repo = new Data.DAL2.MenuItemRepository();
                    break;

                //case "EF":
                //    repo = new EF.ItemRepository();
                //    break;

                //case "CI":
                //    repo = new Data.CI.ItemRepository();
                //    break;

                default:
                    repo = new Data.DAL.MenuItemRepository();
                    break;
            }
            return repo;
        }

        public static IMenuItem DataModelFactory(string datalayer)
        {
            IMenuItem model;
            switch (datalayer.ToUpper())
            {
                case "DAL2":
                    model = new Models.MenuItem();
                    break;

                //case "EF":
                //    model = new EF.Item();
                //    break;

                //case "CI":
                //    model = new CI.Item();
                //    break;

                default:
                    model = new Data.DAL.MenuItemDAL();
                    break;
            }
            return model;
        }

    }

}
