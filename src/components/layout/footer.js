import React from "react";
import facebook from "../../res/img/social/facebook.png";
import github from "../../res/img/social/github.png";
import linkedin from "../../res/img/social/linkedin.png";
import youtube from "../../res/img/social/youtube.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container flex">
        <h4>Copyrights &copy; 2020</h4>
        <div className="social-icons">
          <img src={facebook} alt="social" />
          <img src={github} alt="social" />
          <img src={linkedin} alt="social" />
          <img src={youtube} alt="social" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
