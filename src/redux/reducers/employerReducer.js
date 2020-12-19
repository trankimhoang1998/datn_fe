import * as employerActionType from "../actionTypes/employerActionType";

const initialState = {
  listEmployerOrder: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listEmployer: {
    status: true,
    message: "Show Successfully",
    result: {
      current_page: 0,
      data: [{}],
      first_page_url: "",
      from: 0,
      last_page: 0,
      last_page_url: "",
      next_page_url: "",
      path: "",
      per_page: "5",
      prev_page_url: "",
      to: 0,
      total: 0,
    },
  },

  infoEmployer: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listEmployerAdmin: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  dashboardEmployer: {
    status: true,
    message: "Show Successfully",
    result: {},
  },

  inforDetailEmployer: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listRecruitmentByEmployerId: {
    status: true,
    message: "Show Successfully",
    result: {
      current_page: 0,
      data: [{}],
      first_page_url: "",
      from: 0,
      last_page: 0,
      last_page_url: "",
      next_page_url: "",
      path: "",
      per_page: "5",
      prev_page_url: "",
      to: 0,
      total: 0,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case employerActionType.FETCH_LIST_EMPLOYER_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_ORDER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listEmployerOrder: data,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_ORDER_ERROR: {
      return {
        ...state,
        listEmployerOrder: [],
      };
    }
    //====
    case employerActionType.FETCH_LIST_EMPLOYER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listEmployer: data,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_ERROR: {
      return {
        ...state,
        listEmployer: [],
      };
    }

    //====
    case employerActionType.FETCH_INFO_EMPLOYER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        infoEmployer: {...data},
      };
    }
    case employerActionType.FETCH_INFO_EMPLOYER_ERROR: {
      return {
        ...state,
        infoEmployer: [],
      };
    }

    //update
    case employerActionType.UPDATE_INFO_EMPLOYER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.UPDATE_INFO_EMPLOYER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
      };
    }
    case employerActionType.UPDATE_INFO_EMPLOYER_ERROR: {
      return {
        ...state,
      };
    }
    //==
    case employerActionType.FETCH_LIST_EMPLOYER_ADMIN_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_ADMIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listEmployerAdmin: data,
      };
    }
    case employerActionType.FETCH_LIST_EMPLOYER_ADMIN_ERROR: {
      return {
        ...state,
        listEmployerAdmin: [],
      };
    }

    //change active
    //==
    case employerActionType.CHANGE_ACTIVE_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.CHANGE_ACTIVE_SUCCESS: {
      return {
        ...state,
      };
    }
    case employerActionType.CHANGE_ACTIVE_ERROR: {
      return {
        ...state,
      };
    }

    //==order

    case employerActionType.CHANGE_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.CHANGE_ORDER_SUCCESS: {
      return {
        ...state,
      };
    }
    case employerActionType.CHANGE_ORDER_ERROR: {
      return {
        ...state,
      };
    }

    //====
    case employerActionType.DASHBOARD_EMPLOYER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.DASHBOARD_EMPLOYER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dashboardEmployer: data,
      };
    }
    case employerActionType.DASHBOARD_EMPLOYER_ERROR: {
      return {
        ...state,
        dashboardEmployer: [],
      };
    }

    //change active
    //==
    case employerActionType.DELETE_RECRUITMENT_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.DELETE_RECRUITMENT_SUCCESS: {
      return {
        ...state,
      };
    }
    case employerActionType.DELETE_RECRUITMENT_ERROR: {
      return {
        ...state,
      };
    }
    //==
    case employerActionType.GETDETAIL_EMPLOYER_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.GETDETAIL_EMPLOYER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        inforDetailEmployer: data,
      };
    }
    case employerActionType.GETDETAIL_EMPLOYER_ERROR: {
      return {
        ...state,
      };
    }

    //==
    case employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_REQUEST: {
      return {
        ...state,
      };
    }
    case employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitmentByEmployerId: data,
      };
    }
    case employerActionType.GET_RECRUITMENTS_BY_EMPLOYER_ID_ERROR: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
