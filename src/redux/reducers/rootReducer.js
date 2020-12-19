import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import candidateReducer from "./candidateReducer";
import employerReducer from "./employerReducer";
import recruitmentReducer from "./recruitmentReducer";
import rankReducer from "./rankReducer";
import cityReducer from "./cityReducer";
import careerReducer from "./careerReducer";
import salaryReducer from "./salaryReducer";
import typeofworkReducer from "./typeofworkReducer";
import loginReducer from "./loginReducer";
import cvReducer from "./cvReducer";

const myReducer = combineReducers({
  loading: loadingReducer,
  candidate: candidateReducer,
  employer: employerReducer,
  recruitment: recruitmentReducer,
  city: cityReducer,
  rank: rankReducer,
  career: careerReducer,
  salary: salaryReducer,
  typeofwork: typeofworkReducer,
  login: loginReducer,
  cv: cvReducer,
});

export default myReducer;
