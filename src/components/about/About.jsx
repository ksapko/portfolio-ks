import React from "react";
import "./about.css";
import car from "./../../../src/asserts/car.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <h3 className="text-about text-light">
        I love to spend my free time assembling Lego models. It's not only way
        to relax, but it's also great for developing my creativity and precision
        skills.
      </h3>
      <img className="lego-car" src={car} alt="" />
      <div className="container about-container"></div>
    </section>
  );
};

export default About;
