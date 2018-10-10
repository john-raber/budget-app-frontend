import { combineReducers } from "redux";

import budgetsReducer from "./budgetsReducer";

const rootReducer = combineReducers({
  budgets: budgetsReducer
});

export default rootReducer;
