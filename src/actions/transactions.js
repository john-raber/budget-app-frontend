import { ADD_TRANSACTION, FETCHED_TRANSACTIONS } from "./types";

const TRANSACTIONS_URL = "http://localhost:3001/api/v1/transactions";

function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    transaction
  };
}

function fetchedTransactions(transactions) {
  return {
    type: FETCHED_TRANSACTIONS,
    transactions
  };
}

function fetchTransactions() {
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(TRANSACTIONS_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(transactions => {
        dispatch(fetchedTransactions(transactions));
      });
  };
}

function createTransaction({ transaction }) {
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(TRANSACTIONS_URL, {
      method: "POST",
      body: JSON.stringify({ transaction }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(transaction => dispatch(addTransaction(transaction.transaction)));
  };
}

export { createTransaction, fetchTransactions, addTransaction };
