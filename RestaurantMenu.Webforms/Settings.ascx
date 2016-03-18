<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Settings.ascx.cs" Inherits="DotNetNuclear.Modules.RestaurantMenuWF.Settings" %>

<%@ Register TagName="label" TagPrefix="dnn" Src="~/controls/labelcontrol.ascx" %>

<h2 id="dnnSitePanel-BasicSettings" class="dnnFormSectionHead"><a href="" class="dnnSectionExpanded"><%=LocalizeString("BasicSettings")%></a></h2>
<fieldset>
    <div class="dnnFormItem">
        <dnn:Label ID="lblCulture" runat="server" /> 
        <asp:DropDownList ID="ddlCurrencyCulture" runat="server">
            <asp:ListItem Value="en-US" Text="US Dollars" />
            <asp:ListItem Value="en-GB" Text="UK Pounds" />
            <asp:ListItem Value="de-DE" Text="German Euro" />
            <asp:ListItem Value="ja-JP" Text="Japanese Yen" />
        </asp:DropDownList>
    </div>
</fieldset>
