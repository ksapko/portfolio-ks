import React from "react";
import CV from "../../../src/asserts/CV.pdf";

const Info = () => {
  return (
    <div className="info">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default Info;
