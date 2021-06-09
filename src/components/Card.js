import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, icon }) => {
  return (
    <div className="card bg-dark text-light">
      <div className="h1 mb-3">
        <i className={icon}></i>
      </div>
      <h3 className="card-title mb-3">{title}</h3>
      <p className="card-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <Link to="#" className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
};

export default Card;
