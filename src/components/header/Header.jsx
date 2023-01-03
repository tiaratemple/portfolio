import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <a href="https://www.linkedin.com/in/tiaratempledev/">
          <button className="nav-btn">LinkedIn</button>
        </a>
        <a href="https://github.com/tiaratemple">
          <button className="nav-btn">Github</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
