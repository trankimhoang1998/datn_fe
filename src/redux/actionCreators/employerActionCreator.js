import * as employerActionType from "../actionTypes/employerActionType";

export const fetchListEmployerOrderRequest = () => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ORDER_REQUEST,
  };
};
export const fetchListEmployerOrderSuccess = (data) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListEmployerOrderError = (error) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchListEmployerRequest = (company, limit, page) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_REQUEST,
    payload: {
      company,
      limit,
      page,
    },
  };
};
export const fetchListEmployerSuccess = (data) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListEmployerError = (error) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchInfoEmployerRequest = (id) => {
  return {
    type: employerActionType.FETCH_INFO_EMPLOYER_REQUEST,
    payload: {
      id,
    },
  };
};
export const fetchInfoEmployerSuccess = (data) => {
  return {
    type: employerActionType.FETCH_INFO_EMPLOYER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchInfoEmployerError = (error) => {
  return {
    type: employerActionType.FETCH_INFO_EMPLOYER_ERROR,
    payload: {
      error,
    },
  };
};

//update info

export const updateInfoEmployerRequest = (id, data) => {
  return {
    type: employerActionType.UPDATE_INFO_EMPLOYER_REQUEST,
    payload: {
      id,
      data,
    },
  };
};
export const updateInfoEmployerSuccess = (data) => {
  return {
    type: employerActionType.UPDATE_INFO_EMPLOYER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateInfoEmployerError = (error) => {
  return {
    type: employerActionType.UPDATE_INFO_EMPLOYER_ERROR,
    payload: {
      error,
    },
  };
};

export const fetchListEmployerAdminRequest = () => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ADMIN_REQUEST,
  };
};
export const fetchListEmployerAdminSuccess = (data) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ADMIN_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListEmployerAdminError = (error) => {
  return {
    type: employerActionType.FETCH_LIST_EMPLOYER_ADMIN_ERROR,
    payload: {
      error,
    },
  };
};

export const changeActiveRequest = (id) => {
  return {
    type: employerActionType.CHANGE_ACTIVE_REQUEST,
    payload: {
      id,
    },
  };
};
export const changeActiveSuccess = (data) => {
  return {
    type: employerActionType.CHANGE_ACTIVE_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeActiveError = (error) => {
  return {
    type: employerActionType.CHANGE_ACTIVE_ERROR,
    payload: {
      error,
    },
  };
};

export const changeOrderRequest = (id) => {
  return {
    type: employerActionType.CHANGE_ORDER_REQUEST,
    payload: {
      id,
    },
  };
};
export const changeOrderSuccess = (data) => {
  return {
    type: employerActionType.CHANGE_ORDER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const changeOrderError = (error) => {
  return {
    type: employerActionType.CHANGE_ORDER_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const dashboardEmployerRequest = (id) => {
  return {
    type: employerActionType.DASHBOARD_EMPLOYER_REQUEST,
    payload: {
      id,
    },
  };
};
export const dashboardEmployerSuccess = (data) => {
  return {
    type: employerActionType.DASHBOARD_EMPLOYER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const dashboardEmployerError = (error) => {
  return {
    type: employerActionType.DASHBOARD_EMPLOYER_ERROR,
    payload: {
      error,
    },
  };
};

//==
//==
export const deleteRecruitmentRequest = (id) => {
  return {
    type: employerActionType.DELETE_RECRUITMENT_REQUEST,
    payload: {
      id,
    },
  };
};
export const deleteRecruitmentSuccess = (data) => {
  return {
    type: employerActionType.DELETE_RECRUITMENT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteRecruitmentError = (error) => {
  return {
    type: employerActionType.DELETE_RECRUITMENT_ERROR,
    payload: {
      error,
    },
  };
};
///
export const getDetailEmployerRequest = (id) => {
  return {
    type: employerActionType.GETDETAIL_EMPLOYER_REQUEST,
    payload: {
      id,
    },
  };
};
export const getDetailEmployerSuccess = (data) => {
  return {
    type: employerActionType.GETDETAIL_EMPLOYER_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getDetailEmployerError = (error) => {
  return {
    type: employerActionType.GETDETAIL_EMPLOYER_ERROR,
    payload: {
      error,
    },
  };
};

///
export const getRecruitmentByEmployerIdRequest = (id, limit, page) => {
  return {
    type: employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_REQUEST,
    payload: {
      id,
      limit,
      page,
    },
  };
};
export const getRecruitmentByEmployerIdSuccess = (data) => {
  return {
    type: employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getRecruitmentByEmployerIdError = (error) => {
  return {
    type: employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_ERROR,
    payload: {
      error,
    },
  };
};


//==
export const deleteApplyJobRequest = (id) => {
  return {
    type: employerActionType.DELETE_APPLY_JOB_REQUEST,
    payload: {
      id,
    },
  };
};
export const deleteApplyJobSuccess = (data) => {
  return {
    type: employerActionType.DELETE_APPLY_JOB_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteApplyJobError = (error) => {
  return {
    type: employerActionType.DELETE_APPLY_JOB_ERROR,
    payload: {
      error,
    },
  };
};