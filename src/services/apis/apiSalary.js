import axiosService from "../axios/axiosService";

export const getSalary = () => {
  return axiosService.get("salaries");
};