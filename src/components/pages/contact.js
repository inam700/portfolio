import React, { Component } from "react";
import { contactData } from "../../res/data/contact";
// import emailjs from "emailjs-com";
class Contact extends Component {
  state = {
    name: "",
    message: "",
    formSubmit: false,
    errors: {},
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      console.log("error");
      return;
    }
    if (message === "") {
      this.setState({ errors: { message: "Name is required" } });
      return;
    }

    // emailjs
    //   .send(
    //     "4966",
    //     "template_62wlllh",
    //     e.target.value,
    //     "user_IPHkgTMXkV6dDcEgKjeAE"
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (err) {
    //       console.log("FAILED...", err);
    //     }
    //   );
    const newMessage = {
      name,
      message,
    };

    console.log(newMessage);
    this.setState({
      name: "",
      message: "",
      formSubmit: true,
    });
    setTimeout(() => {
      this.setState({ formSubmit: false });
    }, 3000);
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, message } = this.state;
    return (
      <div className="contact">
        <h1 className="section-heading-white">Contact Me</h1>
        <div className="border" />
        <div className="container section-grid">
          <div className="contact-me">
            {contactData.contact.map((item) => (
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
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="input-field">
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                  placeholder="Your Message"
                  rows="5"
                />
              </div>
            </form>
            <button className="btn btn-outline" onClick={this.handleSubmit}>
              Send
            </button>
            {this.state.formSubmit === true ? (
              <h2>Message Sent Successfully</h2>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
