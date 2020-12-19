export const setToken = (token) => {
  localStorage.setItem("accessToken", token.accessToken);
  localStorage.setItem("refreshToken", token.refreshToken);
};
export const setAccessToken = (accessToken) => {
  return localStorage.setItem("accessToken", accessToken);
};
export const setRefreshToken = (refreshToken) => {
  return localStorage.setItem("refreshToken", refreshToken);
};
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
export const clearAccesstoken = () => {
  return localStorage.removeItem("accessToken");
};
export const clearAllToken = () => {
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
};
// set avatar and name user
export const setUserData = (name, avatar) => {
  return localStorage.setItem("User_Name", JSON.stringify({ name, avatar }));
};
export const getUserDatas = () => {
  return JSON.parse(localStorage.getItem("User_Name"));
};
export const clearUserData = () => {
  localStorage.removeItem("User_Name");
  localStorage.removeItem("accessToken");
};
