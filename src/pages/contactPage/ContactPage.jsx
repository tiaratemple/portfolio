import React, { useContext } from "react";
import "./ContactPage.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { ToggleThemeContext } from "../../components/themes/ThemesContext";

const ContactPage = () => {
  const { data, setData } = useContext(ToggleThemeContext);

  return (
    <div
      className={
        data.darkMode
          ? "dark-mode-contact-container"
          : "contact-content-container"
      }
    >
      <div className="contact-top-text-container">
        <h1 className="connect-title">Connect with me.</h1>
        <p className="connect-p">
          It would be my pleasure to help you bring your website to life.
        </p>
      </div>
      <div className="contact-page-link-container">
        <a
          href="https://www.linkedin.com/in/tiaratempledev/"
          target="_blank"
          rel="noreferrer"
          className="contact-links"
        >
          <BsLinkedin className="contact-icon" />
        </a>
        <a
          href="https://github.com/tiaratemple"
          target="_blank"
          rel="noreferrer"
          className="contact-links"
        >
          <BsGithub className="contact-icon" />
        </a>
        <a href="mailto:tmtemple7@gmail.com" className="contact-links">
          <MdAlternateEmail className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
