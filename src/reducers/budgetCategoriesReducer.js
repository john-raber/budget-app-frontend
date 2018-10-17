import {
  ADD_BUDGET_CATEGORY,
  FETCHED_BUDGET_CATEGORIES
} from "../actions/types";

const budgetCategoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUDGET_CATEGORY:
      return [...state, action.budgetCategory.budget_category];

    case FETCHED_BUDGET_CATEGORIES:
      return action.budgetCategories;

    default:
      return state;
  }
};

export default budgetCategoriesReducer;
