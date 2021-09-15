import { ActionType, InitialStateType } from "./QuizDataContext.types";

export function quizReducer(state: InitialStateType, action: ActionType) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "INCREASE_SCORE":
      return { ...state, score: state.score + action.payload };
    case "DECREASE_SCORE":
      if (action.payload === undefined) return state;
      return { ...state, score: state.score - action.payload };
    case "RESET_SCORE":
      return { ...state, score: 0 };
    default:
      return state;
  }
}
