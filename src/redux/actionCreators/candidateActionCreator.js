import * as candidateActionType from "../actionTypes/candidateActionType";

export const fetchListCandidateOrderRequest = () => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ORDER_REQUEST,
  };
};
export const fetchListCandidateOrderSuccess = (data) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCandidateOrderError = (error) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchListCandidateRequest = (name, position, limit, page) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_REQUEST,
    payload: {
      name,
      position,
      limit,
      page,
    },
  };
};
export const fetchListCandidateSuccess = (data) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCandidateError = (error) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchListCandidateAdminRequest = () => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_REQUEST,
  };
};
export const fetchListCandidateAdminSuccess = (data) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCandidateAdminError = (error) => {
  return {
    type: candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_ERROR,
    payload: {
      error,
    },
  };
};

export const changeActiveRequest = (id) => {
  return {
    type: candidateActionType.CHANGE_ACTIVE_REQUEST,
    payload: {
      id,
    },
  };
};
export const changeActiveSuccess = (data) => {
  return {
    type: candidateActionType.CHANGE_ACTIVE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeActiveError = (error) => {
  return {
    type: candidateActionType.CHANGE_ACTIVE_ERROR,
    payload: {
      error,
    },
  };
};

export const changeOrderRequest = (id) => {
  return {
    type: candidateActionType.CHANGE_ORDER_REQUEST,
    payload: {
      id,
    },
  };
};
export const changeOrderSuccess = (data) => {
  return {
    type: candidateActionType.CHANGE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeOrderError = (error) => {
  return {
    type: candidateActionType.CHANGE_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchInfoCandidateRequest = (id) => {
  return {
    type: candidateActionType.FETCH_INFO_CANDIDATE_REQUEST,
    payload: {
      id,
    },
  };
};
export const fetchInfoCandidateSuccess = (data) => {
  return {
    type: candidateActionType.FETCH_INFO_CANDIDATE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchInfoCandidateError = (error) => {
  return {
    type: candidateActionType.FETCH_INFO_CANDIDATE_ERROR,
    payload: {
      error,
    },
  };
};

//update info

export const updateInfoCandidateRequest = (id, data) => {
  return {
    type: candidateActionType.UPDATE_INFO_CANDIDATE_REQUEST,
    payload: {
      id,
      data,
    },
  };
};
export const updateInfoCandidateSuccess = (data) => {
  return {
    type: candidateActionType.UPDATE_INFO_CANDIDATE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateInfoCandidateError = (error) => {
  return {
    type: candidateActionType.UPDATE_INFO_CANDIDATE_ERROR,
    payload: {
      error,
    },
  };
};

//==

export const fetchListRecruitmentApplyRequest = (id, vacancy, limit, page) => {
  return {
    type: candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_REQUEST,
    payload: {
      id,
      vacancy,
      limit,
      page,
    },
  };
};
export const fetchListRecruitmentApplySuccess = (data) => {
  return {
    type: candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRecruitmentApplyError = (error) => {
  return {
    type: candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_ERROR,
    payload: {
      error,
    },
  };
};

export const getDetailCandidateRequest = (id) => {
  return {
    type: candidateActionType.GETDETAIL_CANDIDATE_REQUEST,
    payload: {
      id,
    },
  };
};
export const getDetailCandidateSuccess = (data) => {
  return {
    type: candidateActionType.GETDETAIL_CANDIDATE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getDetailCandidateError = (error) => {
  return {
    type: candidateActionType.GETDETAIL_CANDIDATE_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const deleteApplyJobRequest = (id) => {
  return {
    type: candidateActionType.DELETE_APPLY_JOB_REQUEST,
    payload: {
      id,
    },
  };
};
export const deleteApplyJobSuccess = (data) => {
  return {
    type: candidateActionType.DELETE_APPLY_JOB_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteApplyJobError = (error) => {
  return {
    type: candidateActionType.DELETE_APPLY_JOB_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const dashboardCandidateRequest = (id) => {
  return {
    type: candidateActionType.DASHBOARD_CANDIDATE_REQUEST,
    payload: {
      id,
    },
  };
};
export const dashboardCandidateSuccess = (data) => {
  return {
    type: candidateActionType.DASHBOARD_CANDIDATE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const dashboardCandidateError = (error) => {
  return {
    type: candidateActionType.DASHBOARD_CANDIDATE_ERROR,
    payload: {
      error,
    },
  };
};
