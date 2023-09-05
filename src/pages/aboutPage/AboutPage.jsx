import React, { useContext } from "react";
import "./AboutPage.css";
import spainpic from "../../assets/spainpic.jpeg";
import { Link } from "react-router-dom";
import { ToggleThemeContext } from "../../components/themes/ThemesContext";

const AboutPage = () => {
  const { data, setData } = useContext(ToggleThemeContext);

  return (
    <div
      className={
        data.darkMode
          ? "dark-mode-about-container"
          : "aboutpage-content-container"
      }
    >
      <div className="about-row">
        <h1 className="aboutpage-title">About</h1>
        <img src={spainpic} alt="me in Spain in greenhouse" />
      </div>
      <h2 className="description">
        Frontend Developer, avid learner and language enthusiast.
      </h2>
      <p className="about-me">
        Hello! Hola! Ciao! Konnichiwa! Assalamu alaikum! Shikamoo! My name is
        Tiara. I am a Frontend Developer in Dallas, TX. I am passionate about
        languages, travel and culture. After traveling the world as a flight
        attendant, I decided to challenge myself and learn the languages of
        computer programming.
      </p>
      <p className="about-me-2">
        I enjoy seeing my creativity come to life with each project. Every day
        is an opportunity to learn, grow, and overcome obstacles.
      </p>
      <h3 className="stack">Stack</h3>
      <div
        className={
          data.darkMode ? "dark-mode-stack-container" : "stack-container"
        }
      >
        <p>React</p>
        <p>Javascript</p>
        <p>Node</p>
        <p>CSS</p>
        <p>Typescript</p>
        <p>Postgres</p>
        <p>Express</p>
      </div>
      <Link
        to="/projects"
        className={data.darkMode ? "dark-mode-about-links" : "about-prj-link"}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        className={
          data.darkMode ? "dark-mode-about-links" : "about-contact-link"
        }
      >
        Contact me
      </Link>
    </div>
  );
};

export default AboutPage;
