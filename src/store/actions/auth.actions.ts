import { CHANGE_FIRST_TIME } from "./action.types";

export const changeFromFirstTimer = () => {
  return {
    type: CHANGE_FIRST_TIME,
  };
};
