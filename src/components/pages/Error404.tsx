import error404Icon from "../../assets/error404.svg";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-container">
      <div className="error-image-container">
        <img src={error404Icon} alt="page not found" />
      </div>
      <div className="error-content-head">Error 404: Page not found </div>
      <div className="error-content-text">
        Page you're trying to access doesn't exists in this route.
      </div>
      <Link to="/">
        <button className="button-primary"> Go to Quizzes </button>
      </Link>
    </div>
  );
}

export default Error404;
