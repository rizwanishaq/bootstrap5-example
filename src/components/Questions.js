import React from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  return (
    <>
      <section className="p-5" id="questions">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* Item-1 */}
            <QuestionCard
              question_text={"Where exactly are you located?"}
              q_id={"question-one"}
            />

            <QuestionCard
              question_text={"How much does it cost to attend?"}
              q_id={"question-two"}
            />

            <QuestionCard
              question_text={"What do I need to know?"}
              q_id={"question-three"}
            />

            <QuestionCard
              question_text={"How Do I sign up?"}
              q_id={"question-four"}
            />

            <QuestionCard
              question_text={"Do you help me find a job?"}
              q_id={"question-five"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
