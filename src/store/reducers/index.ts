import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers";
import feedbackReducer from "./feedback.reducers";
import countryReducer from "./countries.reducers";

export default combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
  countries: countryReducer,
});
