import React, { Component } from "react";
import service1 from "../../res/img/services/b.svg";
import service2 from "../../res/img/services/pb.svg";
import service3 from "../../res/img/services/c.svg";
class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        serviceName: "Full Stack Development",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder",
        image: service3,
      },
      {
        id: 2,
        serviceName: "Web Designing",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder",
        image: service1,
      },
      {
        id: 3,
        serviceName: "Responsiveness",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder",
        image: service2,
      },
      {
        id: 4,
        serviceName: "Chat-Apps",
        description:
          "In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder,In publishing and graphic design, Lorem ipsum is a placeholder",
        image: service2,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="services">
          <h1 className='section-heading'>Services</h1>
          <div className="border"></div>
          <div className="section-grid">
            {this.state.services.map((item) => {
              return (
                <div className="service-box" key={item.id}>
                  <div className="service-image">
                    <img src={item.image} alt="Services" />
                  </div>
                  <h2>{item.serviceName}</h2>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
