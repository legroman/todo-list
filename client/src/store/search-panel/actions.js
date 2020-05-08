import {SEARCH_FORM} from "../types";

export const setSearchTerm = item => {
    return{
        type: SEARCH_FORM,
        payload: item
    }
};