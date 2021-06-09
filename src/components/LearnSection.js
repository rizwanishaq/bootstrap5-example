import React from "react";
import { Link } from "react-router-dom";

const LearnSection = () => {
  return (
    <>
      <section className="p-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="IMG_1193__.jpg" className="img-fluid" alt="demo-dont" />
            </div>
            <div className="col-md p-5">
              <h2>Learn The Fundamentals</h2>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500sLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
              <Link to="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i>Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 bg-dark text-light" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500sLorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s
              </p>
              <Link to="#" className="btn btn-light mt-3">
                <i className="bi bi-chevron-right"></i>Read More
              </Link>
            </div>
            <div className="col-md">
              <img src="IMG_1193__.jpg" className="img-fluid" alt="demo-dont" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnSection;
