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
        <a
          href="https://www.linkedin.com/in/tiaratempledev/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="connect-btn">
            <BsLinkedin className="contact-icon" />
          </button>
        </a>
        <a
          href="https://github.com/tiaratemple"
          target="_blank"
          rel="noreferrer"
        >
          <button className="connect-btn">
            <BsGithub className="contact-icon" />
          </button>
        </a>
        <a href="mailto:tmtemple7@gmail.com">
          <button className="connect-btn">
            <MdAlternateEmail className="contact-icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
