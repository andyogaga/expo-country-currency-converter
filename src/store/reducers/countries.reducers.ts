import { GET_COUNTRIES, CLEAR_COUNTRIES } from "../actions/action.types";

const initialState = {
  countries: [],
};

const countryReducers = (
  state = initialState,
  action: { type: string; payload: any[] }
) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case CLEAR_COUNTRIES:
      return initialState;
    default:
      return state;
  }
};

export default countryReducers;
