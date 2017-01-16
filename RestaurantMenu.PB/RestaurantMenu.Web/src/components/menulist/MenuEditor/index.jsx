import React, {Component, PropTypes } from "react";
import { connect } from "react-redux";
import util from "../../../utils";
import resx from "../../../localization";
import Grid from "dnn-grid-system";
import FileUpload from "dnn-file-upload";
import Button from "dnn-button";
import Switch from "dnn-switch";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import MultiLineInput from "dnn-multi-line-input";
import Label from "dnn-label";
import MenuActions from "actions/MenuActions";

import "./style.less";

class MenuEditor extends Component {
    constructor(props) {
        super(props);
        let menuDetails = Object.assign({}, props.menuDetails);
        this.state = {
            menuDetails: props.menuId !== -1 ? menuDetails : {
                id: -1,
                name: "",
                description: "",
                imageUrl: "",
                imageName: "",
                imageFolder: "",
                imageFileId: 0,
                price: 0,
                isDailySpecial: false,
                isVegetarian: false
            },
            errors: {
                Name: false,
                Price: false
            },
            formModified: false
        };
        this.submitted = false;
    }

    onTextChange(key, event) {
        this.performChange(key, event.target.value);
    }

    performChange(key, value) {
        let {menuDetails} = this.state;
        menuDetails[key] = value;
        this.setState({
            menuDetails
        });
        let {state} = this;
        state.formModified = true;
        this.setState({
            state
        }, () => {
            this.validateForm();
        });
    }

    onSwitchToggle(key, status) {
        this.performChange(key, status);
    }

    addUpdateMenuItem(event) {
        event.preventDefault();
        const {props, state} = this;
        this.submitted = true;
        if (!this.validateForm()) {
            return;
        }

        if (state.formModified) {
            let {menuDetails} = this.state;
            let successMsg = resx.get("ItemAdded.Message");
            let errorMsg = resx.get("ItemAdded.Error");
            if (props.menuId > 0) {
                successMsg = resx.get("ItemUpdated.Message");
                errorMsg = resx.get("ItemUpdated.Error");
            }
            props.dispatch(MenuActions.saveItem(menuDetails, () => {
                util.notify(successMsg);
                props.Collapse(event);
                props.refreshMenu();
            }, () => {
                util.notify(errorMsg);
            }));
        }
        else {
            props.Collapse(event);
        }
    }

    validateForm() {
        let valid = true;
        if (this.submitted) {
            let {menuDetails} = this.state;
            let {errors} = this.state;
            errors.Name = false;
            if (menuDetails.name === "") {
                errors.Name = true;
                valid = false;
            }
            this.setState({ errors });
        }
        return valid;
    }

    onFileSelect(selectedFile) {
        this.performChange("imageName", selectedFile.fileName);
        this.performChange("imageFileId", selectedFile.fileId);
        //this.props.onChangeField("fileIdRedirection", selectedFile.fileId);
        //this.props.onChangeField("fileFolderPathRedirection", selectedFile.folderPath);
        //this.props.onChangeField("fileNameRedirection", selectedFile.fileName);
    }

    deleteMenuItem(event) {
        let {menuDetails} = this.state;
        const {props} = this;
        if (props.menuId > 0) {
            util.confirm(resx.get("DeleteMenu.Confirm"), resx.get("Delete"), resx.get("Cancel"), () => {
                props.dispatch(MenuActions.deleteItem(menuDetails, () => {
                    util.notify(resx.get("DeleteMenu.Message"));
                    props.Collapse(event);
                    props.refreshMenu();
                }));
            });
        }
        else {
            util.notify(resx.get("DeleteInconsistency.Error"));
        }
    }
    /* eslint-disable react/no-danger */
    render() {
        let {state} = this;
        let {menuDetails} = this.state;
        const utilities = {
            utilities: util
        };
        const selectedFile = menuDetails.imageFileId ? {
            fileId: menuDetails.imageFileId,
            folderPath: menuDetails.imageFolder,
            fileName: menuDetails.imageName
        } : null;

        const columnOne = <div className="editor-container">
            <div className="editor-row divider">
                <SingleLineInputWithError
                    value={state.menuDetails.name }
                    onChange={this.onTextChange.bind(this, "name") }
                    maxLength={50}
                    error={state.errors.Name}
                    label={resx.get("Name") }
                    tooltipMessage={resx.get("Name.Help") }
                    errorMessage={resx.get("Name.Required") }
                    autoComplete="off"
                    inputStyle={{ marginBottom: 15 }}
                    tabIndex={1}/>
            </div>
            <div className="editor-row divider">
                <Label label={resx.get("Description") } tooltipMessage={resx.get("Description.Help") } tooltipPlace={"top"} />
                <MultiLineInput value={state.menuDetails.description } onChange={this.onTextChange.bind(this, "description") }
                    tabIndex={2} maxLength={1000} />
            </div>
            <div className="editor-row divider">
                <SingleLineInputWithError
                    value={state.menuDetails.price}
                    onChange={this.onTextChange.bind(this, "price") }
                    maxLength={8}
                    error={state.errors.Price}
                    label={resx.get("Price") }
                    tooltipMessage={resx.get("Price.Help") }
                    errorMessage={resx.get("Price.Required") }
                    autoComplete="off"
                    inputStyle={{ marginBottom: 15 }}
                    tabIndex={3}/>
            </div>
        </div>;

        const columnTwo = <div className="editor-container right-column">
            <div className="editor-row">
                <Label label={resx.get("Image") } tooltipMessage={resx.get("Image.Help") } tooltipPlace={"top"} />
                <div className="image-container">
                    <FileUpload
                        utils={utilities}
                        selectedFile={selectedFile}
                        onSelectFile={this.onFileSelect.bind(this)} />
                </div>
            </div>
            <div className="status-row"  style={{ marginTop: "14px" }}>
                <div className="left" style={{ marginTop: "6px" }}>
                    <Label label={resx.get("isVegetarian") } tooltipMessage={resx.get("isVegetarian.Help") } tooltipPlace={"top"} />
                </div>
                <div className="right">
                    <Switch labelHidden={true} value={state.menuDetails.isVegetarian} tabIndex={5}
                        onChange={this.onSwitchToggle.bind(this, "isVegetarian") }/>
                </div>
            </div>
            <div className="status-row" style={{ marginTop: "14px" }}>
                <div className="left" style={{ marginTop: "6px" }}>
                    <Label label={resx.get("isDailySpecial") } tooltipMessage={resx.get("isDailySpecial.Help") } tooltipPlace={"top"} />
                </div>
                <div className="right">
                    <Switch labelHidden={true} value={state.menuDetails.isDailySpecial} tabIndex={6}
                        onChange={this.onSwitchToggle.bind(this, "isDailySpecial") }/>
                </div>
            </div>
        </div>;
        let children = [];
        children.push(columnOne);
        children.push(columnTwo);
        /* eslint-disable react/no-danger */
        return (
            <div className="menu-details-editor">
                <Grid children={children} numberOfColumns={2} />
                <div className="buttons-box">
                {
                    this.props.menuId > 0 && (state.menuDetails.id > -1) ?
                        <Button type="secondary" onClick={this.deleteMenuItem.bind(this) }>
                            {resx.get("Delete") }
                        </Button>
                        : null
                }
                <Button type="secondary" onClick={this.props.Collapse.bind(this) }>{resx.get("Cancel") }</Button>
                <Button type="primary" onClick={this.addUpdateMenuItem.bind(this) }>{resx.get("Save") }</Button>
                </div>
            </div >
            );
        }
}
MenuEditor.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //image: PropTypes.object.isRequired,
    menuId: PropTypes.number,
    menuDetails: PropTypes.object,
    Collapse: PropTypes.func,
    refreshMenu: PropTypes.func,
    onChangeField: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {  };
}

export default connect(mapStateToProps)(MenuEditor);
