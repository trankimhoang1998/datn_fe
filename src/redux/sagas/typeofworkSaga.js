import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getTypeofwork } from "../../services/apis/apiTypeofwork";
import {
  fetchListTypeofworkError,
  fetchListTypeofworkSuccess,
} from "../actionCreators/typeofworkActionCreator";
import * as typeofworkActionType from "../actionTypes/typeofworkActionType";

export function* typeofworkSaga() {
  yield takeEvery(
    typeofworkActionType.FETCH_LIST_TYPEOFWORK_REQUEST,
    watchFetchTypeofworkList
  );
}

function* watchFetchTypeofworkList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getTypeofwork);
    const { data } = resp;
    yield put(fetchListTypeofworkSuccess(data));
  } catch (e) {
    yield put(fetchListTypeofworkError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}
