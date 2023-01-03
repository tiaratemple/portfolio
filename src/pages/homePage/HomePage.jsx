import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="hompage-content-container">
      <h2 className="home-name">Tiara Temple</h2>
      <p className="home-job-title">Frontend Developer</p>
      <div className="homepage-link-container">
        <Link to="/about">
          <button className="homepage-btn">ABOUT</button>
        </Link>
        <Link to="/projects">
          <button className="homepage-btn">PROJECTS</button>
        </Link>
        <Link to="/contact">
          <button className="homepage-btn">CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
