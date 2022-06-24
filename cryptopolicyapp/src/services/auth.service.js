import axios from "axios";
import { Env } from "../enviroment/environment";

const API_URL = Env.AuthApiUrl; //"http://localhost:8000/api/auth/";

const login = (email, password, rememberMe) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.auth_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      if (rememberMe) {
        localStorage.setItem("NWUserEmail", email);
        localStorage.setItem("NWUserPassword", password);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("nowuser");
};

const AuthService = {
  login,
  logout,
};
export default AuthService;
