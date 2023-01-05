import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiCopyrightLine } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link to="/">
            <button className="nav-btn">Home</button>
          </Link>
          <div className="nav-line"></div>
        </div>
        <div className="nav-right">
          <RiCopyrightLine className="copy-icon" /> /2023
        </div>
      </nav>
    </header>
  );
};

export default Header;
