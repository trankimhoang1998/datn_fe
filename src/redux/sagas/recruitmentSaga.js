import { call, delay, put, takeEvery } from "redux-saga/effects";
import history from "../../helper/history";
import ShowMessager from "../../helper/showMessager";
import {
  addRecruitment,
  changeActive,
  changeOrder,
  getCandidateByUserId,
  getRecruitment,
  getRecruitmentAdmin,
  getRecruitmentByUserId,
  getRecruitmentEdit,
  getRecruitmentOrder,
  updateRecruitment,
  getDetailRecruitment,
  dashboardClient,
  getCvByUserId,
  applyjob,
  dashboardAdmin
} from "../../services/apis/apiRecruitment";
import {
  changeActiveError,
  changeActiveSuccess,
  changeOrderError,
  changeOrderSuccess,
  fetchListCandidateByUserIdError,
  fetchListCandidateByUserIdSuccess,
  fetchListRecruitmentAdminError,
  fetchListRecruitmentAdminSuccess,
  fetchListRecruitmentByUserIdError,
  fetchListRecruitmentByUserIdSuccess,
  fetchListRecruitmentError,
  fetchListRecruitmentOrderError,
  fetchListRecruitmentOrderSuccess,
  fetchListRecruitmentSuccess,
  getInfoEditRecruitmentError,
  getInfoEditRecruitmentSuccess,
  updateRecruitmentError,
  updateRecruitmentSuccess,
  getDetailRecruitmentSuccess,
  getDetailRecruitmentError,
  dashboardClientSuccess,
  dashboardClientError,
  fetchListCvByUserIdSuccess,
  fetchListCvByUserIdError,
  dashboardAdminSuccess,
  dashboardAdminError
} from "../actionCreators/recruitmentActionCreator";
import * as recruimentActionType from "../actionTypes/recruitmentActionType";

export function* recruitmentSaga() {
  yield takeEvery(
    recruimentActionType.FETCH_LIST_RECRUITMENT_ORDER_REQUEST,
    watchFetchRecruitmentOrderList
  );

  yield takeEvery(
    recruimentActionType.FETCH_LIST_RECRUITMENT_REQUEST,
    watchFetchRecruitmemtList
  );

  yield takeEvery(
    recruimentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_REQUEST,
    watchFetchRecruitmemtByUserIdList
  );

  yield takeEvery(
    recruimentActionType.FETCH_LIST_CANDIDATE_BY_USERID_REQUEST,
    watchFetchCandidateByUserIdList
  );

  yield takeEvery(
    recruimentActionType.FETCH_LIST_CV_BY_USERID_REQUEST,
    watchFetchCvByUserIdList
  );

  yield takeEvery(
    recruimentActionType.ADD_RECRUITMENT_REQUEST,
    watchAddRecruitment
  );

  yield takeEvery(
    recruimentActionType.APPLY_JOB_REQUEST,
    watchApplyJob
  );

  yield takeEvery(
    recruimentActionType.GETINFO_EDIT_RECRUITMENT_REQUEST,
    watchGetInfoEditRecruitment
  );

  yield takeEvery(
    recruimentActionType.UPDATE_RECRUITMENT_REQUEST,
    watchUpdateRecruitment
  );

  yield takeEvery(
    recruimentActionType.FETCH_LIST_RECRUITMENT_ADMIN_REQUEST,
    watchFetchRecruitmentAdminList
  );

  yield takeEvery(
    recruimentActionType.CHANGE_ACTIVE_REQUEST,
    watchChangeActive
  );

  yield takeEvery(recruimentActionType.CHANGE_ORDER_REQUEST, watchChangeOrder);

  yield takeEvery(recruimentActionType.GETDETAIL_RECRUITMENT_REQUEST, watchDetailRecruitment)

  yield takeEvery(recruimentActionType.DASHBOARD_CLIENT_REQUEST, watchDashboardClient)

  yield takeEvery(recruimentActionType.DASHBOARD_ADMIN_REQUEST, watchDashboardAdmin)
}

function* watchFetchRecruitmentOrderList(action) {
  //yield put(showLoading());
  try {
    const resp = yield call(getRecruitmentOrder);
    const { data } = resp;
    yield put(fetchListRecruitmentOrderSuccess(data));
  } catch (e) {
    yield put(fetchListRecruitmentOrderError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchFetchRecruitmemtList(action) {
  try {
    const resp = yield call(getRecruitment, action.payload);
    const { data } = resp;
    yield put(fetchListRecruitmentSuccess(data));
  } catch (e) {
    yield put(fetchListRecruitmentError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchRecruitmemtByUserIdList(action) {
  try {
    const resp = yield call(getRecruitmentByUserId, action.payload);
    const { data } = resp;
    yield put(fetchListRecruitmentByUserIdSuccess(data));
  } catch (e) {
    yield put(fetchListRecruitmentByUserIdError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchCandidateByUserIdList(action) {
  try {
    const resp = yield call(getCandidateByUserId, action.payload);
    const { data } = resp;
    yield put(fetchListCandidateByUserIdSuccess(data));
  } catch (e) {
    yield put(fetchListCandidateByUserIdError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchCvByUserIdList(action) {
  try {
    const resp = yield call(getCvByUserId, action.payload);
    const { data } = resp;
    yield put(fetchListCvByUserIdSuccess(data));
  } catch (e) {
    yield put(fetchListCvByUserIdError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchAddRecruitment(action) {
  try {
    const resp = yield call(addRecruitment, action.payload);
    ShowMessager(true, "Thêm tin tuyển dụng thành công!");
    yield call(history.push, "/employer-dashbroad/list-job");
  } catch (e) {
    ShowMessager(false, "Thêm tin tuyển dụng thất bại!");
  }
}

function* watchApplyJob(action) {
  try {
    const resp = yield call(applyjob, action.payload);
    ShowMessager(true, "Ứng tuyển thành công!");
    yield call(history.push, "/candidate-dashbroad/list-job");
  } catch (e) {
    ShowMessager(false, "Ứng tuyển thất bại!");
  }
}


function* watchGetInfoEditRecruitment(action) {
  try {
    const resp = yield call(getRecruitmentEdit, action.payload);
    const { data } = resp;
    yield put(getInfoEditRecruitmentSuccess(data));
  } catch (e) {
    yield put(getInfoEditRecruitmentError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchUpdateRecruitment(action) {
  try {
    const resp = yield call(updateRecruitment, action.payload);
    const { data } = resp;
    ShowMessager(true, "Cập nhật tin tuyển dụng thành công!");
    yield call(history.push, "/employer-dashbroad/list-job");
    yield put(updateRecruitmentSuccess(data));
  } catch (e) {
    yield put(updateRecruitmentError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchFetchRecruitmentAdminList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getRecruitmentAdmin);
    const { data } = resp;
    yield put(fetchListRecruitmentAdminSuccess(data));
  } catch (e) {
    yield put(fetchListRecruitmentAdminError(e));
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
    ShowMessager(true, "Thành công!");
    yield put(changeOrderSuccess(data));
  } catch (e) {
    yield put(changeOrderError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchDetailRecruitment(action) {
  try {
    const resp = yield call(getDetailRecruitment, action.payload.id);
    const { data } = resp;
    yield put(getDetailRecruitmentSuccess(data));
  } catch (e) {
    yield put(getDetailRecruitmentError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchDashboardClient(action) {
  try {
    const resp = yield call(dashboardClient);
    const { data } = resp;
    yield put(dashboardClientSuccess(data));
  } catch (e) {
    yield put(dashboardClientError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}


function* watchDashboardAdmin(action) {
  try {
    const resp = yield call(dashboardAdmin);
    const { data } = resp;
    yield put(dashboardAdminSuccess(data));
  } catch (e) {
    yield put(dashboardAdminError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}