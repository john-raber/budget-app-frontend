import { SET_CURRENT_ACCOUNT } from "../actions/types";

const currentAccountReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT:
      return action.account;

    default:
      return state;
  }
};

export default currentAccountReducer;
