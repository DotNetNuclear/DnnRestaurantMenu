<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Edit.ascx.cs" Inherits="DotNetNuclear.Modules.RestaurantMenuWF.Edit" %>
<%@ Register TagPrefix="dnn" TagName="label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" Assembly="DotNetNuke.Web" Namespace="DotNetNuke.Web.UI.WebControls" %>

<div class="dnnForm dnnEditBasicSettings" id="dnnEditBasicSettings">
    <div class="dnnFormExpandContent dnnRight "><a href=""><%=GetResourceString("ExpandAll")%></a></div>

    <h2 id="dnnSitePanel-BasicSettings" class="dnnFormSectionHead dnnClear">
        <a href="" class="dnnSectionExpanded">
            <%=GetResourceString("BasicSettings")%></a></h2>
    <fieldset>
        <div class="dnnFormItem">
            <dnn:label ID="lblName" runat="server" />
            <asp:TextBox ID="txtName" CssClass="dnnFormRequired" runat="server" />
            <asp:RequiredFieldValidator ID="rqValName" CssClass="dnnFormMessage dnnFormError" runat="server" ControlToValidate="txtName"
                ErrorMessage="Name is required"></asp:RequiredFieldValidator>
        </div>
        <div class="dnnFormItem">
            <dnn:label ID="lblPicture" runat="server" />
            <dnn:DnnFilePicker runat="server" ID="fpPicture" FileFilter="jpg,png,gif" />
        </div>
        <div class="dnnFormItem">
            <dnn:label ID="lblDescription" runat="server" />
            <asp:TextBox ID="txtDescription" CssClass="dnnFormRequired" runat="server" TextMode="MultiLine" Rows="3" />
            <asp:RequiredFieldValidator ID="rqValDescription" CssClass="dnnFormMessage dnnFormError" runat="server" ControlToValidate="txtDescription"
                ErrorMessage="Description is required"></asp:RequiredFieldValidator>
        </div>
        <div class="dnnFormItem">
            <dnn:label ID="lblDailySpecial" runat="server" />
            <asp:CheckBox ID="chkDailySpecial" runat="server" />
        </div>
        <div class="dnnFormItem">
            <dnn:label ID="lblVegetarian" runat="server" />
            <asp:CheckBox ID="chkVegetarian" runat="server" />
        </div>
        <div class="dnnFormItem">
            <dnn:label ID="lblPrice" runat="server" />
            <asp:TextBox ID="txtPrice" CssClass="dnnFormRequired" MaxLength="8" runat="server" Width="80px" />
            <asp:RequiredFieldValidator ID="rqValPrice" CssClass="dnnFormMessage dnnFormError" runat="server" ControlToValidate="txtPrice"
                ErrorMessage="Price is required"></asp:RequiredFieldValidator>
            <asp:CompareValidator ID="valCmpPrice" CssClass="dnnFormMessage dnnFormError" runat="server" Type="Double" ControlToValidate="txtPrice" 
                Operator="DataTypeCheck" ErrorMessage="Price must be a valid number"></asp:CompareValidator>
        </div>
        <ul class="dnnActions dnnClear">
			<li>
                <asp:LinkButton ID="btnSubmit" CssClass="dnnPrimaryAction" CausesValidation="true" onclick="btnSubmit_Click" runat="server">Save</asp:LinkButton>
            </li>
			<li>
                <asp:LinkButton ID="btnCancel" CssClass="dnnSecondaryAction" CausesValidation="false" onclick="btnCancel_Click" runat="server">Cancel</asp:LinkButton>
            </li>
		    </ul>
    </fieldset>
</div>

<script type="text/javascript">
    /*globals jQuery, window, Sys */
    (function ($, Sys) {
        function dnnEditBasicSettings() {
            $('#dnnEditBasicSettings').dnnPanels();
            $('#dnnEditBasicSettings .dnnFormExpandContent a').dnnExpandAll({ expandText: '<%=GetResourceString("ExpandAll")%>', collapseText: '<%=GetResourceString("CollapseAll")%>', targetArea: '#dnnEditBasicSettings' });
        }

        $(document).ready(function () {
            dnnEditBasicSettings();
            Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function () {
                dnnEditBasicSettings();
            });
        });

    }(jQuery, window.Sys));
</script>
