import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_MESSAGE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  TWO_FA_EMAIL_FAIL,
  TWO_FA_EMAIL_SUCCESS,
  TWO_FA_RSEND_SUCCESS,
  TWO_FA_RESEND_FAIL,
} from "./types";

import AccountService from "../services/account.service";

export const ActivateUserAccount = (userId, code) => (dispatch) => {
  return AccountService.ActivateUserAccount(userId, code).then(
    (response) => {
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.emailsending_error) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const forgotPassword = (email, WebHostUrl) => (dispatch) => {
  return AccountService.forgotPassword(email, WebHostUrl).then(
    (response) => {
      if (response.data.success) {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      } else {
        dispatch({
          type: FORGOT_PASSWORD_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.emailsending_error) ||
        error.message ||
        error.toString();

      dispatch({
        type: FORGOT_PASSWORD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const resetpassword = (userId, code, email, password) => (dispatch) => {
  return AccountService.resetpassword(userId, code, email, password).then(
    (response) => {
      if (response.data.success) {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data,
        });

        return Promise.resolve();
      } else {
        dispatch({
          type: RESET_PASSWORD_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data,
        });

        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.emailsending_error) ||
        error.message ||
        error.toString();

      dispatch({
        type: RESET_PASSWORD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const send_two_FA_Code = (userId) => (dispatch) => {
  return AccountService.sendTwoFA_Code(userId).then(
    (response) => {
      if (response.data === "Code Sent Successfully") {
        dispatch({
          type: TWO_FA_RSEND_SUCCESS,
          payload: response.data,
        });

        return Promise.resolve();
      } else {
        dispatch({
          type: TWO_FA_RESEND_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data,
        });

        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.result) ||
        error.message ||
        error.toString();

      dispatch({
        type: TWO_FA_RESEND_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const get_two_FA_Code = (userId) => (dispatch) => {
  return AccountService.get_two_FA_Code(userId).then(
    (response) => {
      if (response.data.result != null) {
        dispatch({
          type: TWO_FA_EMAIL_SUCCESS,
          payload: { twoFACode: response },
        });

        return Promise.resolve();
      } else {
        dispatch({
          type: TWO_FA_EMAIL_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.result,
        });

        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.emailsending_error) ||
        error.message ||
        error.toString();

      dispatch({
        type: TWO_FA_EMAIL_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const register = (
  Name,
  email,
  password,
  phonenumber,
  dateofbirth,
  address,
  userId
) => (dispatch) => {
  return AccountService.register(
    Name,
    email,
    password,
    phonenumber,
    dateofbirth,
    address,
    userId
  ).then(
    (response) => {
      if (response.data.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { registeredUser: response.data },
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });

        return Promise.resolve();
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });

        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const clientSignup = (
  Name,
        Email,
        Password,
        UserId
) => (dispatch) => {
  return AccountService.ClientSignUp(
    Name,
        Email,
        Password,
        UserId,
  ).then(
    (response) => {
      if (response.data.success) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { registeredUser: response.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });
        return Promise.resolve();
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response,
        });
        return Promise.reject();
      }
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
