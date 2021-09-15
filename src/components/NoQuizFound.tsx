import noQuizIcon from "../assets/no-quiz.svg";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

const NoQuizFound = () => {
  const { quizName } = useParams();
  return (
    <div className="empty-container">
      <div className="empty-image-container">
        <img src={noQuizIcon} alt="no quiz found" />
      </div>
      <div className="empty-content-head">
        No quiz found with this name: {quizName}{" "}
      </div>
      <div className="empty-content-text">
        Go back and please click on quiz categories again
      </div>
      <Link to="/">
        <Button size="small" variant="contained" color="primary">
          Go to quizzes
        </Button>
      </Link>
    </div>
  );
};

export default NoQuizFound;
