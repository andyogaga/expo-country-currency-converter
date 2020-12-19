import { CLEAR_FEEDBACK, SHOW_FEEDBACK } from "./action.types";
import { Dispatch } from "redux";

export const showFeedback = (
  feedback: string | { message: string },
  feedbackType = "info"
) => {
  const id = Date.now();
  return (dispatch: Dispatch) => {
    dispatch({
      type: SHOW_FEEDBACK,
      message: typeof feedback === "object" ? feedback.message : feedback,
      feedbackType,
      id,
    });
    setTimeout(() => {
      dispatch(clearFeedback(id));
    }, 4000);
  };
};

export const clearFeedback = (id: number) => ({
  type: CLEAR_FEEDBACK,
  id,
});
