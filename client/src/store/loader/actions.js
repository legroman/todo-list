import {HIDE_LOADER, SHOW_LOADER} from "../types";

export const showLoader = loader => {
    return {
        type: SHOW_LOADER,
        payload: loader
    }
};

export const hideLoader = loader => {
    return {
        type: HIDE_LOADER,
        payload: loader
    }
};