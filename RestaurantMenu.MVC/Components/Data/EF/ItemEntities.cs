// *************************************************************************** 
// Project: Intensity Slider
// Copyright (c) DotNetNuclear LLC.
// http://www.dotnetnuclear.com
//
// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, 
// EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED 
// WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
// *************************************************************************** 
using System;

namespace DotNetNuclear.Modules.DataAccess.Components.EF
{
    public partial class ItemEntities
    {
        /// <summary>
        /// </summary>
        public static ItemEntities Instance()
        {
            var entityBuilder = new System.Data.EntityClient.EntityConnectionStringBuilder();
            entityBuilder.ProviderConnectionString = DotNetNuke.Common.Utilities.Config.GetConnectionString();
            entityBuilder.Metadata = "res://*/";
            entityBuilder.Provider = "System.Data.SqlClient";
            return new ItemEntities(entityBuilder.ToString());
        }
    }

}