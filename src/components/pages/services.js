import React, { Component } from "react";
import { serviceData } from "../../res/data/services";
class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="services">
          <h1 className="section-heading">Services</h1>
          <div className="border"></div>
          <div className="section-grid">
            {serviceData.services.map((item) => {
              return (
                <div className="service-box" key={item.id}>
                  <div className="service-image">
                    <img src={item.image} alt="Services" />
                  </div>
                  <h2>{item.name}</h2>
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
