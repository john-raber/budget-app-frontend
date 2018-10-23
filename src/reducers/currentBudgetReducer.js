import { SET_CURRENT_BUDGET } from "../actions/types";

const currentBudgetReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_BUDGET:
      return action.budget;

    default:
      return state;
  }
};

export default currentBudgetReducer;
