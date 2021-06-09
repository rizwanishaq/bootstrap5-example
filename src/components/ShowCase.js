import React from "react";

const ShowCase = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning"> Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <button className="btn btn-primary btn-lg">
                Start the Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="IMG_1193__.jpg"
              alt="IMG_1193"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
