import { useState } from "react";
import { useParams } from "react-router";
import { useQuizData } from "../../context/QuizDataContext";
import NoQuizFound from "../NoQuizFound";
import QuizRules from "../QuizRules";
import { ShowQuizQuestion } from "../ShowQuizQuestion";

const PlayQuiz = () => {
  const { quizName } = useParams();
  const { state } = useQuizData();
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  const quizGame = state.categories.find(
    (category) => category.categoryName.toLowerCase() === quizName
  );

  return (
    <>
      {quizGame ? (
        isQuizStarted ? (
          <>
            <ShowQuizQuestion quizGame={quizGame} />
          </>
        ) : (
          <QuizRules quizGame={quizGame} setIsQuizStarted={setIsQuizStarted} />
        )
      ) : (
        <NoQuizFound />
      )}
    </>
  );
};

export default PlayQuiz;
