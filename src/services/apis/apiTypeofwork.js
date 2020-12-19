import axiosService from "../axios/axiosService";

export const getTypeofwork = () => {
  return axiosService.get("typeofworks");
};