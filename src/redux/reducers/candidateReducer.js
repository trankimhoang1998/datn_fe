import * as candidateActionType from "../actionTypes/candidateActionType";

const initialState = {
  listCandidateOrder: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listCandidate: {
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

  listCandidateAdmin: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  infoCandidate: {
    status: true,
    message: "Show Successfully",
    result: [
      {
        id: 1,
        name: "",
        avatar: "",
        phone: "",
        position: "",
        address: "",
        experience: "",
        birthday: "",
        email: "",
        user_id: 31,
        active: 1,
        order: 1,
        created_at: "",
        updated_at: "",
      },
    ],
  },

  listRecruitmentApply: {
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

  detailCandidate: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  dashboardCandidate: {
    status: true,
    message: "Show Successfully",
    result: {},
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case candidateActionType.FETCH_LIST_CANDIDATE_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_ORDER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCandidateOrder: data,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_ORDER_ERROR: {
      return {
        ...state,
        listCandidateOrder: [],
      };
    }
    //==
    case candidateActionType.FETCH_LIST_CANDIDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCandidate: data,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_ERROR: {
      return {
        ...state,
        listCandidate: [],
      };
    }

    //==
    case candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCandidateAdmin: data,
      };
    }
    case candidateActionType.FETCH_LIST_CANDIDATE_ADMIN_ERROR: {
      return {
        ...state,
        listCandidateAdmin: [],
      };
    }

    //change active
    //==
    case candidateActionType.CHANGE_ACTIVE_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.CHANGE_ACTIVE_SUCCESS: {
      return {
        ...state,
      };
    }
    case candidateActionType.CHANGE_ACTIVE_ERROR: {
      return {
        ...state,
      };
    }

    //==order

    case candidateActionType.CHANGE_ORDER_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.CHANGE_ORDER_SUCCESS: {
      return {
        ...state,
      };
    }
    case candidateActionType.CHANGE_ORDER_ERROR: {
      return {
        ...state,
      };
    }

    //====
    case candidateActionType.FETCH_INFO_CANDIDATE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        infoCandidate: data,
      };
    }
    case candidateActionType.FETCH_INFO_CANDIDATE_ERROR: {
      return {
        ...state,
        infoCandidate: {},
      };
    }

    //update
    case candidateActionType.UPDATE_INFO_CANDIDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.UPDATE_INFO_CANDIDATE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
      };
    }
    case candidateActionType.UPDATE_INFO_CANDIDATE_ERROR: {
      return {
        ...state,
      };
    }

    //==
    case candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listRecruitmentApply: data,
      };
    }
    case candidateActionType.FETCH_LIST_RECRUITMENT_APPLY_ERROR: {
      return {
        ...state,
        listRecruitmentApply: [],
      };
    }

    //==
    case candidateActionType.GETDETAIL_CANDIDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.GETDETAIL_CANDIDATE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        detailCandidate: data,
      };
    }
    case candidateActionType.GETDETAIL_CANDIDATE_ERROR: {
      return {
        ...state,
      };
    }

    //====
    case candidateActionType.DASHBOARD_CANDIDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case candidateActionType.DASHBOARD_CANDIDATE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dashboardCandidate: data,
      };
    }
    case candidateActionType.DASHBOARD_CANDIDATE_ERROR: {
      return {
        ...state,
        dashboardCandidate: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
