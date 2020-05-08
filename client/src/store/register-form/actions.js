import {REGISTER_FORM, GET_UPDATE_KEY} from "../types";

export const setRegisterForm = item => {
    return {
        type: REGISTER_FORM,
        payload: item
    }
};

export const setLabelKey = key => {
  return {
      type: GET_UPDATE_KEY,
      payload: key
  }
};