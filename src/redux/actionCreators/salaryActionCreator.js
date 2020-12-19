import * as salaryActionType from "../actionTypes/salaryActionType";

export const fetchListSalaryRequest = () => {
  return {
    type: salaryActionType.FETCH_LIST_SALARY_REQUEST,
  };
};
export const fetchListSalarySuccess = (data) => {
  return {
    type: salaryActionType.FETCH_LIST_SALARY_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListSalaryError = (error) => {
  return {
    type: salaryActionType.FETCH_LIST_SALARY_ERROR,
    payload: {
      error,
    },
  };
};
