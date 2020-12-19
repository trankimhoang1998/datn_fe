import axiosService from "../axios/axiosService";

export const getCareer = () => {
  return axiosService.get("careers");
};