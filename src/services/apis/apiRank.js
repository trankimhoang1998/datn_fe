import axiosService from "../axios/axiosService";

export const getRank = () => {
  return axiosService.get("ranks");
};
