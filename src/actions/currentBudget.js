import { SET_CURRENT_BUDGET } from "./types";

const BUDGETS_URL = "http://localhost:3001/api/v1/budgets";

function setCurrentBudget(budget) {
  return {
    type: SET_CURRENT_BUDGET,
    budget
  };
}

function fetchCurrentBudget(id) {
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(`${BUDGETS_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(budget => {
        dispatch(setCurrentBudget(budget));
      });
  };
}

export { setCurrentBudget, fetchCurrentBudget };
