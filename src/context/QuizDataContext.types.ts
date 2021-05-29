import { QuizCategory } from "../database/quizData.types";
import { ReactNode } from "react";

export type InitialStateType = {
  score: number;
  categories: QuizCategory[];
};

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

export type ProviderProp = {
  children: ReactNode;
};

export type ActionType =
  | {
      type: "SET_CATEGORIES";
      payload: QuizCategory[];
    }
  | {
      type: "INCREASE_SCORE";
      payload: number;
    }
  | {
      type: "DECREASE_SCORE";
      payload: number;
    }
  | {
      type: "RESET_SCORE";
    };
