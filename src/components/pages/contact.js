import React, { Component } from "react";
import phone from "../../res/img/contact/phone-call.png";
import address from "../../res/img/contact/home.png";
import mail from "../../res/img/contact/email.png";
class Contact extends Component {
  state = {
    contact: [
      { id: 1, image: phone, name: "Phone", detail: "03084966078" },
      { id: 2, image: mail, name: "Email", detail: "inaam040@gmail.com" },
      { id: 2, image: address, name: "Address", detail: "Lahore, Pakistan" },
    ],
  };
  render() {
    return (
      <div className="contact">
        <h1 className="section-heading-white">Contact Me</h1>
        <div className="border" />
        <div className="container section-grid">
          <div className="contact-me">
            {this.state.contact.map((item) => (
              <div className="contact-box" key={item.id}>
                <div className="image">
                  <img src={item.image} alt="Contact-Me" />
                </div>
                <div className="text">
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div />
          <div className="message">
            <form>
              <div className="input-field">
                <input placeholder="Enter Your Name" />
              </div>
              <div className="input-field">
                <textarea placeholder="Your Message" rows="5" />
              </div>
            </form>
            <button className="btn btn-outline">Send</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
