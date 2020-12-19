import * as loginActionType from "../actionTypes/loginActionType";

export const loginRequest = (data) => {
  return {
    type: loginActionType.LOGIN_REQUEST,
    payload: {
      data,
    },
  };
};
export const loginSuccess = (data) => {
  return {
    type: loginActionType.LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getUserData = (data) => {
  return {
    type: loginActionType.GET_DATA_USER,
    payload: {
      data,
    },
  };
};
export const loginError = (error) => {
  return {
    type: loginActionType.LOGIN_ERROR,
    payload: {
      error,
    },
  };
};
