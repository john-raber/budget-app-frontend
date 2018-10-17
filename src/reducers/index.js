import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import budgetsReducer from "./budgetsReducer";
import accountsReducer from "./accountsReducer";
import categoriesReducer from "./categoriesReducer";
import budgetCategoriesReducer from "./budgetCategoriesReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  budgets: budgetsReducer,
  accounts: accountsReducer,
  categories: categoriesReducer,
  budgetCategories: budgetCategoriesReducer
});

export default rootReducer;
