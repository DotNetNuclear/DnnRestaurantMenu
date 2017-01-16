import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import HeaderRow from "./HeaderRow";
import DetailRow from "./DetailRow";
import MenuActions from "actions/MenuActions";
import MenuEditor from "./MenuEditor";
import CollapsibleSwitcher from "../common/CollapsibleSwitcher";
import resx from "localization";

import "./style.less";

class MenuList extends Component {
    constructor() {
        super();

        this.state = {
            openId: "",
            renderIndex: -1,
            parameter: { }
        };
    }

    componentWillMount() {
        this.refreshMenu();
    }

    //componentWillReceiveProps(newProps) {
    //}

    refreshMenu() {
        const {props, state} = this;
        props.dispatch(MenuActions.getMenu(state.parameter, (data) => {
            let menu = Object.assign([], data.Results);
            this.setState({ menu });
        }));
    }

    uncollapse(id, index) {
        setTimeout(() => {
            this.setState({
                openId: id,
                renderIndex: index
            });
        }, this.timeout);
    }
    collapse() {
        if (this.state.openId !== "") {
            this.setState({
                openId: "",
                renderIndex: -1
            });
        }
    }
    toggle(openId, index) {
        if (openId !== "") {
            this.uncollapse(openId, index);
        } else {
            this.collapse();
        }
    }

    renderedMenu() {
        if (this.props.menu.totalCount > 0) {
            let i = 0;
            return this.props.menu.list.map((item, index) => {
                let id = "row-" + i++;
                let children = [
                    <div />,
                    <MenuEditor
                        menuDetails={item}
                        onChangeField={MenuActions.changePageField}
                        refreshMenu={this.refreshMenu.bind(this)}
                        menuId={item.id}
                        Collapse={this.collapse.bind(this)}
                    />];
                return (
                    <DetailRow
                        name={item.name}
                        price={item.priceFormatted}
                        imageUrl={item.imageUrl}
                        index={index}
                        key={"menuitem-" + index}
                        closeOnClick={true}
                        openId={this.state.openId}
                        currentIndex={this.state.renderIndex}
                        OpenCollapseEditItems={this.toggle.bind(this, id, 1)}
                        Collapse={this.collapse.bind(this, id)}
                        id={id}>
                        <CollapsibleSwitcher children={children} renderIndex={this.state.renderIndex} />
                    </DetailRow>
                );
            });
        } else {
            return <div className="no-users-row">{resx.get("NoData")}</div>;
        }
    }

    onAddItem() {
        this.toggle(this.state.openId === "add" ? "" : "add", 1);
    }

    render() {
        let opened = (this.state.openId === "add");
        let children = [
            <div />,
            <MenuEditor
                menuId={-1}
                onChangeField={MenuActions.changePageField}
                refreshMenu={this.refreshMenu.bind(this)}
                Collapse={this.collapse.bind(this)}
            />];
        return (
            <PersonaBarPageBody className=""/*{styles.menuList}*/ >
                <HeaderRow />
                <div className="add-setting-editor">
                    <DetailRow
                        name={"-"}
                        price={0}
                        imageUrl={"/DesktopModules/DotNetNuclear/RestaurantMenuPB/Resources/images/noimage.png"}
                        index={"add"}
                        key={"menuitem-add"}
                        closeOnClick={true}
                        openId={this.state.openId}
                        currentIndex={this.state.renderIndex}
                        OpenCollapseEditItems={this.toggle.bind(this, "add", 1)}
                        Collapse={this.collapse.bind(this, "add")}
                        id={"add"}
                        addIsClosed={!opened}>
                        {opened && <CollapsibleSwitcher children={children} renderIndex={this.state.renderIndex} />}
                    </DetailRow>
                </div>
                <div className="menuitem-list-container">
                    {this.renderedMenu()}
                </div>
            </PersonaBarPageBody>
        );
    }
}

MenuList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    menu: PropTypes.array,
    loadMore: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        menu: state.menu,
        loadMore: state.loadMore
    };
}

export default connect(mapStateToProps, null, null, { withRef: true })(MenuList);
