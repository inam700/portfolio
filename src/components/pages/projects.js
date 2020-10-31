import React, { Component } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../../res/data/projects";
import Slider from "react-slick";
class Projects extends Component {
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="projects">
        <div className="container">
          <h1 className="section-heading-white">Projects</h1>
          <div className="border" />
          <div className="section-grid">
            {projectData.projects.map((item) => {
              return (
                <div className="project-box" key={item.id}>
                  <Slider {...settings}>
                    <img src={item.image1} alt="projects" />
                    <img src={item.image2} alt="projects" />
                    <img src={item.image3} alt="projects" />
                  </Slider>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    <i>{item.tag1}</i>
                    <i>{item.tag2}</i>
                    <i>{item.tag3}</i>
                    <i>{item.tag4}</i>
                    <i>{item.tag5}</i>
                  </div>
                  <div className="links">
                    <a href={item.linkTo} className="btn-flat">
                      Visit Github To Get Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
