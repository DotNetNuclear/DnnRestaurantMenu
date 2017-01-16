import React, { Component, PropTypes }  from "react";
import { connect } from "react-redux";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPage from "dnn-persona-bar-page";
import Button from "dnn-button";
import MenuList from "./MenuList";
import resx from "localization";

class App extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
    }

    onCreate() {
        this.refs["menuPanel"].getWrappedInstance().onAddItem();
    }

    render() {
        return (
            <div className="restaurantMenu-app">
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title={resx.get("nav_RestaurantMenu")}>
                    {
                        <Button type="primary" size="large" onClick={this.onCreate.bind(this)} title={resx.get("btnNewItem")}>
                            {resx.get("btnNewItem") }
                        </Button>
                    }
                    </PersonaBarPageHeader>
                    <MenuList ref="menuPanel"/>
                </PersonaBarPage>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    menu: PropTypes.array
};

function mapStateToProps(state) {
    return {
        menu: state.menu.list
    };
}

export default connect(mapStateToProps)(App);