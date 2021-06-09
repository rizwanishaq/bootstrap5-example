import React from "react";

const Contact = () => {
  return (
    <>
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location: </span> 50 Main st
                  Boston
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone: </span> (555)
                  555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone: </span> (333)
                  333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollement Email: </span>
                  enrol@what.text
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email: </span>
                  s_enrol@what.text
                </li>
              </ul>
            </div>

            <div className="col-md">Map</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
