/*
' Copyright (c) 2016 DotNetNuclear
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/

using System.Linq;
using DotNetNuke.Collections;

namespace DotNetNuclear.Modules.RestaurantMenuSPA.Components
{
    public interface IMenuItemRepository
    {

        int AddItem(MenuItem t);

        void DeleteItem(int itemId, int moduleId);

        void DeleteItem(MenuItem t);

        MenuItem GetItem(int itemId, int moduleId);

        IQueryable<MenuItem> GetItems(int moduleId);

        IPagedList<MenuItem> GetItems(string searchTerm, int moduleId, int pageIndex, int pageSize);

        void UpdateItem(MenuItem t);
    }
}