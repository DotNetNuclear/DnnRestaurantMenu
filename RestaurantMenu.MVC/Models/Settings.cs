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

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Models
{
    public class Settings
    {
        public string CurrencyCulture { get; set; }

        public IEnumerable<CultureSelection> CurrencyCultureOptions = 
            new List<CultureSelection>
            {
                new CultureSelection { Code = "en-US", Name = "US Dollars"},
                new CultureSelection { Code = "en-GB", Name = "UK Pounds"},
                new CultureSelection { Code = "de-DE", Name = "German Euro"},
                new CultureSelection { Code = "ja-JP", Name = "Japanese Yen"}
            };
    }

    public class CultureSelection
    {
        public string Code { get; set; }
        public string Name { get; set; }
    }
}