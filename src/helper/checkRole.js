import jwtDecode from "jwt-decode";
import { getAccessToken } from "./localStorage";

export const checkRole = () => {
  let token = getAccessToken();
  var role = "";
  if (token) {
    role = jwtDecode(token).scopes[0];
  } else {
    role = "error";
  }

  return role;
};
