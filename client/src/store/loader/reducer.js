import {HIDE_LOADER, SHOW_LOADER} from "../types";

const defaultState = {
    loader: false
};

export const loaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state, loader: action.payload
            };
        case HIDE_LOADER:
            return {
                ...state, loader: action.payload
            };
        default:
            return state;
    }
};