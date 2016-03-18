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

using System.IO;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using DotNetNuke.Web.Api;

namespace DotNetNuclear.Modules.RestaurantMenuSPA.Services.Controllers
{
    public class UploadController : DnnApiController
    {
        public UploadController() { }

        [HttpPost]
        [AllowAnonymous]
        [ActionName("file")]
        public HttpResponseMessage SaveFile()
        {
            string imageUrl = string.Empty;

            string imgPath = System.Web.Hosting.HostingEnvironment.MapPath("~/Portals/0/Restaurant/");
            if (!Directory.Exists(imgPath))
            {
                Directory.CreateDirectory(imgPath);
            }

            foreach (string s in System.Web.HttpContext.Current.Request.Files)
            {
                var file = System.Web.HttpContext.Current.Request.Files[s];
                if (file.ContentLength > 0)
                {
                    string fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(imgPath, fileName);
                    file.SaveAs(path);
                    imageUrl = string.Format("/Portals/0/Restaurant/{0}", fileName);
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, new { img = imageUrl, thumb = imageUrl });
        }

    }
}
