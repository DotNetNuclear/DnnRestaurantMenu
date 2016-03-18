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

using System;
using System.Collections.Specialized;
using System.Globalization;
using DotNetNuclear.Modules.RestaurantMenuSPA.Components;
using Newtonsoft.Json;

namespace DotNetNuclear.Modules.RestaurantMenuSPA.Services.ViewModels
{
    [JsonObject(MemberSerialization.OptIn)]
    public class ItemViewModel
    {
        public ItemViewModel(MenuItem t, string cultureCode)
        {
            var culture = new CultureInfo(cultureCode);
            if (t != null)
            {
                Id = t.MenuItemId;
                Name = t.Name;
                Desc = t.Desc;
                ImageUrl = t.ImageUrl;
                Price = t.Price;
                PriceFormatted = Price.ToString("c", culture);
                if (String.IsNullOrEmpty(ImageUrl))
                {
                    ImageUrl = FeatureController.BASEMODULEPATH + "/Resources/images/noimage.png";
                }
                IsDailySpecial = t.IsDailySpecial;
                IsVegetarian = t.IsVegetarian;
            }
        }

        public ItemViewModel(MenuItem t, string cultureCode, string editUrl) : this(t, cultureCode)
        {
            EditUrl = editUrl;
        }

        public ItemViewModel() { }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("price")]
        public decimal Price { get; set; }

        [JsonProperty("priceFormatted")]
        public string PriceFormatted { get; set; }

        [JsonProperty("imageUrl")]
        public string ImageUrl { get; set; }

        [JsonProperty("description")]
        public string Desc { get; set; }

        [JsonProperty("isDailySpecial")]
        public bool IsDailySpecial { get; set; }

        [JsonProperty("isVegetarian")]
        public bool IsVegetarian { get; set; }

        [JsonProperty("editUrl")]
        public string EditUrl { get; }

        [JsonProperty("viewUrl")]
        public string ViewUrl { get; set; }
    }
}