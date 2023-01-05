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
            <button className="homepage-btn">ABOUT</button>
          </Link>
          <Link to="/projects" className="link-styles">
            <button className="homepage-btn">PROJECTS</button>
          </Link>
          <Link to="/contact" className="link-styles">
            <button className="homepage-btn">CONTACT</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
