import axiosService from "../axios/axiosService";

export const addCv = ({ data }) => {
  return axiosService.post(`cv`, data);
};

export const getCvByUserId = (id) => {
  return axiosService.get(`getcvbyuserid/${id}`);
};

export const getCvByCandidateId = (id) => {
  return axiosService.get(`getcv/${id}`);
};

export const getCvById = (id) => {
  return axiosService.get(`cv/${id}`);
};

export const updateCv = ({id, data}) => {
  return axiosService.put(`cv/${id}`, data);
};

export const deleteCv = (id) => {
  return axiosService.delete(`cv/${id}`);
};