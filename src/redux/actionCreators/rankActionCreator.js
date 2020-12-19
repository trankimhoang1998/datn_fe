import * as rankActionType from "../actionTypes/rankActionType";

export const fetchListRankRequest = () => {
  return {
    type: rankActionType.FETCH_LIST_RANK_REQUEST,
  };
};
export const fetchListRankSuccess = (data) => {
  return {
    type: rankActionType.FETCH_LIST_RANK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRankError = (error) => {
  return {
    type: rankActionType.FETCH_LIST_RANK_ERROR,
    payload: {
      error,
    },
  };
};
