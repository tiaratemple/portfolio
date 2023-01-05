import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { RiCopyrightLine } from "react-icons/ri";

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
        <RiCopyrightLine className="copy-icon" /> /2023
      </div>
    </nav>
  );
};

export default Header;
