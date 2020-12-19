import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getSalary } from "../../services/apis/apiSalary";
import {
  fetchListSalaryError,
  fetchListSalarySuccess,
} from "../actionCreators/salaryActionCreator";
import * as salaryActionType from "../actionTypes/salaryActionType";

export function* salarySaga() {
  yield takeEvery(
    salaryActionType.FETCH_LIST_SALARY_REQUEST,
    watchFetchSalaryList
  );
}

function* watchFetchSalaryList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getSalary);
    const { data } = resp;
    yield put(fetchListSalarySuccess(data));
  } catch (e) {
    yield put(fetchListSalaryError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}
