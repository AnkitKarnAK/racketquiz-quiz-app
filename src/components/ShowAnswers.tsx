import { useQuizData } from "../context/QuizDataContext";
import { useParams } from "react-router";
import NoQuizFound from "./NoQuizFound";
import { QuestionWithAnswerCard } from "./QuestionWithAnswerCard";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ShowAnswers = () => {
  const { state } = useQuizData();
  const { quizName } = useParams();
  const quizGame = state.categories.find(
    (category) => category.categoryName.toLowerCase() === quizName
  );

  return (
    <>
      {quizGame ? (
        <div className="answers-card">
          <div className="answers-score">Your Score : {state.score}</div>
          {quizGame.questions.map((question, index) => {
            return (
              <QuestionWithAnswerCard
                key={question._id}
                question={question}
                index={index}
              />
            );
          })}
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className="answers-more-quiz-button"
            >
              More quizzes
            </Button>
          </Link>
        </div>
      ) : (
        <NoQuizFound />
      )}
    </>
  );
};

export default ShowAnswers;
