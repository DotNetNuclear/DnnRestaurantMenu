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
using System.Net.Http;
using System.Net;
using System.Web.Http;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Web.Api;
using DotNetNuke.Security;
using DotNetNuclear.RestaurantMenu.PersonaBar.Components;

namespace DotNetNuclear.RestaurantMenu.PersonaBar.Services.Controllers
{
    [SupportedModules(FeatureController.MODULENAME)]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Edit)]
    public class SettingsController : DnnApiController
    {
        public SettingsController() { }

        [HttpGet]  //[baseURL]/settings/load
        [ActionName("load")]
        public HttpResponseMessage LoadSettings()
        {
            var settings = new ViewModels.SettingsViewModel();

            if (ActiveModule.ModuleSettings.ContainsKey(FeatureController.MODSETTING_CULTURECODE))
            {
                settings.CurrencyCulture = ActiveModule.ModuleSettings[FeatureController.MODSETTING_CULTURECODE].ToString();
            }

            return Request.CreateResponse(HttpStatusCode.OK, settings);
        }

        [HttpPost]  //[baseURL]/settings/save
        [ActionName("save")]
        [ValidateAntiForgeryToken]
        public HttpResponseMessage SaveSettings(ViewModels.SettingsViewModel settings)
        {
            ModuleController.Instance.UpdateModuleSetting(ActiveModule.ModuleID, FeatureController.MODSETTING_CULTURECODE, settings.CurrencyCulture);

            return Request.CreateResponse(HttpStatusCode.OK, "success");
        }
    }
}
