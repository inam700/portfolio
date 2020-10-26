import React, { Component } from "react";
import img1 from "../../res/img/project-gallery/1.jpg";
import img2 from "../../res/img/project-gallery/2.jpg";
import img3 from "../../res/img/project-gallery/3.jpg";
import img4 from "../../res/img/project-gallery/4.jpg";
import img5 from "../../res/img/project-gallery/5.jpg";
import img6 from "../../res/img/project-gallery/6.jpg";
import img7 from "../../res/img/project-gallery/7.jpg";
import img8 from "../../res/img/project-gallery/8.jpg";
import img9 from "../../res/img/project-gallery/9.jpg";

class ProjectGallery extends Component {
  state = {
    projectGallery: [
      { id: 1, image: img1 },
      { id: 2, image: img2 },
      { id: 3, image: img3 },
      { id: 4, image: img4 },
      { id: 5, image: img5 },
      { id: 6, image: img6 },
      { id: 7, image: img7 },
      { id: 8, image: img8 },
      { id: 9, image: img9 },
    ],
  };
  render() {
    return (
      <div>
        <h1>Project Gallery</h1>
      </div>
    );
  }
}
export default ProjectGallery;
