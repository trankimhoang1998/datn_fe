import JwtDecode from "jwt-decode";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getAccessToken } from "../../helper/localStorage";
import ShowMessager from "../../helper/showMessager";
import {
  changeActive,
  changeOrder,
  getCandidate,
  getCandidateAdmin,
  getCandidateOrder,
  getInfoCandidateByUserId,
  getRecruimentApplyByUserId,
  updateInfoCandidateByUserId,
  getDetailCandidate,
  deleteApplyJob,
  dashboardCandidate
} from "../../services/apis/apiCandidate";
import {
  changeActiveError,
  changeActiveSuccess,
  changeOrderError,
  changeOrderSuccess,
  fetchInfoCandidateError,
  fetchInfoCandidateSuccess,
  fetchListCandidateAdminError,
  fetchListCandidateAdminSuccess,
  fetchListCandidateError,
  fetchListCandidateOrderError,
  fetchListCandidateOrderSuccess,
  fetchListCandidateSuccess,
  fetchListRecruitmentApplyError,
  fetchListRecruitmentApplySuccess,
  updateInfoCandidateError,
  updateInfoCandidateSuccess,
  getDetailCandidateSuccess,
  getDetailCandidateError,
  deleteApplyJobSuccess,
  deleteApplyJobError,
  fetchListRecruitmentApplyRequest,
  dashboardCandidateSuccess,
  dashboardCandidateError
} from "../actionCreators/candidateActionCreator";
import * as candidateActionType from "../actionTypes/candidateActionType";

export function* candidateSaga() {
  yield takeEvery(
    candidateActionType.FETCH_LIST_CANDIDATE_ORDER_REQUEST,
    watchFetchCandidateOrderList
  );

  yield takeEvery(
    candidateActionType.FETCH_LIST_CANDIDATE_REQUEST,
    watchFetchCandidateList
  );

  yield takeEvery(
    candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_REQUEST,
    watchFetchCandidateAdminList
  );

  yield takeEvery(candidateActionType.CHANGE_ACTIVE_REQUEST, watchChangeActive);

  yield takeEvery(candidateActionType.CHANGE_ORDER_REQUEST, watchChangeOrder);

  yield takeEvery(
    candidateActionType.FETCH_INFO_CANDIDATE_REQUEST,
    watchFetchCandidateInfo
  );

  yield takeEvery(
    candidateActionType.UPDATE_INFO_CANDIDATE_REQUEST,
    watchUpdateCandidateInfo
  );

  yield takeEvery(
    candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_REQUEST,
    watchRecruitmentApplyList
  );

  yield takeEvery(
    candidateActionType.GETDETAIL_CANDIDATE_REQUEST,
    watchDetailCandidate
  );

  yield takeEvery(
    candidateActionType.DELETE_APPLY_JOB_REQUEST,
    watchDeleteApplyJob
  );

  yield takeEvery(
    candidateActionType.DASHBOARD_CANDIDATE_REQUEST,
    watchDashboardCandidate
  );
}

function* watchFetchCandidateOrderList(action) {
  //yield put(showLoading());
  try {
    const resp = yield call(getCandidateOrder);
    const { data } = resp;
    yield put(fetchListCandidateOrderSuccess(data));
  } catch (e) {
    yield put(fetchListCandidateOrderError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchCandidateList(action) {
  try {
    const resp = yield call(getCandidate, action.payload);
    const { data } = resp;
    yield put(fetchListCandidateSuccess(data));
  } catch (e) {
    yield put(fetchListCandidateError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchFetchCandidateAdminList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getCandidateAdmin);
    const { data } = resp;
    yield put(fetchListCandidateAdminSuccess(data));
  } catch (e) {
    yield put(fetchListCandidateAdminError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchChangeActive(action) {
  try {
    const resp = yield call(changeActive, action.payload);
    const { data } = resp;
    ShowMessager(true, "Thành công !");
    yield put(changeActiveSuccess(data));
  } catch (e) {
    yield put(changeActiveError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchChangeOrder(action) {
  try {
    const resp = yield call(changeOrder, action.payload);
    const { data } = resp;
    yield put(changeOrderSuccess(data));
  } catch (e) {
    yield put(changeOrderError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchCandidateInfo(action) {
  try {
    const resp = yield call(getInfoCandidateByUserId, action.payload.id);
    const { data } = resp;
 
    yield put(fetchInfoCandidateSuccess(data));
  } catch (e) {
    yield put(fetchInfoCandidateError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchUpdateCandidateInfo(action) {
  try {
    const resp = yield call(updateInfoCandidateByUserId, action.payload);
    const { data } = resp;
    
    ShowMessager(true, "Cập nhật thông tin ứng viên thành công!");
    yield put(updateInfoCandidateSuccess(data));
  } catch (e) {
    yield put(updateInfoCandidateError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchRecruitmentApplyList(action) {
  try {
    const resp = yield call(getRecruimentApplyByUserId, action.payload);
    const { data } = resp;
    yield put(fetchListRecruitmentApplySuccess(data));
  } catch (e) {
    yield put(fetchListRecruitmentApplyError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchDetailCandidate(action) {
  try {
    const resp = yield call(getDetailCandidate, action.payload.id);
    const { data } = resp;
    yield put(getDetailCandidateSuccess(data));
  } catch (e) {
    yield put(getDetailCandidateError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchDeleteApplyJob(action) {
  try {
    let token = getAccessToken();
    if (token) {
      var id = JwtDecode(token).sub;
    }

    const resp = yield call(deleteApplyJob, action.payload.id);
    const { data } = resp;
    ShowMessager(true, "Xóa thành công!");
    yield put(fetchListRecruitmentApplyRequest(id, "", 5, 1));
    yield put(deleteApplyJobSuccess(data));
  } catch (e) {
    yield put(deleteApplyJobError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchDashboardCandidate(action) {
  try {
    const resp = yield call(dashboardCandidate, action.payload.id);
    const { data } = resp;
    yield put(dashboardCandidateSuccess(data));
  } catch (e) {
    yield put(dashboardCandidateError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}