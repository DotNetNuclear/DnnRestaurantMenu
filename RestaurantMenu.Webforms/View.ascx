<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="DotNetNuclear.Modules.RestaurantMenuWF.View" %>
<asp:Repeater ID="rptItemList" runat="server" OnItemDataBound="rptItemListOnItemDataBound" OnItemCommand="rptItemListOnItemCommand">
    <HeaderTemplate>
        <div id="pnl_restarauntmenu_items">
            <div id="NoRecords" runat="server" Visible="false">
                 <%=LocalizeString("NoRecords")%>
            </div>
    </HeaderTemplate>

    <ItemTemplate>
        <asp:Panel ID="pnlMenuitem" CssClass="menu-item" runat="server">
            <div class="item-imagearea">
                <asp:Image ID="imgItemPic" CssClass="itemimages-main" Width="225" Height="150" runat="server" />
                <asp:Panel ID="pnlFeatures" CssClass="itemimages-feature" runat="server" />
            </div>
            <div class="item-content">
                <asp:Panel ID="pnlAdmin" CssClass="admin-actions" runat="server" Visible="false">
                    <asp:HyperLink ID="lnkEdit" runat="server" ResourceKey="EditItem.Text" Visible="false" Enabled="false" />
                    <asp:LinkButton ID="lnkDelete" runat="server" ResourceKey="DeleteItem.Text" Visible="false" Enabled="false" CommandName="Delete" />
                </asp:Panel>
                <asp:Label ID="lblName" CssClass="item-name" runat="server" Text='<%#DataBinder.Eval(Container.DataItem,"Name").ToString() %>' />
                <asp:Label ID="lblDescription" CssClass="item-desc" runat="server" Text='<%#DataBinder.Eval(Container.DataItem,"Description").ToString() %>' />
                <asp:Label ID="lblPrice" CssClass="item-price" runat="server" />
            </div>
        </asp:Panel>
    </ItemTemplate>

    <FooterTemplate>
        </div>
    </FooterTemplate>
</asp:Repeater>
