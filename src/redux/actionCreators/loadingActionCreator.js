import  * as loadingActionType from "../actionTypes/loadingActionType"

export const showLoading = () => ({
    type: loadingActionType.SHOW_LOADING,
  });
  
  export const hideLoading = () => ({
    type: loadingActionType.HIDE_LOADING,
  });