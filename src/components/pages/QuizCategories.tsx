import { quizData } from "../../database/quizData";
import quizCategoryIcon from "../../assets/quiz-category.svg";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const QuizCategories = () => {
  return (
    <>
      <div className="quiz-category-banner">
        <div className="quiz-category-image-container">
          <img src={quizCategoryIcon} alt="quiz category" />
        </div>
        <div className="quiz-category-headline primary-color">
          Take a quiz!!
        </div>
      </div>
      <div className="quiz-category-list">
        {quizData.category.map((quizType, index) => {
          return (
            <Card
              key={quizType._id}
              className="quiz-category-card"
              variant="outlined"
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {`Quiz: ${index + 1}`}
                </Typography>
                <Typography className="text-center" variant="h5" component="h2">
                  {quizType.categoryName}
                </Typography>
                <Typography
                  className="text-center"
                  variant="body2"
                  component="p"
                >
                  Total questions: {quizType.totalQuestions}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/quiz/${quizType.categoryName.toLowerCase()}`}>
                  <Button
                    className="quiz-category-card-button"
                    size="small"
                    color="primary"
                    variant="contained"
                  >
                    Play
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default QuizCategories;
