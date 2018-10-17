import { ADD_BUDGET_CATEGORY, FETCHED_BUDGET_CATEGORIES } from "./types";

const BUDGET_CATEGORIES_URL = "http://localhost:3001/api/v1/budget_categories";

function addBudgetCategory(budgetCategory) {
  return {
    type: ADD_BUDGET_CATEGORY,
    budgetCategory
  };
}

function fetchedBudgetCategories(budgetCategories) {
  return {
    type: FETCHED_BUDGET_CATEGORIES,
    budgetCategories
  };
}

function fetchBudgetCategories(budgetId) {
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(BUDGET_CATEGORIES_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(budgetCategories => {
        dispatch(
          fetchedBudgetCategories(
            budgetCategories.filter(bc => bc.budget.id === Number(budgetId))
          )
        );
      });
  };
}

function createBudgetCategory({ budget_category }) {
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(BUDGET_CATEGORIES_URL, {
      method: "POST",
      body: JSON.stringify({ budget_category }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(r => r.json());
  };
}

export {
  createBudgetCategory,
  addBudgetCategory,
  fetchBudgetCategories,
  fetchedBudgetCategories
};
