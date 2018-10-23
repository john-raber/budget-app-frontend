import { ADD_ACCOUNT, FETCHED_ACCOUNTS } from "./types";

const ACCOUNTS_URL = "http://localhost:3001/api/v1/accounts";

function addAccount({ account }) {
  return {
    type: ADD_ACCOUNT,
    account
  };
}

function fetchedAccounts(accounts) {
  return { type: FETCHED_ACCOUNTS, accounts };
}

function fetchAccounts() {
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(ACCOUNTS_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(r => r.json());
  };
}

function createAccount({ account }) {
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(ACCOUNTS_URL, {
      method: "POST",
      body: JSON.stringify({ account }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(r => r.json());
  };
}

export { createAccount, fetchAccounts, fetchedAccounts, addAccount };
