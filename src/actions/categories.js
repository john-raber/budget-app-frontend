import { ADD_CATEGORY, FETCHED_CATEGORIES } from "./types";

const CATEGORIES_URL = "http://localhost:3001/api/v1/categories";

function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category
  };
}

function fetchedCategories(categories) {
  return {
    type: FETCHED_CATEGORIES,
    categories
  };
}

function fetchCategories() {
  return dispatch => {
    const token = localStorage.getItem("token");

    fetch(CATEGORIES_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(categories => {
        dispatch(fetchedCategories(categories));
      });
  };
}

function fetchCategory(id) {
  console.log("fetchCategory called");
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(`${CATEGORIES_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => r.json())
      .then(category => {
        console.log("category fetch result: ", category);
        dispatch(addCategory(category));
      });
  };
}

function createCategory({ category, budgetId }) {
  return dispatch => {
    const token = localStorage.getItem("token");

    return fetch(CATEGORIES_URL, {
      method: "POST",
      body: JSON.stringify({ category }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(r => r.json());
  };
}

export { createCategory, addCategory, fetchCategories, fetchCategory };
