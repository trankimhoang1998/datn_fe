import axiosService from "../axios/axiosService";

export const getEmployerOrder = () => {
  return axiosService.get("getemployerorder");
};

export const getEmployer = ({ company, limit, page }) => {
  return axiosService.get(
    `employers?company=${company}&limit=${limit}&page=${page}`
  );
};

export const getInfoEmployerByUserId = (id) => {
  return axiosService.get(`getinfoemployerbyuserid/${id}`);
};

export const updateInfoEmployerByUserId = ({id, data}) => {
  return axiosService.put(`employers/${id}`, data);
};

export const getEmployerAdmin = () => {
  return axiosService.get("getemployeradmin");
};

export const changeActive = ({id}) => {
  return axiosService.put(`changeactiveemployer/${id}`);
};

export const changeOrder = ({id}) => {
  return axiosService.put(`changeorderemployer/${id}`);
};

export const dashboardEmployer = (id) => {
  return axiosService.get(`dashboardemployer/${id}`);
};

export const deleteRecruitment=(id)=>{
  return axiosService.delete(`recruitments/${id}`);
}
export const getDetailEmployer=(id)=>{
  return axiosService.get(`employers/${id}`)
}

export const getRecruitmentsByEmployerId=({id, limit, page})=>{
  return axiosService.get(`getrecruitmentsbyemployerid/${id}?limit=${limit}&page=${page}`)
}

export const deleteApplyJob=(id)=>{
  return axiosService.delete(`applyjob/${id}`);
}
