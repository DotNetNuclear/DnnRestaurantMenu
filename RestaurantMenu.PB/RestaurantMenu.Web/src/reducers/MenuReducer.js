import ActionTypes from "constants/actionTypes/MenuActionTypes";

export default function menu(state = {
    list: [],
    totalCount: 0
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_MENU:
            return {
                ...state,
                list: action.payload.Results,
                totalCount: action.payload.TotalResults
            };
        default:
            return state;
    }
}