import React, { Component } from "react";
import node from "../../res/img/logo/node.png";
import react from "../../res/img/logo/react1.jpg";
import mongo from "../../res/img/logo/mongo.png";
import css from "../../res/img/logo/css.png";
import bootstrap from "../../res/img/logo/bootstrap.png";
import redux from "../../res/img/logo/redux.png";
import express from "../../res/img/logo/express.jpeg";
class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <h1 className="section-heading">Technologies that I use</h1>
        <div className="border" />
        <div className="container flex">
          <div className="card">
            <h4>NodeJS</h4>
            <img src={node} alt="tools" />
          </div>
          <div className="card">
            <h4>React JS</h4>
            <img src={react} alt="tools" />
          </div>
          <div className="card">
            <h4>Mongo DB</h4>
            <img src={mongo} alt="tools" />
          </div>
          <div className="card">
            <h4>CSS</h4>
            <img src={css} alt="tools" />
          </div>
          <div className="card">
            <h4>Bootstrap</h4>
            <img src={bootstrap} alt="tools" />
          </div>
          <div className="card">
            <h4>Redux</h4>
            <img src={redux} alt="tools" />
          </div>
          <div className="card">
            <h4>Express JS</h4>
            <img src={express} alt="tools" />
          </div>
        </div>
      </div>
    );
  }
}
export default Tools;
