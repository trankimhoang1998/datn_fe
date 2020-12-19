import * as loginActionType from "../actionTypes/loginActionType";

const initialState = {
  dataLogin: {
    status: true,
    message: "Đăng nhập thành công!",
    result: {
      accessToken: "",
      id: 0,
    },
  },
  userData: {

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActionType.LOGIN_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        dataLogin: data,
      };
    };
    case loginActionType.GET_DATA_USER: {
      const { data } = action.payload;
      return {
        ...state,
        userData: data,
      };
    };
    

    default:
      return state;
  }
};

export default reducer;
