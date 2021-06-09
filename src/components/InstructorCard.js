import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ number, gender, name }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card bg-light">
        <div className="card-body text-center">
          <img
            src={`https://randomuser.me/api/portraits/${gender}/${number}.jpg`}
            className="rounded-circle mb-3"
            alt=""
          />
          <h3>{name}</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="#">
            <i className="bi bi-twitter text-dark mx-1"></i>
          </Link>
          <Link to="#">
            <i className="bi bi-facebook text-dark mx-1"></i>
          </Link>{" "}
          <Link to="#">
            <i className="bi bi-linkedin text-dark mx-1"></i>
          </Link>{" "}
          <Link to="#">
            <i className="bi bi-instagram text-dark mx-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
