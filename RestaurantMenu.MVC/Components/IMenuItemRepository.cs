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
using DotNetNuclear.Modules.RestaurantMenuMVC.Models;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components
{
    public interface IMenuItemRepository
    {
        void CreateItem(IMenuItem t);
        void DeleteItem(int itemId, int moduleId);
        void DeleteItem(IMenuItem t);
        IEnumerable<IMenuItem> GetItems(int moduleId);
        IMenuItem GetItem(int itemId, int moduleId);
        void UpdateItem(IMenuItem t);
    }
}
