import { ADD_ACCOUNT, FETCHED_ACCOUNTS } from "../actions/types";

const accountsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return [...state, action.account];

    case FETCHED_ACCOUNTS:
      return action.accounts;

    default:
      return state;
  }
};

export default accountsReducer;
