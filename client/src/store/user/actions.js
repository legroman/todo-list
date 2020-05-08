import {USER_TOKEN_ID} from "../types";

export const login = data => {
  return {
      type: USER_TOKEN_ID,
      payload: data
  }
};

export const logout = () => {
  return {
      type: USER_TOKEN_ID,
      payload: {token: null, UserId: null, isAuthenticated: false}
  }
};
