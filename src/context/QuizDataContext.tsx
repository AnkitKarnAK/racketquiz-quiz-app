import { createContext, useContext, useReducer } from "react";
import {
  ContextType,
  InitialStateType,
  ProviderProp,
} from "./QuizDataContext.types";
import { quizReducer } from "./quizDataReducer";

const initialState: InitialStateType = {
  score: 0,
  categories: [],
};

const QuizDataContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const QuizDataProvider = ({ children }: ProviderProp) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizDataContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
};

export const useQuizData = () => useContext(QuizDataContext);
