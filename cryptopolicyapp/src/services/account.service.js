import axios from "axios";
import { Env } from "../enviroment/environment";
const API_URL = Env.AccountApiUrl; //"http://localhost:8000/api/accounts/";

const sendTwoFA_Code = (userId) => {
  return axios.get(API_URL + "sendtwofacode?userId=" + userId);
};
const get_two_FA_Code = (userId) => {
  return axios
    .get(API_URL + "gettwofacode?userId=" + userId)
    .then((response) => {
      if (response.data.result != null) {
        localStorage.setItem("2facode", JSON.stringify(response));
      }

      return response;
    });
};
const forgotPassword = (email, WebHostUrl) => {
  return axios.post(API_URL + "forgotpassword", { email, WebHostUrl });
};
const ActivateUserAccount = (userId, code) => {
  return axios.post(API_URL + "accountconfirmation", { userId, code });
};
const resetpassword = (userId, code, email, password) => {
  return axios.put(API_URL + "resetpassword", {
    userId,
    code,
    email,
    password,
  });
};
const register = (
  Name,
  email,
  password,
  phonenumber,
  dateofbirth,
  address,
  userId
) => {
  return axios
    .put(API_URL + "activateacccount", {
      Name,
      email,
      password,
      phonenumber,
      dateofbirth,
      address,
      userId,
    })
    .then((response) => {
      if (response.data.success) {
        localStorage.setItem(
          "userRegisteration",
          JSON.stringify(response.data)
        );
      }

      return response;
    });
};
const ClientSignUp = (Name, email, password, confirmpassword) => {
  return axios
    .post(API_URL + "register", {
      Name,
      email,
      password,
      confirmpassword,
    })
    .then((response) => {
      if (response.data.success) {
        // localStorage.setItem("ClientSignup", JSON.stringify(response.data));
      }
    });
};
const getUserbyId = (userId) => {
  return axios
    .get(API_URL + "getuserbyid?userId=" + userId)
    .then((response) => {
      return response;
    });
};
const accountService = {
  register,
  forgotPassword,
  resetpassword,
  sendTwoFA_Code,
  get_two_FA_Code,
  getUserbyId,
  ActivateUserAccount,
  ClientSignUp,
};
export default accountService;
