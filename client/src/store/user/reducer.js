import {USER_TOKEN_ID} from "../types";

const defaultState = {
    token: null,
    userId: null,
    isAuthenticated: false
};

export const userReducer = (state = defaultState, action) => {
    if (action.type === USER_TOKEN_ID) {
        return {
            ...state, ...action.payload
        }
    } else
        return state;
};