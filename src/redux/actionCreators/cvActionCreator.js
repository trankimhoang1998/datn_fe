import * as cvActionType from "../actionTypes/cvActionType";

//add
export const addCvRequest = (data) => {
  return {
    type: cvActionType.ADD_CV_REQUEST,
    payload: {
      data,
    },
  };
};
export const addCvSuccess = (data) => {
  return {
    type: cvActionType.ADD_CV_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addCvError = (error) => {
  return {
    type: cvActionType.ADD_CV_ERROR,
    payload: {
      error,
    },
  };
};


//==
export const getCvByUserIdRequest = (id) => {
  return {
    type: cvActionType.GETCV_BY_USERID_REQUEST,
    payload: {
      id,
    },
  };
};
export const getCvByUserIdSuccess = (data) => {
  return {
    type: cvActionType.GETCV_BY_USERID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getCvByUserIdError = (error) => {
  return {
    type: cvActionType.GETCV_BY_CANDIDATEID_ERROR,
    payload: {
      error,
    },
  };
};

//==
export const getCvByCandidateIdRequest = (id) => {
  return {
    type: cvActionType.GETCV_BY_CANDIDATEID_REQUEST,
    payload: {
      id,
    },
  };
};
export const getCvByCandidateIdSuccess = (data) => {
  return {
    type: cvActionType.GETCV_BY_CANDIDATEID_SUCCESS,
    payload: {
      data,
    },
  };
};
export const getCvByCandidateIdError = (error) => {
  return {
    type: cvActionType.GETCV_BY_CANDIDATEID_ERROR,
    payload: {
      error,
    },
  };
};


//==
export const updateCvRequest = (id) => {
  return {
    type: cvActionType.UPDATE_CV_REQUEST,
    payload: {
      id,
    },
  };
};
export const updateCvSuccess = (data) => {
  return {
    type: cvActionType.UPDATE_CV_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateCvError = (error) => {
  return {
    type: cvActionType.UPDATE_CV_ERROR,
    payload: {
      error,
    },
  };
};



//==
export const deleteCvRequest = (id) => {
  return {
    type: cvActionType.DELETE_CV_REQUEST,
    payload: {
      id,
    },
  };
};
export const deleteCvSuccess = (data) => {
  return {
    type: cvActionType.DELETE_CV_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteCvError = (error) => {
  return {
    type: cvActionType.DELETE_CV_ERROR,
    payload: {
      error,
    },
  };
};


//==
export const getCvByIdRequest = (id) => {
  return {
    type: cvActionType.GETCV_BY_ID_REQUEST,
    payload: {
      id,
    },
  };
};
export const getCvByIdSuccess = (data) => {
  return {
    type: cvActionType.GETCV_BY_ID_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getDataUserSuccess = (data) => {
  return {
    type: cvActionType.GET_DATA_USER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getDataCVSuccess = (data) => {
  return {
    type: cvActionType.GET_DATA_CV_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getCvByIdError = (error) => {
  return {
    type: cvActionType.GETCV_BY_ID_ERROR,
    payload: {
      error,
    },
  };
};
