import React from "react";
import Card from "./Card";

const Boxes = () => {
  return (
    <>
      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <Card title={"virtual"} icon={"bi bi-laptop"} />
            </div>

            <div className="col-md">
              <Card title={"Hybrid"} icon={"bi bi-person-square"} />
            </div>
            <div className="col-md">
              <Card title={"In Person"} icon={"bi bi-people"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Boxes;
