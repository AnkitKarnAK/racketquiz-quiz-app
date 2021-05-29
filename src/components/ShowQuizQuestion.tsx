import { useState } from "react";
import { Button, Card, Typography } from "@material-ui/core";
import { Option, QuizCategory } from "../database/quizData.types";
import { useQuizData } from "../context/QuizDataContext";

export const ShowQuizQuestion = ({ quizGame }: { quizGame: QuizCategory }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [showAllOptionColor, setShowAllOptionColor] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [showCorrectOptionColor, setShowCorrectOptionColor] =
    useState<boolean>(false);
  const { state, dispatch } = useQuizData();

  const setAllOptionColor = (option: Option) => {
    return option.isRight ? "option-color-success" : "option-color-error";
  };

  const setCorrectOptionColor = (option: Option) => {
    return option.isRight && "option-color-success";
  };

  return (
    <>
      {activeQuestionIndex < quizGame.totalQuestions ? (
        <Card className="quiz-question-card" variant="outlined">
          <Typography color="primary" variant="h5" className="text-center">
            {quizGame.categoryName} Quiz
          </Typography>
          <div className="quiz-question-card-header">
            <Typography display="inline" className="">
              Question: {activeQuestionIndex + 1}/{quizGame.totalQuestions}
            </Typography>
            <Typography display="inline"> Score : {state.score}</Typography>
          </div>
          <Typography variant="h5" component="h2">
            Q: {quizGame.questions[activeQuestionIndex].question}
          </Typography>

          {quizGame.questions[activeQuestionIndex].options.map((option) => {
            return (
              <button
                key={option._id}
                disabled={isButtonDisabled}
                className={`quiz-option ${
                  showAllOptionColor && setAllOptionColor(option)
                }
                     ${showCorrectOptionColor && setCorrectOptionColor(option)}
                `}
                onClick={() => {
                  setShowCorrectOptionColor(true);
                  setIsButtonDisabled(true);
                  if (option.isRight) {
                    dispatch({
                      type: "INCREASE_SCORE",
                      payload: quizGame.questions[activeQuestionIndex].points,
                    });
                  } else {
                    dispatch({
                      type: "DECREASE_SCORE",
                      payload:
                        quizGame.questions[activeQuestionIndex].negativePoints,
                    });
                    setShowAllOptionColor(true);
                  }
                }}
              >
                {option.text}
              </button>
            );
          })}

          <div className="quiz-question-button-container">
            <Button
              className="quiz-question-next-button"
              variant="contained"
              color="primary"
              onClick={() => {
                setActiveQuestionIndex((currentIndex) => currentIndex + 1);
                setShowAllOptionColor(false);
                setShowCorrectOptionColor(false);
                setIsButtonDisabled(false);
              }}
            >
              {activeQuestionIndex + 1 === quizGame.totalQuestions
                ? "Check Score"
                : "NEXT"}
            </Button>
          </div>
        </Card>
      ) : (
        <div>Quiz ended</div>
      )}
    </>
  );
};
