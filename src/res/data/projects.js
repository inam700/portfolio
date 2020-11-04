import first_1 from "../img/gallery/full-1.png";
import first_2 from "../img/gallery/e-com.png";
import first_3 from "../img/gallery/back-1.png";
import second_1 from "../img/gallery/login.png";
import second_2 from "../img/gallery/front-1.png";
import second_3 from "../img/gallery/port-3.png";
import third_1 from "../img/gallery/port-1.png";
import third_2 from "../img/gallery/port-2.png";
import third_3 from "../img/gallery/port-3.png";
import fourth_1 from "../img/gallery/res-w-1.png";
import fourth_2 from "../img/gallery/res-w-2.png";
import fourth_3 from "../img/gallery/full-2.jpg";
import fifth_1 from "../img/gallery/des-1.png";
import fifth_2 from "../img/gallery/des-2.jpg";
import fifth_3 from "../img/gallery/port-2.png";
export const projectData = {
  projects: [
    {
      id: 1,
      name: "E-Commerce App",
      description:
        "Simple shopping cart using mern stack, axios, form-validation.",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "ExpressJS" },
        { id: 4, name: "MongoDB" },
        { id: 5, name: "Redux" },
      ],
      image1: first_1,
      image2: first_2,
      image3: first_3,
      linkTo: "https://github.com/inam700/redstore",
    },
    {
      id: 2,
      name: "Register/Login System",
      description:
        "Complete Register and Login with full Authentication, Authorization.",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "Material" },
        { id: 4, name: "SASS" },
      ],
      image1: second_1,
      image2: second_2,
      image3: second_3,
      linkTo: "https://github.com/inam700/react-login",
    },
    {
      id: 3,
      name: "Contact-List App",
      description: "A simple contact-list application using reactJS and Redux.",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "CSS" },
        { id: 4, name: "Bootstrap" },
      ],
      image1: third_1,
      image2: third_2,
      image3: third_3,
      linkTo: "https://github.com/inam700/student-info-system",
    },
    {
      id: 4,
      name: "React Responsive Template",
      description:
        "Beautifull website designing using ReactJS, flex-box, grid, boostrap",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "MongoDB" },
        { id: 4, name: "Redux" },
      ],
      image1: fourth_1,
      image2: fourth_2,
      image3: fourth_3,
      linkTo: "/",
    },
    {
      id: 5,
      name: "Product Management System",
      description:
        "Complete backend build in NodeJS, ExpressJS and MongoDB database",
      tags: [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "ExpressJS" },
        { id: 4, name: "MongoDB" },
        { id: 5, name: "Redux" },
        { id: 6, name: "CSS" },
      ],
      image1: fifth_1,
      image2: fifth_2,
      image3: fifth_3,
      linkTo: "/",
    },
  ],
};
