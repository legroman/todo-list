import {NAVIGATION_FILTER} from "../types";

export const setNavigationFilter = filter => {
    return{
        type: NAVIGATION_FILTER,
        payload: filter
    }
};