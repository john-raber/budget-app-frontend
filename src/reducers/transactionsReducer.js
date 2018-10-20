import { ADD_TRANSACTION, FETCHED_TRANSACTIONS } from "../actions/types";

const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [...state, action.transaction];

    case FETCHED_TRANSACTIONS:
      return action.transactions;

    default:
      return state;
  }
};

export default transactionsReducer;
