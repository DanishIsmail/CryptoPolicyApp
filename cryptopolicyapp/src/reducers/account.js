import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  TWO_FA_EMAIL_SUCCESS,
  TWO_FA_EMAIL_FAIL,
  TWO_FA_RESEND_FAIL,
  TWO_FA_RSEND_SUCCESS,
} from "../actions/types";

const registeredUser = JSON.parse(localStorage.getItem("userRegisteration"));
const twoFACode = JSON.parse(localStorage.getItem("2facode"));
const initialState = {
  registeredUser,
  twoFACode,
};

const accountReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        registeredUser: payload.registeredUser,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        registeredUser: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case TWO_FA_EMAIL_SUCCESS:
      return {
        ...state,
        twoFACode: payload.twoFACode,
      };
    case TWO_FA_EMAIL_FAIL:
      return {
        ...state,
        twoFACode: null,
      };
    case TWO_FA_RESEND_FAIL:
      return {
        ...state,
        twoFACodeRsnd: "fail",
      };
    case TWO_FA_RSEND_SUCCESS:
      return {
        ...state,
        twoFACodeRsnd: "success",
      };
    default:
      return state;
  }
};
export default accountReducer;
