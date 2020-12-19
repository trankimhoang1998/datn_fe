import * as careerActionType from "../actionTypes/careerActionType";

const initialState = {
  listCareer: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case careerActionType.FETCH_LIST_CAREER_REQUEST: {
      return {
        ...state,
      };
    }
    case careerActionType.FETCH_LIST_CAREER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCareer: data,

      };
    }
    case careerActionType.FETCH_LIST_CAREER_ERROR: {
      return {
        ...state,
        listCareer: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
