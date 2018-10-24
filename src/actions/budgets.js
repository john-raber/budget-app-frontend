import { ADD_BUDGET, FETCHED_USER_BUDGETS } from "./types";
import { loading } from "./loading";

const BUDGETS_URL = "http://localhost:3001/api/v1/budgets";

function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    budget
  };
}

function fetchedUserBudgets(budgets) {
  return {
    type: FETCHED_USER_BUDGETS,
    budgets
  };
}

function fetchBudgets() {
  return dispatch => {
    const token = localStorage.getItem("token");

    dispatch(loading());

    fetch(BUDGETS_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(budgets => {
        dispatch(fetchedUserBudgets(budgets));
      });
  };
}

function createBudget({ budget }) {
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(BUDGETS_URL, {
      method: "POST",
      body: JSON.stringify({ budget }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(json => {
        console.log(json);
        dispatch(addBudget(json.budget));
      });
  };
}

export { createBudget, addBudget, fetchBudgets, fetchedUserBudgets };
