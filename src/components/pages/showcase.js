import React, { Component } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import person from "../../res/img/person1.jpg";

class Showcase extends Component {
  state = {
    headerShow: false,
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({ headerShow: false });
    }
  };
  render() {
    const scrollToElement = (element) => {
      scroller.scrollTo(element, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: -150,
      });
    };
    return (
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>
              Inaam <span>Ullah</span>
            </h1>
            <p>Programmer, Web Developer, Designer, Solution Provider </p>
            <Link
              to="/"
              className="btn btn-outline"
              onClick={() => scrollToElement("contact")}
            >
              Contact Me
            </Link>
          </div>
          <img src={person} alt="person" />
        </div>
      </section>
    );
  }
}

export default Showcase;
