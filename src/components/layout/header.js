import React, { Component } from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

class Header extends Component {
  state = {
    headerShow: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
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
      <div className="navbar">
        <div className="container flex">
          <h1>Portfolio</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToElement("projects")}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => scrollToElement("contact")}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
