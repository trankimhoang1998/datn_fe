import axiosService from "../axios/axiosService";

export const getCandidateOrder = () => {
  return axiosService.get("getcandidateorder");
};

export const getCandidate = ({ name, position, limit, page }) => {
  return axiosService.get(
    `candidates?name=${name}&position=${position}&limit=${limit}&page=${page}`
  );
};

export const getCandidateAdmin = () => {
  return axiosService.get("getcandidateadmin");
};

export const changeActive = ({ id }) => {
  return axiosService.put(`changeactivecandidate/${id}`);
};

export const changeOrder = ({ id }) => {
  return axiosService.put(`changeordercandidate/${id}`);
};

export const getInfoCandidateByUserId = (id) => {
  return axiosService.get(`getinfocandidatebyuserid/${id}`);
};

export const updateInfoCandidateByUserId = ({ id, data }) => {
  return axiosService.put(`candidates/${id}`, data);
};

export const getRecruimentApplyByUserId = ({ id, vacancy, limit, page }) => {
  return axiosService.get(
    `getjobapplybyuserid/${id}?vacancy=${vacancy}&limit=${limit}&page=${page}`
  );
};

export const getDetailCandidate = (id) => {
  return axiosService.get(`candidates/${id}`);
};

export const deleteApplyJob = (id) => {
  return axiosService.delete(`applyjob/${id}`);
};

export const dashboardCandidate = (id) => {
  return axiosService.get(`dashboardcandidate/${id}`);
};
