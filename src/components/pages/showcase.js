import React from "react";
import { Link } from "react-router-dom";
import person from "../../res/img/person1.jpg";

function Showcase() {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Inaam <span>Ullah</span></h1>
          <p>Programmer, Web Developer, Designer, Solution Provider </p>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
        <img src={person} alt="person" />
      </div>
    </section>
  );
}

export default Showcase;
