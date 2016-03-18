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
using System.Collections;
using System.Reflection;
using System.Data.SqlClient;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL
{
    ///<summary>
    /// This base class defines some basic methods of a value object
    ///</summary>
    [Serializable()]
    public abstract class BaseModel
    {
        /// <summary>
        /// </summary>        
        protected SQLAction changemode = SQLAction.NONE;

        /// <summary>
        /// </summary>        
        public ArrayList GetPropertiesToSQLParms(SQLAction action)
        {
            bool includeInParamsList;
            PropertyInfo[] properties = this.GetType().GetProperties();
            ArrayList procParms = new ArrayList();
            for (int i = 0; i < properties.Length; i++)
            {
                includeInParamsList = true;
                object[] attrs = properties[i].GetCustomAttributes(false);
                foreach (SQLParamAttribute a in attrs)
                {
                    if (action == SQLAction.INSERT)
                        includeInParamsList = a.insertParm;
                    else
                        includeInParamsList = a.updateParm;
                }

                // Create a sql parameter for all public properties
                if (properties[i].MemberType == MemberTypes.Property && includeInParamsList)
                {
                    procParms.Add(new SqlParameter(properties[i].Name, properties[i].GetValue(this, null)));
                }
            }
            return procParms;
        }
    }

    /// <summary>
    /// </summary>        
    [System.AttributeUsage(System.AttributeTargets.Property)]
    public class SQLParamAttribute : System.Attribute
    {
        /// <summary>
        /// </summary>        
        public bool updateParm = true;
        /// <summary>
        /// </summary>        
        public bool insertParm = true;

        /// <summary>
        /// </summary>        
        public SQLParamAttribute(bool ForUpdate, bool ForInsert)
        {
            this.updateParm = ForUpdate;
            this.insertParm = ForInsert;
        }
    }

    /// <summary>
    /// </summary>        
    public enum SQLAction {
        /// <summary>
        /// </summary>        
        NONE,
        /// <summary>
        /// </summary>        
        UPDATE,
        /// <summary>
        /// </summary>        
        INSERT,
        /// <summary>
        /// </summary>        
        DELETE
    };
}
