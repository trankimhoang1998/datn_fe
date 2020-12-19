import { call, takeEvery } from "redux-saga/effects";
import history from "../../helper/history";
import ShowMessager from "../../helper/showMessager";
import {
  registerCandidate,
  registerEmployer,
} from "../../services/apis/apiRegister";
import * as registerActionType from "../actionTypes/registerActionType";

export function* registerSaga() {
  yield takeEvery(
    registerActionType.REGISTER_EMPLOYER_REQUEST,
    watchRegisterEmployer
  );
  yield takeEvery(
    registerActionType.REGISTER_CANDIDATE_REQUEST,
    watchRegisterCandidate
  );
}

function* watchRegisterEmployer(action) {
  try {
    const resp = yield call(registerEmployer, action.payload.data);
    var { status } = resp;
    if (status === 200) {
      ShowMessager(true, "Đăng ký ứng viên thành công!");
      yield call(history.push, "/login");
    } else if (status === 201) {
      ShowMessager(false, "Tài khoản đã tồn tại!");
    }
  } catch (e) {
    ShowMessager(false, "Đăng ký nhà tuyển dụng thất bại!");
  }
}

function* watchRegisterCandidate(action) {
  try {
    const resp = yield call(registerCandidate, action.payload.data);
    var { status } = resp;
    if (status === 200) {
      ShowMessager(true, "Đăng ký ứng viên thành công!");
      yield call(history.push, "/login");
    } else if (status === 201) {
      ShowMessager(false, "Tài khoản đã tồn tại!");
    }
  } catch (e) {
    ShowMessager(false, "Đăng ký nhà tuyển dụng thất bại!");
  }
}
