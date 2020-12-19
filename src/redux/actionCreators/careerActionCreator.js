import * as careerActionType from "../actionTypes/careerActionType";

export const fetchListCareerRequest = () => {
  return {
    type: careerActionType.FETCH_LIST_CAREER_REQUEST,
  };
};
export const fetchListCareerSuccess = (data) => {
  return {
    type: careerActionType.FETCH_LIST_CAREER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCareerError = (error) => {
  return {
    type: careerActionType.FETCH_LIST_CAREER_ERROR,
    payload: {
      error,
    },
  };
};
