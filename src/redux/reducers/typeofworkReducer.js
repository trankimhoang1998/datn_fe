import * as typeofworkActionType from "../actionTypes/typeofworkActionType";

const initialState = {
  listTypeofwork: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeofworkActionType.FETCH_LIST_TYPEOFWORK_REQUEST: {
      return {
        ...state,
      };
    }
    case typeofworkActionType.FETCH_LIST_TYPEOFWORK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTypeofwork: data,

      };
    }
    case typeofworkActionType.FETCH_LIST_TYPEOFWORK_ERROR: {
      return {
        ...state,
        listTypeofwork: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
