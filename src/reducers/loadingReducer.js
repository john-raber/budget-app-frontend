import { LOADING, FETCHED_USER_BUDGETS, SET_USER } from "../actions/types";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;

    case FETCHED_USER_BUDGETS || SET_USER:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
