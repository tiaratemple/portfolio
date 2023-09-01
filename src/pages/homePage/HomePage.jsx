import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { ToggleThemeContext } from "../../components/themes/ThemesContext";

const HomePage = () => {
  const { data, setData } = useContext(ToggleThemeContext);

  console.log("are we in darkmode in home:", data);

  return (
    <>
      <div className="homepage-content-container">
        <div className="name-jobtitle-container">
          <h2 className="home-name">Tiara Temple</h2>
          <p className="home-job-title">Frontend Developer</p>
        </div>
        <div className="homepage-link-container">
          <Link
            to="/about"
            className={data.darkMode ? "dark-mode-styles" : "link-styles"}
          >
            ABOUT
          </Link>
          <Link
            to="/projects"
            className={data.darkMode ? "dark-mode-styles" : "link-styles"}
          >
            PROJECTS
          </Link>
          <Link
            to="/contact"
            className={data.darkMode ? "dark-mode-styles" : "link-styles"}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
