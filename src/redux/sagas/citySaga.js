import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getCity } from "../../services/apis/apiCity";
import {
  fetchListCityError,
  fetchListCitySuccess,
} from "../actionCreators/cityActionCreator";
import * as cityActionType from "../actionTypes/cityActionType";

export function* citySaga() {
  yield takeEvery(cityActionType.FETCH_LIST_CITY_REQUEST, watchFetchCityList);
}

function* watchFetchCityList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getCity);
    const { data } = resp;
    yield put(fetchListCitySuccess(data));
  } catch (e) {
    yield put(fetchListCityError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}
