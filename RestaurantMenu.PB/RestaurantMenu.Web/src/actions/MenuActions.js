import ActionTypes from "constants/actionTypes/MenuActionTypes";
import MenuService from "services/MenuService";
import Utils from "utils";

function errorCallback(message) {
    Utils.notifyError(JSON.parse(message.responseText).Message, 5000);
}

const MenuActions = {
    getMenu(searchParameters, callback) {
        return (dispatch) => {
            MenuService.getMenuItems(searchParameters, (data) => {
                dispatch({
                    type: ActionTypes.RETRIEVED_MENU,
                    payload: data
                });
                if (callback) {
                    callback(data);
                }
            }, errorCallback);
        };
    },
    saveItem(menuItem, callback) {
        return (dispatch) => {
            MenuService.saveMenuItem(menuItem, data => {
                dispatch({
                    type: ActionTypes.UPDATE_MENUITEM,
                    payload: menuItem
                });

                if (callback) {
                    callback(data);
                }
            }, errorCallback);
        };
    },
    deleteItem(menuItem, callback) {
        return (dispatch) => {
            MenuService.deleteMenuItem(menuItem, data => {
                dispatch({
                    type: ActionTypes.DELETE_MENUITEM,
                    data: { menuId: data.itemId }
                });

                if (callback) {
                    callback();
                }
            }, errorCallback);
        };
    },
    changePageField(key, value) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.CHANGE_FIELD_VALUE,
                field: key,
                value
            });
        };
    }
};

export default MenuActions;
