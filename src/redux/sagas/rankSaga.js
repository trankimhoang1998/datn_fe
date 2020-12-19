import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getRank } from "../../services/apis/apiRank";
import {
  fetchListRankError,
  fetchListRankSuccess,
} from "../actionCreators/rankActionCreator";
import * as rankActionType from "../actionTypes/rankActionType";
export function* rankSaga() {
  yield takeEvery(rankActionType.FETCH_LIST_RANK_REQUEST, watchFetchRankList);
}

function* watchFetchRankList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getRank);
    const { data } = resp;
    yield put(fetchListRankSuccess(data));
  } catch (e) {
    yield put(fetchListRankError(e));
  } finally {
    yield delay(0);
    //  yield put(hideLoading());
  }
}
