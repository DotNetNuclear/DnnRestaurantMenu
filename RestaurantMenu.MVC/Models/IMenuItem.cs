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
using System.Text;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Models
{
    public interface IMenuItem
    {
        int MenuItemId { get; set; }
        int ModuleId { get; set; }
        string Name { get; set; }
        string Desc { get; set; }
        string ImageUrl { get; set; }
        bool IsDailySpecial { get; set; }
        bool IsVegetarian { get; set; }
        decimal Price { get; set; }
        int DisplayOrder { get; set; }
        int AddedByUserId { get; set; }
        DateTime DateAdded { get; set; }
        int ModifiedByUserId { get; set; }
        DateTime DateModified { get; set; }
    }
}
