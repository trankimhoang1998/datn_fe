import { call, put, takeEvery } from "redux-saga/effects";
import history from "../../helper/history";
import { setAccessToken, setUserData } from "../../helper/localStorage";
import ShowMessager from "../../helper/showMessager";
import { login } from "../../services/apis/apiLogin";
import {
  getUserData,
  loginSuccess,
} from "../actionCreators/loginActionCreators";
import * as loginActionType from "../actionTypes/loginActionType";

export function* loginSaga() {
  yield takeEvery(loginActionType.LOGIN_REQUEST, watchLogin);
}

function* watchLogin(action) {
  try {
    const resp = yield call(login, action.payload.data);
    var { data, status } = resp;
    if (status === 200) {
      ShowMessager(true, "Đăng nhập thành công!");
      yield call(setAccessToken, data.result.accessToken);
      yield call(setUserData, data.result.name, data.result.avatar);
      yield put(loginSuccess(data));
      yield put(getUserData(data.result));
      yield call(history.push, "/");
    } else if ((status === 201)) {
      ShowMessager(false, "Tài khoản chưa được kích hoạt!");
    }
  } catch (e) {
    ShowMessager(false, "Vui lòng kiểm tra lại tài khoản mật khẩu!");
  }
}
