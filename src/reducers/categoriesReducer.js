import { ADD_CATEGORY, FETCHED_CATEGORIES } from "../actions/types";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category];

    case FETCHED_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoriesReducer;
