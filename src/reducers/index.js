import { combineReducers } from "redux";

import currentUserReducer from "./currentUserReducer";
import budgetsReducer from "./budgetsReducer";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  budgets: budgetsReducer
});

export default rootReducer;
