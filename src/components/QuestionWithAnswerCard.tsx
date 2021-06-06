import { Question, Option } from "../database/quizData.types";
import { Card, Typography } from "@material-ui/core";

export const QuestionWithAnswerCard = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  const getAllOptionColor = (option: Option) => {
    return option.isRight ? "option-color-success" : "option-color-error";
  };

  return (
    <>
      <Card className="question-answer-card" variant="outlined">
        <div className="quiz-question-card-header">
          <Typography display="inline">Question: {index + 1}</Typography>
        </div>
        <Typography variant="h5" component="h2">
          Q: {question.question}
        </Typography>

        {question.options.map((option) => {
          return (
            <button
              key={option._id}
              className={`quiz-option ${getAllOptionColor(option)}`}
            >
              {option.text}
            </button>
          );
        })}
      </Card>
    </>
  );
};
