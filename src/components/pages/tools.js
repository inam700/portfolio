import React, { Component } from "react";
import { toolsData } from "../../res/data/tools";
class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <h1 className="section-heading">Technologies</h1>
        <div className="border" />
        <div className="container flex">
          {toolsData.tools.map((item) => (
            <div className="card" key={item.id}>
              <h4>{item.name}</h4>
              <img src={item.image} alt="tools" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Tools;
