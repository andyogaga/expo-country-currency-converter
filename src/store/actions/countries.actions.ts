import { GET_COUNTRIES, CLEAR_COUNTRIES } from "./action.types";
import { showFeedback } from "./feedback.actions";
import { Dispatch } from "redux";
import axios from "axios";
import { FIXER_IO_KEY } from "../../utils/constants";

export const getCountries = (
  name: string,
  cb: (data: any, error: Error | null) => void
) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    dispatch({
      type: GET_COUNTRIES,
      payload: res.data,
    });
    cb("Data received", null);
  } catch (error) {
    dispatch(showFeedback("Error in connection", "error"));
    cb(null, error);
  }
};

export const mergeConvertedCurrencies = (
  _amount: string,
  countries: any[],
  cb: (data: any, error: Error | null) => void
) => async (dispatch: Dispatch) => {
  try {
    let convertedCurrencies: { [key: string]: number } = {};
    countries.map((country) => {
      return country.currencies.map((curr: { code: string }) => {
        convertedCurrencies[curr.code] = Math.ceil(Math.random() * 10000);
      });
    });
    cb(convertedCurrencies, null);
  } catch (error) {
    dispatch(showFeedback("Error in connection", "error"));
    cb(null, error);
  }
};

export const clearCountries = () => {
  return {
    type: CLEAR_COUNTRIES,
  };
};
