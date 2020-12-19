import axiosService from "../axios/axiosService";

export const getCity = () => {
  return axiosService.get("cities");
};
