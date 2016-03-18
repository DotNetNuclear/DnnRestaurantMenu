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
using System.Data;
using System.Data.SqlClient;
using Microsoft.ApplicationBlocks.Data;
using DotNetNuke.Framework.Providers;

namespace DotNetNuclear.Modules.RestaurantMenuMVC.Components.Data.DAL
{
    /// <summary>
    /// </summary>        
    public class SqlDataProvider : DataProvider
    {
        #region vars

        private const string providerType = "data";
        private const string moduleQualifier = "DotNetNuclear_RestaurantMenuMVC_";

        private ProviderConfiguration providerConfiguration = ProviderConfiguration.GetProviderConfiguration(providerType);
        private string connectionString;
        private string providerPath;
        private string objectQualifier;
        private string databaseOwner;

        #endregion

        #region cstor
        /// <summary>
        /// cstor used to create the sqlProvider with required parameters from the configuration
        /// section of web.config file
        /// </summary>
        public SqlDataProvider()
        {
            Provider provider = (Provider)providerConfiguration.Providers[providerConfiguration.DefaultProvider];
            connectionString = DotNetNuke.Common.Utilities.Config.GetConnectionString();

            if (connectionString == string.Empty)
                connectionString = provider.Attributes["connectionString"];

            providerPath = provider.Attributes["providerPath"];

            objectQualifier = provider.Attributes["objectQualifier"];
            if (objectQualifier != string.Empty && !objectQualifier.EndsWith("_"))
                objectQualifier += "_";

            databaseOwner = provider.Attributes["databaseOwner"];
            if (databaseOwner != string.Empty && !databaseOwner.EndsWith("."))
                databaseOwner += ".";
        }

        #endregion

        #region properties
        /// <summary>
        /// </summary>        
        public string ConnectionString
        {
            get { return connectionString; }
        }
        /// <summary>
        /// </summary>        
        public string ProviderPath
        {
            get { return providerPath; }
        }
        /// <summary>
        /// </summary>        
        public string ObjectQualifier
        {
            get { return objectQualifier; }
        }
        /// <summary>
        /// </summary>        
        public string DatabaseOwner
        {
            get { return databaseOwner; }
        }
        #endregion

        #region private methods
        private string GetFullyQualifiedName(string name)
        {
            return DatabaseOwner + ObjectQualifier + moduleQualifier + name;
        }
        private object GetNull(object field)
        {
            return DotNetNuke.Common.Utilities.Null.GetNull(field, DBNull.Value);
        }
        #endregion

        #region override methods

        /// <summary>
        /// </summary>        
        public override int AddItem(int moduleId, MenuItemDAL newItem)
        {
            int result = 0, itemId = 0;

            try
            {
                ArrayList parms = newItem.GetPropertiesToSQLParms(SQLAction.INSERT);
                SqlParameter prmNewEVOut = new SqlParameter("MenuItemId", 0);
                prmNewEVOut.Direction = ParameterDirection.Output;
                parms.Insert(0, prmNewEVOut);

                SqlParameter[] slParms = (SqlParameter[])parms.ToArray(typeof(SqlParameter));

                result = SqlHelper.ExecuteNonQuery(ConnectionString, CommandType.StoredProcedure, GetFullyQualifiedName("AddItem"), slParms);
                itemId = Convert.ToInt32(slParms[0].Value);
            }
            catch (Exception ex)
            {
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
            }
            return itemId;
        }

        /// <summary>
        /// </summary>        
        public override bool DeleteItem(int itemid)
        {
            try
            {
                string sSql = String.Format("DELETE FROM {0} WHERE MenuItemId = @ItemId;", GetFullyQualifiedName("Item"));
                SqlParameter prmMId = new SqlParameter("MenuItemId", SqlDbType.Int) { Value = itemid };
                SqlHelper.ExecuteNonQuery(ConnectionString, CommandType.Text, sSql, prmMId);
                return true;
            }
            catch (Exception ex)
            {
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
                return false;
            }
        }

        /// <summary>
        /// </summary>        
        public override IDataReader GetItem(int itemid)
        {
            string sSql = String.Format("SELECT * FROM {0} WHERE MenuItemId = @ItemId;", GetFullyQualifiedName("Item"));
            SqlParameter prmMId = new SqlParameter("MenuItemId", SqlDbType.Int) { Value = itemid };
 
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString, CommandType.Text, sSql, new SqlParameter[] { prmMId });
        }

        /// <summary>
        /// </summary>        
        public override IDataReader GetItemList(int moduleId)
        {
            string sSql = String.Format("SELECT * FROM {0} WHERE ModuleId = @ModuleId ORDER BY MenuItemId;", GetFullyQualifiedName("Item"));
            SqlParameter prmMId = new SqlParameter("ModuleId", SqlDbType.Int) { Value = moduleId };

            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString, CommandType.Text, sSql, new SqlParameter[] { prmMId } );
        }

        /// <summary>
        /// </summary>        
        public override bool UpdateItem(MenuItemDAL newItem)
        {
            try
            {
                ArrayList parms = newItem.GetPropertiesToSQLParms(SQLAction.UPDATE);
                SqlParameter[] slParms = (SqlParameter[])parms.ToArray(typeof(SqlParameter));

                SqlHelper.ExecuteNonQuery(ConnectionString, CommandType.StoredProcedure, GetFullyQualifiedName("UpdateItem"), slParms);
                return true;
            }
            catch (Exception ex)
            {
                DotNetNuke.Services.Exceptions.Exceptions.LogException(ex);
                return false;
            }
        }

        #endregion

    }
}
