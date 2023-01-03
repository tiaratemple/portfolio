import React from "react";
import "./ContactPage.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="contact-content-container">
      <h1 className="connect-title">Connect with me.</h1>
      <p className="connect-p">
        It would be my pleasure to help you bring your website to life.
      </p>
      <div className="link-contaner">
        <a href="https://www.linkedin.com/in/tiaratempledev/">
          <button className="connect-btn">
            <BsLinkedin size="2em" />
          </button>
        </a>
        <a href="https://github.com/tiaratemple">
          <button className="connect-btn">
            <BsGithub size="2em" />
          </button>
        </a>
        <a href="mailto:tmtemple7@gmail.com">
          <button className="connect-btn">
            <MdAlternateEmail size="2em" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
