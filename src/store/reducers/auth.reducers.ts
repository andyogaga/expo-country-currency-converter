import { CLEAR_COUNTRIES, CHANGE_FIRST_TIME } from "../actions/action.types";

const initialState = {
  firstAccess: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST_TIME:
      return {
        ...state,
        firstAccess: false,
      };
    case CLEAR_COUNTRIES:
      return initialState;
    default:
      return state;
  }
};
