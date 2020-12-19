import * as cvActionType from "../actionTypes/cvActionType";

const initialState = {
  listCvByUserId: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  listCvByCandidateId: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  detailCv: {
    status: true,
    message: "Show Successfully",
    result: [{}],
  },

  dataUser: {
    birthday: "",
    email: "",
    full_name: "",
    location: "",
    phone: "",
    potision: "",
  },

  dataCV: [
    {
      id: 1,
      check: true,
      title: "HỌC VẤN",

      icon: "<CalendarOutlined />",
      divisions: [
        {
          description: "",
          dateStart: "",
          dateEnd: "",
          subdesc: "",
          detailInfo: "",
        },
      ],
    },
    {
      id: 2,
      check: true,
      title: "KINH NGHIỆM LÀM VIỆC",
      icon: "<FormOutlined />",
      divisions: [
        {
          description: "",
          dateStart: "",
          dateEnd: "",
          subdesc: "",
          detailInfo: "",
        },
      ],
    },
    {
      id: 3,
      check: true,
      title: "KỸ NĂNG",
      icon: "<WindowsOutlined />",
      divisions: [
        {
          nameSkill: "",
          rate: 1,
        },
      ],
    },
    {
      id: 4,
      check: true,
      title: "HOẠT ĐỘNG",
      icon: "<BarsOutlined />",
      divisions: [
        {
          description: "",
          detailInfo: "",
        },
      ],
    },

    {
      id: 5,
      check: true,
      title: "NGÔN NGỮ",
      icon: "<CommentOutlined />",
      divisions: [
        {
          description: "",
          dateStart: "",
          dateEnd: "",
          subdesc: "",
          detailInfo: "",
        },
      ],
    },

    {
      id: 6,
      check: true,
      title: "SỞ THÍCH",
      icon: "<FileDoneOutlined />",
      divisions: [
        {
          description: "",
        },
      ],
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case cvActionType.GETCV_BY_USERID_REQUEST: {
      return {
        ...state,
      };
    }
    case cvActionType.GETCV_BY_USERID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCvByUserId: data,
      };
    }
    case cvActionType.GETCV_BY_USERID_ERROR: {
      return {
        ...state,
      };
    }
    //==
    case cvActionType.GETCV_BY_CANDIDATEID_REQUEST: {
      return {
        ...state,
      };
    }
    case cvActionType.GETCV_BY_CANDIDATEID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listCvByCandidateId: data,
      };
    }
    case cvActionType.GETCV_BY_CANDIDATEID_ERROR: {
      return {
        ...state,
      };
    }

    //==

    case cvActionType.GETCV_BY_ID_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        detailCv: data,
      };
    }

    case cvActionType.GET_DATA_USER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataUser: data,
      };
    }

    case cvActionType.GET_DATA_CV_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        dataCV: data,
      };
    }

    case cvActionType.GETCV_BY_ID_ERROR: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
