import {IS_AUTHENTICATED, SING_CONFIRM_PASSWORD, SING_PASSWORD, SING_USERNAME} from "../types";


const defaultState = {
    username: "",
    password: "",
    confirmPassword: ""
};

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SING_USERNAME:
            return {
                ...state, username: action.payload
            };
        case SING_PASSWORD:
            return {
                ...state, password: action.payload
            };
        case SING_CONFIRM_PASSWORD:
            return {
                ...state, confirmPassword: action.payload
            };
        default:
            return state;
    }
};