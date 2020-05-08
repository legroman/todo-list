import {SHOW_ALERT} from "../types";

export const showAlert = text => {
  return {
      type: SHOW_ALERT,
      payload: text
  }
};