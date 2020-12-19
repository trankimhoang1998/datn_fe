import axiosService from "../axios/axiosService";

export const registerEmployer = (data) => {
  return axiosService.post(`registerEmployer`, data);
};

export const registerCandidate = (data) => {
  return axiosService.post(`registerCandidate`, data);
};
