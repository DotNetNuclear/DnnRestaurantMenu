/*
' Copyright (c) 2017 DotNetNuclear.com
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 
*/
using DotNetNuke.Entities.Users;
using Newtonsoft.Json;

namespace DotNetNuclear.RestaurantMenu.PersonaBar.Services.ViewModels
{
    [JsonObject(MemberSerialization.OptIn)]
    public class SettingsViewModel
    {
        public SettingsViewModel()
        {
            CurrencyCulture = "en-US";
        }

        [JsonProperty("currencyCulture")]
        public string CurrencyCulture { get; set; }

    }
}