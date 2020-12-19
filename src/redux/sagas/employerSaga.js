import jwtDecode from "jwt-decode";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getAccessToken } from "../../helper/localStorage";
import ShowMessager from "../../helper/showMessager";
import {
  changeActive,
  changeOrder,
  dashboardEmployer,
  deleteRecruitment,
  getEmployer,
  getEmployerAdmin,
  getEmployerOrder,
  getInfoEmployerByUserId,
  updateInfoEmployerByUserId,
  getDetailEmployer,
  getRecruitmentsByEmployerId,
  deleteApplyJob
} from "../../services/apis/apiEmployer";
import {
  changeActiveError,
  changeActiveSuccess,
  changeOrderError,
  changeOrderSuccess,
  dashboardEmployerError,
  dashboardEmployerSuccess,
  deleteRecruitmentError,
  deleteRecruitmentSuccess,
  fetchInfoEmployerError,
  fetchInfoEmployerSuccess,
  fetchListEmployerAdminError,
  fetchListEmployerAdminSuccess,
  fetchListEmployerError,
  fetchListEmployerOrderError,
  fetchListEmployerOrderSuccess,
  fetchListEmployerSuccess,
  updateInfoEmployerError,
  updateInfoEmployerSuccess,
  getDetailEmployerSuccess,
  getDetailEmployerError,
  getRecruitmentByEmployerIdSuccess,
  getRecruitmentByEmployerIdError,
  deleteApplyJobSuccess,
  deleteApplyJobError
} from "../actionCreators/employerActionCreator";
import { fetchListRecruitmentByUserIdRequest,fetchListCvByUserIdRequest } from "../actionCreators/recruitmentActionCreator";
import * as employerActionType from "../actionTypes/employerActionType";

export function* employerSaga() {
  yield takeEvery(
    employerActionType.FETCH_LIST_EMPLOYER_ORDER_REQUEST,
    watchFetchEmployerOrderList
  );

  yield takeEvery(
    employerActionType.FETCH_LIST_EMPLOYER_REQUEST,
    watchFetchEmployertList
  );

  yield takeEvery(
    employerActionType.FETCH_INFO_EMPLOYER_REQUEST,
    watchFetchEmployertInfo
  );

  yield takeEvery(
    employerActionType.UPDATE_INFO_EMPLOYER_REQUEST,
    watchUpdateEmployertInfo
  );

  yield takeEvery(
    employerActionType.FETCH_LIST_EMPLOYER_ADMIN_REQUEST,
    watchFetchEmployerAdminList
  );

  yield takeEvery(employerActionType.CHANGE_ACTIVE_REQUEST, watchChangeActive);

  yield takeEvery(employerActionType.CHANGE_ORDER_REQUEST, watchChangeOrder);

  yield takeEvery(
    employerActionType.DASHBOARD_EMPLOYER_REQUEST,
    watchDashboardEmployer
  );

  yield takeEvery(
    employerActionType.DELETE_RECRUITMENT_REQUEST,
    watchDeleteRecruitment
  );

  yield takeEvery(
    employerActionType.GETDETAIL_EMPLOYER_REQUEST,
    watchDetailEmployer
  );

  yield takeEvery(
    employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_REQUEST,
    watchListRecruitmentByEmployerId
  );

  yield takeEvery(
    employerActionType.DELETE_APPLY_JOB_REQUEST,
    watchDeleteApplyJob
  );
}

function* watchFetchEmployerOrderList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getEmployerOrder);
    const { data } = resp;
    yield put(fetchListEmployerOrderSuccess(data));
  } catch (e) {
    yield put(fetchListEmployerOrderError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchFetchEmployertList(action) {
  try {
    const resp = yield call(getEmployer, action.payload);
    const { data } = resp;
    yield put(fetchListEmployerSuccess(data));
  } catch (e) {
    yield put(fetchListEmployerError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchFetchEmployertInfo(action) {
  try {
    const resp = yield call(getInfoEmployerByUserId, action.payload.id);
    const { data } = resp;
    yield put(fetchInfoEmployerSuccess(data));
  } catch (e) {
    yield put(fetchInfoEmployerError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchUpdateEmployertInfo(action) {
  try {
    const resp = yield call(updateInfoEmployerByUserId, action.payload);
    const { data } = resp;
    ShowMessager(true, "Cập nhật thông tin nhà tuyển dụng thành công!");
    yield put(updateInfoEmployerSuccess(data));
  } catch (e) {
    yield put(updateInfoEmployerError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchFetchEmployerAdminList(action) {
  // yield put(showLoading());
  try {
    const resp = yield call(getEmployerAdmin);
    const { data } = resp;
    yield put(fetchListEmployerAdminSuccess(data));
  } catch (e) {
    yield put(fetchListEmployerAdminError(e));
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
    ShowMessager(true, "Thành công !");
    yield put(changeOrderSuccess(data));
  } catch (e) {
    yield put(changeOrderError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

function* watchDashboardEmployer(action) {
  try {
    const resp = yield call(dashboardEmployer, action.payload.id);
    const { data } = resp;
    yield put(dashboardEmployerSuccess(data));
  } catch (e) {
    yield put(dashboardEmployerError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchDeleteRecruitment(action) {
  try {
    let token = getAccessToken();
    if (token) {
      var id = jwtDecode(token).sub;
    }

    const resp = yield call(deleteRecruitment, action.payload.id);
    const { data } = resp;
    ShowMessager(true, "Xóa thàng công!");
    yield put(fetchListRecruitmentByUserIdRequest(id, "", "", 5, 1));
    yield put(deleteRecruitmentSuccess(data));
  } catch (e) {
    yield put(deleteRecruitmentError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

function* watchDeleteApplyJob(action) {
  try {
    let token = getAccessToken();
    if (token) {
      var id = jwtDecode(token).sub;
    }

    const resp = yield call(deleteApplyJob, action.payload.id);
    const { data } = resp;
    ShowMessager(true, "Xóa thàng công!");
    yield put(fetchListCvByUserIdRequest(id, "", 5, 1));
    yield put(deleteApplyJobSuccess(data));
  } catch (e) {
    yield put(deleteApplyJobError(e));
  } finally {
    yield delay(0);
    // yield put(hideLoading());
  }
}

///
function* watchDetailEmployer(action) {
  try {
    const resp = yield call(getDetailEmployer,action.payload.id);
    const { data } = resp;
    yield put(getDetailEmployerSuccess(data));
  } catch (e) {
    yield put(getDetailEmployerError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}


function* watchListRecruitmentByEmployerId(action) {
  try {
    const resp = yield call(getRecruitmentsByEmployerId,action.payload);
    const { data } = resp;
    yield put(getRecruitmentByEmployerIdSuccess(data));
  } catch (e) {
    yield put(getRecruitmentByEmployerIdError(e));
  } finally {
    yield delay(0);
    //yield put(hideLoading());
  }
}

