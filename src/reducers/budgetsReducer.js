import { ADD_BUDGET, FETCHED_USER_BUDGETS } from "../actions/types";

const budgetsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.budget];

    case FETCHED_USER_BUDGETS:
      return action.budgets;

    default:
      return state;
  }
};

export default budgetsReducer;
