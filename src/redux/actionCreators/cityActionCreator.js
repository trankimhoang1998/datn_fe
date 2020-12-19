import * as cityActionType from "../actionTypes/cityActionType";

export const fetchListCityRequest = () => {
  return {
    type: cityActionType.FETCH_LIST_CITY_REQUEST,
  };
};
export const fetchListCitySuccess = (data) => {
  return {
    type: cityActionType.FETCH_LIST_CITY_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCityError = (error) => {
  return {
    type: cityActionType.FETCH_LIST_CITY_ERROR,
    payload: {
      error,
    },
  };
};
