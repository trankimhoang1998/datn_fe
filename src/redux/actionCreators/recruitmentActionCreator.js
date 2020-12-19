import * as recruimentActionType from "../actionTypes/recruitmentActionType";

export const fetchListRecruitmentOrderRequest = () => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ORDER_REQUEST,
  };
};
export const fetchListRecruitmentOrderSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRecruitmentOrderError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

//fetch list recruiment

export const fetchListRecruitmentRequest = (
  vacancy,
  rank,
  city,
  career,
  limit,
  page
) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_REQUEST,
    payload: {
      vacancy,
      rank,
      city,
      career,
      limit,
      page,
    },
  };
};
export const fetchListRecruitmentSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRecruitmentError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};

//=====
export const fetchListRecruitmentByUserIdRequest = (
  id,
  vacancy,
  active,
  limit,
  page
) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_REQUEST,
    payload: {
      id,
      vacancy,
      active,
      limit,
      page,
    },
  };
};
export const fetchListRecruitmentByUserIdSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRecruitmentByUserIdError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_ERROR,
    payload: {
      error,
    },
  };
};

//=====
export const fetchListCandidateByUserIdRequest = (id, name, limit, page) => {
  return {
    type: recruimentActionType.FETCH_LIST_CANDIDATE_BY_USERID_REQUEST,
    payload: {
      id,
      name,
      limit,
      page,
    },
  };
};
export const fetchListCandidateByUserIdSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_CANDIDATE_BY_USERID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCandidateByUserIdError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_CANDIDATE_BY_USERID_ERROR,
    payload: {
      error,
    },
  };
};

//=====
export const fetchListCvByUserIdRequest = (id, name, limit, page) => {
  return {
    type: recruimentActionType.FETCH_LIST_CV_BY_USERID_REQUEST,
    payload: {
      id,
      name,
      limit,
      page,
    },
  };
};
export const fetchListCvByUserIdSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_CV_BY_USERID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListCvByUserIdError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_CV_BY_USERID_ERROR,
    payload: {
      error,
    },
  };
};

//add
export const addRecruitmentRequest = (data) => {
  return {
    type: recruimentActionType.ADD_RECRUITMENT_REQUEST,
    payload: {
      data,
    },
  };
};
export const addRecruitmentSuccess = (data) => {
  return {
    type: recruimentActionType.ADD_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addRecruitmentError = (error) => {
  return {
    type: recruimentActionType.ADD_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};

//get info edit
export const getInfoEditRecruitmentRequest = (id) => {
  return {
    type: recruimentActionType.GETINFO_EDIT_RECRUITMENT_REQUEST,
    payload: {
      id,
    },
  };
};
export const getInfoEditRecruitmentSuccess = (data) => {
  return {
    type: recruimentActionType.GETINFO_EDIT_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getInfoEditRecruitmentError = (error) => {
  return {
    type: recruimentActionType.GETINFO_EDIT_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};


//===
export const updateRecruitmentRequest = (id,data) => {
  return {
    type: recruimentActionType.UPDATE_RECRUITMENT_REQUEST,
    payload: {
      id,
      data
    },
  };
};
export const updateRecruitmentSuccess = (data) => {
  return {
    type: recruimentActionType.UPDATE_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateRecruitmentError = (error) => {
  return {
    type: recruimentActionType.UPDATE_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const fetchListRecruitmentAdminRequest = () => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ADMIN_REQUEST,
  };
};
export const fetchListRecruitmentAdminSuccess = (data) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ADMIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListRecruitmentAdminError = (error) => {
  return {
    type: recruimentActionType.FETCH_LIST_RECRUITMENT_ADMIN_ERROR,
    payload: {
      error,
    },
  };
};

export const changeActiveRequest = (id) => {
  return {
    type: recruimentActionType.CHANGE_ACTIVE_REQUEST,
    payload: {
      id
    },
  };
};
export const changeActiveSuccess = (data) => {
  return {
    type: recruimentActionType.CHANGE_ACTIVE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeActiveError = (error) => {
  return {
    type: recruimentActionType.CHANGE_ACTIVE_ERROR,
    payload: {
      error,
    },
  };
};

export const changeOrderRequest = (id) => {
  return {
    type: recruimentActionType.CHANGE_ORDER_REQUEST,
    payload: {
      id
    },
  };
};
export const changeOrderSuccess = (data) => {
  return {
    type: recruimentActionType.CHANGE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeOrderError = (error) => {
  return {
    type: recruimentActionType.CHANGE_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const getDetailRecruitmentRequest = (id) => {
  return {
    type: recruimentActionType.GETDETAIL_RECRUITMENT_REQUEST,
    payload: {
      id
    },
  };
};
export const getDetailRecruitmentSuccess = (data) => {
  return {
    type: recruimentActionType.GETDETAIL_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getDetailRecruitmentError = (error) => {
  return {
    type: recruimentActionType.GETINFO_EDIT_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const dashboardClientRequest = () => {
  return {
    type: recruimentActionType.DASHBOARD_CLIENT_REQUEST,
  };
};
export const dashboardClientSuccess = (data) => {
  return {
    type: recruimentActionType.DASHBOARD_CLIENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const dashboardClientError = (error) => {
  return {
    type: recruimentActionType.DASHBOARD_CLIENT_ERROR,
    payload: {
      error,
    },
  };
};


//add
export const applyJobRequest = (data) => {
  return {
    type: recruimentActionType.APPLY_JOB_REQUEST,
    payload: {
      data,
    },
  };
};
export const applyJobSuccess = (data) => {
  return {
    type: recruimentActionType.APPLY_JOB_SUCCESS,
    payload: {
      data,
    },
  };
};
export const applyJobError = (error) => {
  return {
    type: recruimentActionType.APPLY_JOB_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const dashboardAdminRequest = () => {
  return {
    type: recruimentActionType.DASHBOARD_ADMIN_REQUEST,
  };
};
export const dashboardAdminSuccess = (data) => {
  return {
    type: recruimentActionType.DASHBOARD_ADMIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const dashboardAdminError = (error) => {
  return {
    type: recruimentActionType.DASHBOARD_ADMIN_ERROR,
    payload: {
      error,
    },
  };
};