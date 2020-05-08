import {SHOW_MESSAGE} from "../types";

export const setMessage = message => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    }
};