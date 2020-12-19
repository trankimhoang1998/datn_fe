import { fork} from "redux-saga/effects";
import { candidateSaga } from "./candidateSaga";
import { recruitmentSaga } from "./recruitmentSaga";
import { employerSaga } from "./employerSaga";
import { rankSaga } from "./rankSaga";
import { citySaga } from "./citySaga";
import { careerSaga } from "./careerSaga";
import { salarySaga } from "./salarySaga";
import { typeofworkSaga } from "./typeofworkSaga";
import { loginSaga } from "./loginSaga";
import { registerSaga } from "./registerSaga";
import { cvSaga } from "./cvSaga";

function* rootSaga() {
  yield fork(candidateSaga);
  yield fork(recruitmentSaga);
  yield fork(employerSaga);
  yield fork(rankSaga);
  yield fork(citySaga);
  yield fork(careerSaga);
  yield fork(salarySaga);
  yield fork(typeofworkSaga);
  yield fork(loginSaga);
  yield fork(registerSaga);
  yield fork(cvSaga);
}

export default rootSaga;
