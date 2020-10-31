import React, { Component } from "react";
import facebook from "../../res/img/social/facebook.png";
import github from "../../res/img/social/github.png";
import linkedin from "../../res/img/social/linkedin.png";
import youtube from "../../res/img/social/youtube.png";
class Footer extends Component {
  state = {
    social: [
      { id: 1, image: facebook },
      { id: 2, image: github },
      { id: 3, image: linkedin },
      { id: 4, image: youtube },
    ],
  };
  render() {
    return (
      <div className="footer">
        <div className="container flex">
          <h4>Copyrights &copy; 2020</h4>
          <div className="social-icons">
            {this.state.social.map((item) => (
              <img src={item.image} alt="social" key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
