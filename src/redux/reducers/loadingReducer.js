import  * as loadingActionType from "../actionTypes/loadingActionType"

const initialState = {
  showLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingActionType.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true,
      };
    }
    case loadingActionType.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
