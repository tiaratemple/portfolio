import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Themes from "../themes/Themes";

const Header = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="nav-line"></div>
      </div>
      <div className="nav-right">
        <Themes />
      </div>
    </nav>
  );
};

export default Header;
