import {IS_AUTHENTICATED, SING_CONFIRM_PASSWORD, SING_PASSWORD, SING_USERNAME} from "../types";

export const setUsername = username => {
  return {
      type: SING_USERNAME,
      payload: username
  }
};

export const setPassword = password => {
    return {
        type: SING_PASSWORD,
        payload: password
    }
};

export const setConfirmPassword = confirmPassword => {
    return {
        type: SING_CONFIRM_PASSWORD,
        payload: confirmPassword
    }
};