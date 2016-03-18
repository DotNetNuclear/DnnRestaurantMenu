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
using System.Web.Caching;
using DotNetNuke.Common.Utilities;
using DotNetNuke.ComponentModel.DataAnnotations;
using DotNetNuke.Entities.Content;

namespace DotNetNuclear.Modules.RestaurantMenuWF.Components
{
    [TableName("DotNetNuclear_RestaurantMenuWF_Item")]
    //setup the primary key for table
    [PrimaryKey("MenuItemId", AutoIncrement = true)]
    //configure caching using PetaPoco
    [Cacheable("RestaurantMenuWF_Items", CacheItemPriority.Default, 20)]
    //scope the objects to the ModuleId of a module on a page (or copy of a module on a page)
    [Scope("ModuleId")]
    public class RestaurantMenuItem
    {
        ///<summary>
        ///</summary>
        public int MenuItemId { get; set; }

        ///<summary>
        ///</summary>
        public int ModuleId { get; set; }

        ///<summary>
        ///</summary>
        public string Name { get; set; }

        ///<summary>
        ///</summary>
        [ColumnName("Desc")]
        public string Description { get; set; }

        ///<summary>
        ///</summary>
        public bool IsDailySpecial { get; set; }

        ///<summary>
        ///</summary>
        public bool IsVegetarian { get; set; }

        ///<summary>
        ///</summary>
        public decimal Price { get; set; }

        ///<summary>
        ///</summary>
        public int PictureFileId { get; set; }

        ///<summary>
        ///</summary>
        public int AddedByUserId { get; set; }

        ///<summary>
        ///</summary>
        public DateTime DateAdded { get; set; }

        ///<summary>
        ///</summary>
        public int ModifiedByUserId { get; set; }

        ///<summary>
        ///</summary>
        public DateTime DateModified { get; set; }
    }
}
