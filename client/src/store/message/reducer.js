import {SHOW_MESSAGE} from "../types";

const defaultState = {
    message: ''
};

export const messageReducer = (state = defaultState, action) => {
    if (action.type === SHOW_MESSAGE) {
        return {
            ...state, message: action.payload
        };
    } else
        return state;
};