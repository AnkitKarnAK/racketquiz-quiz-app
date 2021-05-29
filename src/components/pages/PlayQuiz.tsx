// import { useState } from "react";
import { useParams } from "react-router";
import { useQuizData } from "../../context/QuizDataContext";
import NoQuizFound from "../NoQuizFound";
import QuizRules from "../QuizRules";

const PlayQuiz = () => {
  const { quizName } = useParams();
  const { state } = useQuizData();
  // const [isQuizStarted, setIsQuizStarted] = useState(false);

  const quizGame = state.categories.find(
    (category) => category.categoryName.toLowerCase() === quizName
  );

  return <>{quizGame ? <QuizRules quizGame={quizGame} /> : <NoQuizFound />}</>;
};

export default PlayQuiz;
