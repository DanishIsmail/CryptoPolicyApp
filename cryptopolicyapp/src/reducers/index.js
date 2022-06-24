import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import account from "./account";

export default combineReducers({
  auth,
  account,
  message,
});
