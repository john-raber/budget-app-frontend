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

function fetchAccounts(budgetId) {
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
      .then(acct => {
        dispatch(addAccount(acct));
      });
  };
}

export { createAccount, fetchAccounts, fetchedAccounts, addAccount };
