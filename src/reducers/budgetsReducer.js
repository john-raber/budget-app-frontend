import { ADD_BUDGET } from "../actions/types";

const budgetsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.budget];

    default:
      return state;
  }
};

export default budgetsReducer;
