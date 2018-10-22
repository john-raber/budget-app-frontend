import { SET_CURRENT_ACCOUNT } from "./types";

const ACCOUNTS_URL = "http://localhost:3001/api/v1/accounts";

function setCurrentAccount(account) {
  return {
    type: SET_CURRENT_ACCOUNT,
    account
  };
}

export { setCurrentAccount };
