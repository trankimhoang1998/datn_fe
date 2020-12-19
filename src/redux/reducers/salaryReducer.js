import * as salaryActionType from "../actionTypes/salaryActionType";

const initialState = {
  listSalary: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case salaryActionType.FETCH_LIST_SALARY_REQUEST: {
      return {
        ...state,
      };
    }
    case salaryActionType.FETCH_LIST_SALARY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listSalary: data,

      };
    }
    case salaryActionType.FETCH_LIST_SALARY_ERROR: {
      return {
        ...state,
        listSalary: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
