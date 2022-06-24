export const localhostUrl = "http://localhost:8000/api/";
export const deployedUrl = "https://bopaymentsdotnet.azurewebsites.net/api/";

let url = window.location.href;
if (url.includes("localhost")) url = localhostUrl;
else 
url = deployedUrl;

export const Env = {
  AuthApiUrl: url + "auth/",
  AccountApiUrl: url + "accounts/",
  UserApiUrl: url + "users/",
  UploadDocuments: url + "Upload/",
  ClientAdmin: url + "Client/",
  CardsApiUrl: url + "card/",
  CardHolderApiUrl: url + "cardholder/",
  ClaimRoleAuth: url + "ClaimRoleAuth/",
  DepositApiUrl: url + "deposits/",
  SettingsApiUrl: url + "settings/",
  HelpApiUrl: url + "help/",
  TransactionApiUrl: url + "transaction/",
};
