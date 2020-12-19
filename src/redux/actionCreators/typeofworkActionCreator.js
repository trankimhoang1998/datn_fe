import * as typeofworkActionType from "../actionTypes/typeofworkActionType";

export const fetchListTypeofworkRequest = () => {
  return {
    type: typeofworkActionType.FETCH_LIST_TYPEOFWORK_REQUEST,
  };
};
export const fetchListTypeofworkSuccess = (data) => {
  return {
    type: typeofworkActionType.FETCH_LIST_TYPEOFWORK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTypeofworkError = (error) => {
  return {
    type: typeofworkActionType.FETCH_LIST_TYPEOFWORK_ERROR,
    payload: {
      error,
    },
  };
};
