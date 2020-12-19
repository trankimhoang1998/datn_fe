import * as rankActionType from "../actionTypes/rankActionType";

const initialState = {
  listRank: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case rankActionType.FETCH_LIST_RANK_REQUEST: {
      return {
        ...state,
      };
    }
    case rankActionType.FETCH_LIST_RANK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRank: data,
      };
    }
    case rankActionType.FETCH_LIST_RANK_ERROR: {
      return {
        ...state,
        listRank: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
