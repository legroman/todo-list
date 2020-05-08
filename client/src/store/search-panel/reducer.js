import {SEARCH_FORM} from "../types";

const defaultState = {
    term: ""
};

export const searchFormReducer = (state = defaultState, action) => {
    if (action.type === SEARCH_FORM){
        return {
            ...state, term: action.payload
        }
    }else
        return state;
};