import axiosService from "../axios/axiosService";

export const getRecruitmentOrder = () => {
  return axiosService.get("getrecruitmentorder");
};

export const getRecruitment = ({ vacancy, rank, city, career, limit, page }) => {
  return axiosService.get(
    `recruitments?vacancy=${vacancy}&rank=${rank}&city=${city}&career=${career}&limit=${limit}&page=${page}`
  );
};

export const getRecruitmentByUserId = ({
  id,
  vacancy,
  active,
  limit,
  page,
}) => {
  return axiosService.get(
    `getrecruitmentsbyuserid/${id}?vacancy=${vacancy}&active=${active}&limit=${limit}&page=${page}`
  );
};

export const getCandidateByUserId = ({ id, name, limit, page }) => {
  return axiosService.get(
    `getcandidatesbyuserid/${id}?name=${name}&limit=${limit}&page=${page}`
  );
};

export const getCvByUserId = ({ id, name, limit, page }) => {
  return axiosService.get(
    `getcvsbyuserid/${id}?name=${name}&limit=${limit}&page=${page}`
  );
};

export const addRecruitment = ({ data }) => {
  return axiosService.post(`recruitments`, data);
};

export const applyjob = ({ data }) => {
  return axiosService.post(`applyjob`, data);
};

export const getRecruitmentEdit = ({ id }) => {
  return axiosService.get(`getrecruitmentedit/${id}`);
};

export const updateRecruitment = ({ id, data }) => {
  return axiosService.put(`recruitments/${id}`, data);
};

export const getRecruitmentAdmin = () => {
  return axiosService.get("getrecruitmentadmin");
};

export const changeActive = ({ id }) => {
  return axiosService.put(`changeactiverecruitment/${id}`);
};

export const changeOrder = ({ id }) => {
  return axiosService.put(`changeorderrecruitment/${id}`);
};

export const getDetailRecruitment = (id) => {
  return axiosService.get(`recruitments/${id}`);
};

export const dashboardClient = () => {
  return axiosService.get(`dashboard`);
};

export const dashboardAdmin = () => {
  return axiosService.get(`dashboardadmin`);
};
