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

using System;
using System.Globalization;
using DotNetNuclear.RestaurantMenu.PersonaBar.Components;
using DotNetNuke.Services.FileSystem;
using Newtonsoft.Json;

namespace DotNetNuclear.RestaurantMenu.PersonaBar.Services.ViewModels
{
    [JsonObject(MemberSerialization.OptIn)]
    public class ItemViewModel
    {
        private string _imageFolder;

        public ItemViewModel(MenuItem t, string cultureCode, IFileInfo missingImageFile)
        {
            var culture = new CultureInfo(cultureCode);
            IFileInfo imgFile = null;

            if (t != null)
            {
                Id = t.MenuItemId;
                Name = t.Name;
                Desc = t.Desc;
                Price = t.Price;
                PriceFormatted = Price.ToString("c", culture);
                IsDailySpecial = t.IsDailySpecial;
                IsVegetarian = t.IsVegetarian;
                // Get image file
                ImageFileId = t.ImageFileId;
                if (t.ImageFileId > 0)
                {
                    imgFile = FileManager.Instance.GetFile(t.ImageFileId);
                    imgFile = imgFile ?? missingImageFile;
                }
                if (imgFile != null)
                {
                    ImageFileId = imgFile.FileId;
                    ImageName = imgFile.FileName;
                    ImageFolder = imgFile.Folder;
                    ImageUrl = FileManager.Instance.GetUrl(imgFile);
                }
            }
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

        [JsonProperty("imageFileId")]
        public int ImageFileId { get; set; }

        [JsonProperty("imageName")]
        public string ImageName { get; set; }

        [JsonProperty("imageFolder")]
        public string ImageFolder { get; set; }

        [JsonProperty("description")]
        public string Desc { get; set; }

        [JsonProperty("isDailySpecial")]
        public bool IsDailySpecial { get; set; }

        [JsonProperty("isVegetarian")]
        public bool IsVegetarian { get; set; }
    }
}