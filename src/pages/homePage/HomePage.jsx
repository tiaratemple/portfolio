import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homepage-content-container">
        <div className="name-jobtitle-container">
          <h2 className="home-name">Tiara Temple</h2>
          <p className="home-job-title">Frontend Developer</p>
        </div>
        <div className="homepage-link-container">
          <Link to="/about" className="link-styles">
            ABOUT
          </Link>
          <Link to="/projects" className="link-styles">
            PROJECTS
          </Link>
          <Link to="/contact" className="link-styles">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
