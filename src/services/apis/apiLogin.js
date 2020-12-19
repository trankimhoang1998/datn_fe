import axiosService from "../axios/axiosService";

export const login = (data) => {
  return axiosService.post(`login`, data);
};
