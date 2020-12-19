import * as registerActionType from "../actionTypes/registerActionType";

export const registerEmployerRequest = (data) => {
  return {
    type: registerActionType.REGISTER_EMPLOYER_REQUEST,
    payload: {
      data,
    },
  };
};

export const registerCandidateRequest = (data) => {
  return {
    type: registerActionType.REGISTER_CANDIDATE_REQUEST,
    payload: {
      data,
    },
  };
};
