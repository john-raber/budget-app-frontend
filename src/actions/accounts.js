import { ADD_ACCOUNT, FETCHED_ACCOUNTS } from "./types";

const ACCOUNTS_URL = "http://localhost:3001/api/v1/accounts";

function addAccount({ account }) {
  return {
    type: ADD_ACCOUNT,
    account
  };
}

function fetchedAccounts(accounts) {
  console.log("fetchedAccounts call");
  return { type: FETCHED_ACCOUNTS, accounts };
}

function fetchAccounts(budgetId) {
  console.log("fetchAccounts call");
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(ACCOUNTS_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(accounts => {
        dispatch(
          fetchedAccounts(
            accounts.filter(a => a.budget_id === Number(budgetId))
          )
        );
      });
  };
}

function createAccount({ account }) {
  console.log("createAccount call");
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(ACCOUNTS_URL, {
      method: "POST",
      body: JSON.stringify({ account }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(json => dispatch(addAccount(json.account)));
  };
}

export { createAccount, fetchAccounts, fetchedAccounts, addAccount };
