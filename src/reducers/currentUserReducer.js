import { SET_USER } from "../actions/types";

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;

    default:
      return state;
  }
};

export default currentUserReducer;
