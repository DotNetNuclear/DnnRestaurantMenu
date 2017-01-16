import React, { Component, PropTypes } from "react";
import GridCell from "dnn-grid-cell";
import RowDefinitions from "../RowDefinitions";

class HeaderRow extends Component {
    render() {
        return (
            <GridCell columnSize={100} className="header-row">
            {
                RowDefinitions.map((header) => {
                    return <GridCell columnSize={header.columnSize}>
                        <h6>{header.header}</h6>
                    </GridCell>;
                })
            }
            </GridCell>
        );
    }
}

HeaderRow.propTypes = {
    headers: PropTypes.array.isRequired
};

export default HeaderRow;