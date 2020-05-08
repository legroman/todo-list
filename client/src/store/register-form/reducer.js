import {REGISTER_FORM, GET_UPDATE_KEY} from "../types";

const defaultState = {
    label: "",
    updateKey: 0
};

export const registerFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REGISTER_FORM:
            return {
                ...state, label: action.payload
            };
        case GET_UPDATE_KEY:
            return {
                ...state, updateKey: action.payload
            };
        default:
            return state;
    }
};