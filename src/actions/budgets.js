import { ADD_BUDGET } from "./types";

const BUDGETS_URL = "http://localhost:3001/api/v1/budgets";

function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    budget
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
      .then(json => dispatch(addBudget(json.budget)));
  };
}

export { createBudget, addBudget };
