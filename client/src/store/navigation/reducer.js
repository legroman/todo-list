import {NAVIGATION_FILTER} from "../types";

const defaultState = {
    filter: "All"
};

export const navigationReducer = (state = defaultState, action) => {
    if (action.type === NAVIGATION_FILTER) {
        return {
            ...state, filter: action.payload
        }
    } else
        return state;
};