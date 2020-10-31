import React from "react";
import { Element } from "react-scroll";
import Contact from "./contact";
import Projects from "./projects";
import Services from "./services";
import Showcase from "./showcase";
import Tools from "./tools";
function HomePage() {
  return (
    <div>
      <Showcase />
      <Services />
      <Element name="projects">
        <Projects />
      </Element>
      <Tools />
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default HomePage;
