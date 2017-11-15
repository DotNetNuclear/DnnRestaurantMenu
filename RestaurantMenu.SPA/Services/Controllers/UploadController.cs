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
using System.IO;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using DotNetNuke.Web.Api;
using DotNetNuke.Services.FileSystem;

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

            try
            {
                // Check if folder exists, otherwise create
                var imgFolder = FolderManager.Instance.GetFolder(0, "/Restaurant");
                if (imgFolder == null)
                {
                    imgFolder = FolderManager.Instance.AddFolder(0, "/Restaurant");
                }

                // Loop thu all files in request (if there are more than 1)
                foreach (string s in System.Web.HttpContext.Current.Request.Files)
                {
                    var file = System.Web.HttpContext.Current.Request.Files[s];
                    if (file.ContentLength > 0)
                    {
                        string fileName = Path.GetFileName(file.FileName);
                        // Check if file exists
                        var uploadFile = FileManager.Instance.GetFile(imgFolder, fileName);
                        if (uploadFile == null)
                        {
                            uploadFile = FileManager.Instance.AddFile(imgFolder, fileName, file.InputStream);
                        }

                        // Assign the url of the image file to output to be used in img src attribute
                        imageUrl = FileManager.Instance.GetUrl(uploadFile);
                    }
                }
            }
            catch (Exception ex)
            {
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, new { img = imageUrl, thumb = imageUrl });
        }

    }
}
