import { NavLink } from "react-router-dom";
import profileIcon from "../assets/profile-icon.svg";
import quizBulbIcon from "../assets/light-bulb.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav-header">
          <span className="nav-header-secondary">Racket</span>
          <span className="nav-header-primary">Quiz</span>
        </NavLink>
        <div className="nav-links">
          <div className="button-badge-container">
            <button className="nav-button">
              <NavLink
                to="/"
                className="nav-icon-container"
                activeClassName="nav-link-active"
              >
                <img src={quizBulbIcon} alt="Videos" className="nav-icons" />
                Quizzes
              </NavLink>
            </button>
          </div>

          <div className="button-badge-container">
            <button className="nav-button">
              <NavLink
                to="/profile"
                className="nav-icon-container"
                activeClassName="nav-link-active"
              >
                <img src={profileIcon} alt="Profile" className="nav-icons" />
                Profile
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
