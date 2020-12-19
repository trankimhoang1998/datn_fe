
export const dataCV = [
  {
    id: 1,
    check: true,
    title: "HỌC VẤN",
    icon: "<CalendarOutlined />",
    divisions: [
      {
        description: "ĐẠI HỌC BÁCH KHOA ĐÀ NẴNG",
        dateStart: "2018-03",
        dateEnd: "2020-01",
        subdesc: "Chuyên ngành Công nghệ Thông Tin - Khoa Công Nghệ Thông Tin",
        detailInfo: "Tôt nghiệp: 2020, Cơ sở dữ liệu, DataBase",
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
        description: "CÔNG TY AXON-ACTIVE VIET NAM",
        dateStart: "2019-11",
        dateEnd: "2020-04",
        subdesc: "Fresher PHP",
        detailInfo: "Cùng các thành viên trong công ty quản trị, xây dựng website.",
      },
      {
        description: "CÔNG TY PHP FPT SOFTWARE",
        dateStart: "2018-7",
        dateEnd: "2019-7",
        subdesc: "Fresher Python",
        detailInfo: "Cùng các thành viên trong công ty quản trị, xây dựng website.",
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
        description: false,
        subdesc: false,
        nameSkill: "HTML, CSS, BOOSTRAP",
        rate: 5,
        detailInfo: false
      },
      {
        description: false,
        subdesc: false,
        nameSkill: "React-JS, JavaScript ES6",
        rate: 3.5,
        detailInfo: false

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
        description: "THAM GIA CUỘC THI LẬP TRÌNH KHU VỰC ĐÀ NẴNG",
        subdesc: false,
        detailInfo: "Đạt giải nhất.",
        
      },
    ],
  },

  {
    id: 5,
    check: false,
    title: "NGÔN NGỮ",
    icon: "<CommentOutlined />",
    divisions: [
      {
        description: false,
        subdesc: false,
        detailInfo: "English ( TOEIC 450 )",
      },
    ],
  },

  {
    id: 6,
    check: false,
    title: "SỞ THÍCH",
    icon: "<FileDoneOutlined />",
    divisions: [
      {
        description: "Đá banh",
        subdesc: false,
        detailInfo: false
      },
    ],
  },
];

localStorage.getItem("data")
  ? localStorage.getItem("data")
  : localStorage.setItem("data", JSON.stringify(dataCV));


export const dataCV2 = JSON.parse(localStorage.getItem("data"));
// export const dataCV1 = JSON.parse(localStorage.getItem("dataUser"));
