import React from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  return (
    <>
      <section id="instructors" className="p-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div className="row g-4">
            <InstructorCard number={11} gender={"men"} name={"John Doe"} />
            <InstructorCard number={12} gender={"women"} name={"Jane Doe"} />
            <InstructorCard number={10} gender={"men"} name={"Steve Smith"} />
            <InstructorCard number={9} gender={"women"} name={"Sara Smith"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
