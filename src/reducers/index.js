import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import budgetsReducer from "./budgetsReducer";
import accountsReducer from "./accountsReducer";
import categoriesReducer from "./categoriesReducer";
import currentBudgetReducer from "./currentBudgetReducer";
import transactionsReducer from "./transactionsReducer";
import currentAccountReducer from "./currentAccountReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  budgets: budgetsReducer,
  accounts: accountsReducer,
  categories: categoriesReducer,
  currentBudget: currentBudgetReducer,
  transactions: transactionsReducer,
  currentAccount: currentAccountReducer,
  loading: loadingReducer
});

export default rootReducer;
