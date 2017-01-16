import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import GridCell from "dnn-grid-cell";
import Collapse from "dnn-collapsible";
import IconButton from "../../common/IconButton";
import resx from "../../../localization";
import RowDefinitions from "../RowDefinitions";

class DetailRow extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener("click", this.handleClick);
        this._isMounted = true;
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
        this._isMounted = false;
    }
    componentWillMount() {
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        this.setState({
            opened
        });
    }
    handleClick(event) {
        // Note: this workaround is needed in IE. The remove event listener in the componentWillUnmount is called
        // before the handleClick handler is called, but in spite of that, the handleClick is executed. To avoid
        // the "findDOMNode was called on an unmounted component." error we need to check if the component is mounted before execute this code
        if (!this._isMounted) { return; }
        if (!ReactDOM.findDOMNode(this).contains(event.target) && (typeof event.target.className === "string" && event.target.className.indexOf("do-not-close") === -1)
            && !(event.target.id === "confirmbtn" || event.target.id === "cancelbtn") && this.props.openId !== "add") {
            this.timeout = 475;
            if ((this.props.openId !== "" && this.props.id === this.props.openId)) {
                this.props.Collapse();
            }
        } else {
            this.timeout = 0;
        }
    }

    toggleEditItem() {
        if ((this.props.openId !== "" && this.props.id === this.props.openId) && this.props.currentIndex === 1) {
            this.props.Collapse();
        } else {
            this.props.OpenCollapseEditItems(this.props.id);
        }
    }

    render() {
        const {props} = this;
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        let uniqueId = "menuItem-" + Math.random() + Date.now();

        return (
            <div className={"collapsible-component1 " + opened} id={uniqueId}>
                {
                !props.addIsClosed && <div className={"collapsible-header1 " + !opened}>
                    {
                        RowDefinitions.map(rowDetail => {
                            if (rowDetail.key === 'edit') {
                                return <GridCell columnSize={rowDetail.columnSize}>
                                    <IconButton type="Edit"
                                    className={"edit-icon " + !(opened && props.currentIndex === 1)}
                                    onClick={this.toggleEditItem.bind(this)}
                                    title={resx.get("EditItem")}/>
                                </GridCell>;
                            } else if (rowDetail.key === 'imageUrl') {
                                return <GridCell columnSize={rowDetail.columnSize}>
                                    <img className="item-thumb" src={this.props[rowDetail.key]}></img>
                                </GridCell>;
                            } else {
                                return <GridCell columnSize={rowDetail.columnSize}>
                                    <h6>{this.props[rowDetail.key]}</h6>
                                </GridCell>;
                            }
                        })
                    }
                </div>
                }
                <Collapse accordion={true} isOpened={opened} className="menu-row-collapsible">
                        {opened && props.children}
                </Collapse>
            </div>
        );
    }
}


DetailRow.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
    OpenCollapseEditItems: PropTypes.func,
    Collapse: PropTypes.func,
    id: PropTypes.string,
    openId: PropTypes.string,
    currentIndex: PropTypes.number,
    visible: PropTypes.bool
};

DetailRow.defaultProps = {
    collapsed: true,
    visible: true
};

export default (DetailRow);

//DetailRow.propTypes = {
//    menuItem: PropTypes.object,
//    OpenCollapse: PropTypes.func,
//    Collapse: PropTypes.func,
//    id: PropTypes.string,
//    openId: PropTypes.string
//};

//export default DetailRow;