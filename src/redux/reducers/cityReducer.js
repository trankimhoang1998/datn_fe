import * as cityActionType from "../actionTypes/cityActionType";

const initialState = {
  listCity: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case cityActionType.FETCH_LIST_CITY_REQUEST: {
      return {
        ...state,
      };
    }
    case cityActionType.FETCH_LIST_CITY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCity: data,

      };
    }
    case cityActionType.FETCH_LIST_CITY_ERROR: {
      return {
        ...state,
        listCity: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
