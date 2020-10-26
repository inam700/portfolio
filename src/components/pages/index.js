import React from "react";
import Contact from "./contact";
import ProjectGallery from "./projectGallery";
import Projects from "./projects";
import Services from "./services";
import Showcase from "./showcase";
import Tools from "./tools";
function HomePage() {
  return (
    <div>
      <Showcase />
      <Services />
      <Projects />
      <ProjectGallery />
      <Tools />
      <Contact />
    </div>
  );
}

export default HomePage;
