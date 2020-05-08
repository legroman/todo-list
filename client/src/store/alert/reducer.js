import {SHOW_ALERT} from "../types";

const defaultState = {
    alertText: ""
};

export const alertReducer = (state = defaultState, action) => {
    if (action.type === SHOW_ALERT) {
        return {
            ...state, alertText: action.payload
        }
    } else
        return state;

};