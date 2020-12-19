import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getCareer } from "../../services/apis/apiCareer";
import {
  fetchListCareerError,
  fetchListCareerSuccess,
} from "../actionCreators/careerActionCreator";
import * as carrerActionType from "../actionTypes/careerActionType";

export function* careerSaga() {
  yield takeEvery(
    carrerActionType.FETCH_LIST_CAREER_REQUEST,
    watchFetchCareerList
  );
}

function* watchFetchCareerList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getCareer);
    const { data } = resp;

    yield put(fetchListCareerSuccess(data));
  } catch (e) {
    yield put(fetchListCareerError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}
