import { SHOW_FEEDBACK, CLEAR_FEEDBACK } from "../actions/action.types";

const init = {
  feedbacks: [],
};

// Feedback Reducer
const feedback = (
  state = init,
  action: { message: string; type: string; id: number; feedbackType: string }
): typeof init => {
  switch (action.type) {
    case SHOW_FEEDBACK:
      return {
        ...state,
        feedbacks: init.feedbacks.concat({
          message: action.message,
          id: action.id,
          feedbackType: action.feedbackType,
        }),
      };

    case CLEAR_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.filter((error) => error.id !== action.id),
      };

    default:
      return state;
  }
};

export default feedback;
