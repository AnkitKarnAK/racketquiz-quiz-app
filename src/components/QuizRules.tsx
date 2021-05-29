import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { QuizCategory } from "../database/quizData.types";

const QuizRules = ({ quizGame }: { quizGame: QuizCategory }) => {
  return (
    <>
      <Card className="quiz-rules-card" variant="outlined">
        <CardContent>
          <Typography className="text-center" color="primary" gutterBottom>
            {quizGame.categoryName} Quiz
          </Typography>
          <Typography variant="h5" component="h2">
            Rules:
          </Typography>

          <Typography variant="body2" component="p">
            • There are total {quizGame.totalQuestions} questions in this quiz.
            <br />
            • For each correct answer you will get +5 points.
            <br />
            {quizGame.questions[0].negativePoints
              ? `• For each wrong answer you will get -${quizGame.questions[0].negativePoints} points.`
              : `• There's no negative marking in this quiz.`}
          </Typography>
        </CardContent>
        <CardActions className="quiz-rules-button-container">
          <Link to="/">
            <Button
              className="quiz-rules-button"
              size="small"
              variant="outlined"
              color="primary"
            >
              Cancel
            </Button>
          </Link>
          <Button
            className="quiz-rules-button"
            size="small"
            variant="contained"
            color="primary"
          >
            Start Quiz
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default QuizRules;
