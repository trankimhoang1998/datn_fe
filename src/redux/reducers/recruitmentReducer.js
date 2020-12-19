import * as recruitmentActionType from "../actionTypes/recruitmentActionType";

const initialState = {
  listRecruitmentOrder: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listRecruitment: {
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

  listRecruitmentByUserId: {
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

  listCandidateByUserId: {
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

  infoEditRecruitment: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listRecruitmentAdmin: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  detailRecruitment: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  dashboardClient: {
    status: true,
    message: "Show Successfully",
    result: {
      recruitments: 0,
      employers: 0,
      candidates: 0,
    },
  },

  
  listCv: {
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

  dashboardAdmin: {
    status: true,
    message: "Show Successfully",
    result: {
      recruitments: 0,
      employers: 0,
      candidates: 0,
      recruitments_no_active: 0,
      employers_no_active: 0,
      candidates_no_active: 0,
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ORDER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitmentOrder: data,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ORDER_ERROR: {
      return {
        ...state,
        listRecruitmentOrder: [],
      };
    }

    //list recruitment

    case recruitmentActionType.FETCH_LIST_RECRUITMENT_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitment: data,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ERROR: {
      return {
        ...state,
        listRecruitment: [],
      };
    }

    //====

    case recruitmentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitmentByUserId: data,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_BY_USERID_ERROR: {
      return {
        ...state,
        listRecruitmentByUserId: [],
      };
    }

    //====

    case recruitmentActionType.FETCH_LIST_CANDIDATE_BY_USERID_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.FETCH_LIST_CANDIDATE_BY_USERID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCandidateByUserId: data,
      };
    }
    case recruitmentActionType.FETCH_LIST_CANDIDATE_BY_USERID_ERROR: {
      return {
        ...state,
        listCandidateByUserId: [],
      };
    }

      //====

      case recruitmentActionType.FETCH_LIST_CV_BY_USERID_REQUEST: {
        return {
          ...state,
        };
      }
      case recruitmentActionType.FETCH_LIST_CV_BY_USERID_SUCCESS: {
        const { data } = action.payload;
        return {
          ...state,
          listCv: data,
        };
      }
      case recruitmentActionType.FETCH_LIST_CV_BY_USERID_ERROR: {
        return {
          ...state,
          listCv: [],
        };
      }

    //info edit
    case recruitmentActionType.GETINFO_EDIT_RECRUITMENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        infoEditRecruitment: data,
      };
    }
    case recruitmentActionType.GETINFO_EDIT_RECRUITMENT_ERROR: {
      return {
        ...state,
        infoEditRecruitment: [],
      };
    }

    //update
    //info edit
    case recruitmentActionType.UPDATE_RECRUITMENT_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.UPDATE_RECRUITMENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
      };
    }
    case recruitmentActionType.UPDATE_RECRUITMENT_ERROR: {
      return {
        ...state,
        infoEditRecruitment: [],
      };
    }

    //==
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ADMIN_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ADMIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitmentAdmin: data,
      };
    }
    case recruitmentActionType.FETCH_LIST_RECRUITMENT_ADMIN_ERROR: {
      return {
        ...state,
        listRecruitmentAdmin: [],
      };
    }

    //change active
    //==
    case recruitmentActionType.CHANGE_ACTIVE_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.CHANGE_ACTIVE_SUCCESS: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.CHANGE_ACTIVE_ERROR: {
      return {
        ...state,
      };
    }

    //==order

    case recruitmentActionType.CHANGE_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.CHANGE_ORDER_SUCCESS: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.CHANGE_ORDER_ERROR: {
      return {
        ...state,
      };
    }

    case recruitmentActionType.GETINFO_EDIT_RECRUITMENT_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.GETDETAIL_RECRUITMENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        detailRecruitment: data,
      };
    }
    case recruitmentActionType.GETINFO_EDIT_RECRUITMENT_ERROR: {
      return {
        ...state,
      };
    }

    case recruitmentActionType.DASHBOARD_CLIENT_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.DASHBOARD_CLIENT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dashboardClient: data,
      };
    }
    case recruitmentActionType.DASHBOARD_CLIENT_ERROR: {
      return {
        ...state,
      };
    }

    case recruitmentActionType.DASHBOARD_ADMIN_REQUEST: {
      return {
        ...state,
      };
    }
    case recruitmentActionType.DASHBOARD_ADMIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dashboardAdmin: data,
      };
    }
    case recruitmentActionType.DASHBOARD_ADMIN_ERROR: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
