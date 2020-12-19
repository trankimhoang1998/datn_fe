import { lastDayOfDecade } from "date-fns";
import JwtDecode from "jwt-decode";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import history from "../../helper/history";
import { getAccessToken } from "../../helper/localStorage";
import ShowMessager from "../../helper/showMessager";
import {
  addCv,
  getCvByCandidateId,
  getCvByUserId,
  updateCv,
  deleteCv,
  getCvById
} from "../../services/apis/apiCv";
import {
  getCvByCandidateIdError,
  getCvByCandidateIdSuccess,
  getCvByUserIdError,
  getCvByUserIdRequest,
  getCvByUserIdSuccess,
  getCvByIdSuccess,
  getCvByIdError,
  getDataUserSuccess,
  getDataCVSuccess
} from "../actionCreators/cvActionCreator";
import * as cvActionType from "../actionTypes/cvActionType";

export function* cvSaga() {
  yield takeEvery(cvActionType.ADD_CV_REQUEST, watchAddCv);

  yield takeEvery(cvActionType.GETCV_BY_USERID_REQUEST, watchGetCvByUserId);

  yield takeEvery(
    cvActionType.GETCV_BY_CANDIDATEID_REQUEST,
    watchGetCvByCandidateId
  );

  yield takeEvery(cvActionType.UPDATE_CV_REQUEST, watchUpdateCv);

  yield takeEvery(cvActionType.DELETE_CV_REQUEST, watchDeleteCv);

  yield takeEvery(cvActionType.GETCV_BY_ID_REQUEST, watchGetCvById);
}

function* watchAddCv(action) {
  try {
    const resp = yield call(addCv, action.payload);
    ShowMessager(true, "Thêm CV thành công!");
    yield call(history.push, "/candidate-dashbroad/list-cv");
  } catch (e) {
    ShowMessager(false, "Thêm CV thật bạn!");
  }
}

function* watchGetCvByUserId(action) {
  try {
    const resp = yield call(getCvByUserId, action.payload.id);
    const { data } = resp;
    yield put(getCvByUserIdSuccess(data));
  } catch (e) {
    yield put(getCvByUserIdError(e));
  } finally {
    yield delay(0);
  }
}

function* watchGetCvByCandidateId(action) {
  try {
    const resp = yield call(getCvByCandidateId, action.payload);
    const { data } = resp;
    yield put(getCvByCandidateIdSuccess(data));
  } catch (e) {
    yield put(getCvByCandidateIdError(e));
  } finally {
    yield delay(0);
  }
}

function* watchUpdateCv(action) {
  try {
    const resp = yield call(updateCv, action.payload);
    ShowMessager(true, "Update Cv Success");
    yield call(history.push, "/candidate-dashbroad/list-cv");
  } catch (e) {
    ShowMessager(false, "Update Cv Fail");
  }
}

function* watchDeleteCv(action) {
  try {
    let token = getAccessToken();
    if (token) {
      var id = JwtDecode(token).sub;
    }
    const resp = yield call(deleteCv, action.payload.id);
    ShowMessager(true, "Delete Cv Success");
    yield put(getCvByUserIdRequest(id));
  } catch (e) {
    ShowMessager(false, "Delete Cv Fail");
  }
}


function* watchGetCvById(action) {
  try {
    const resp = yield call(getCvById, action.payload.id);
    const { data } = resp;
    // console.log(JSON.parse(data.result[0].object).dataUser);
    // console.log(JSON.parse(data.result[0].object).dataCV);
    yield put(getDataUserSuccess(JSON.parse(data.result[0].object).dataUser));
    yield put(getDataCVSuccess(JSON.parse(data.result[0].object).dataCV));
    yield put(getCvByIdSuccess(data));
  } catch (e) {
    yield put(getCvByIdError(e));
  } finally {
    yield delay(0);
  }
}