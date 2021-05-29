import { useParams } from "react-router";
import { useQuizData } from "../../context/QuizDataContext";
import QuizRules from "../QuizRules";

const PlayQuiz = () => {
  const { quizName } = useParams();
  const { state } = useQuizData();

  const quizGame = state.categories.find(
    (category) => category.categoryName.toLowerCase() === quizName
  );

  return <>{quizGame && <QuizRules quizGame={quizGame} />}</>;
};

export default PlayQuiz;