import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <Link to="#" className="navbar-brand">
          FrontEnd Bootcamp
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="#learn" className="nav-link">
                What You'll Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#learn" className="nav-link">
                What You'll Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#questions" className="nav-link">
                Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#instructors" className="nav-link">
                Instructors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
