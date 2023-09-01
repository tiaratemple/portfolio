import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ToggleThemeContext } from "../themes/ThemesContext";

const Header = () => {
  const { data, setData } = useContext(ToggleThemeContext);

  // remove this when done
  // helping 2 see the dark mode state in the console
  console.log("nav grabbing context:", data);
  return (
    <nav>
      <div className="nav-left">
        <Link
          to="/"
          className={data.darkMode ? "dark-mode-nav-link" : "nav-link"}
        >
          Home
        </Link>
        <div
          className={data.darkMode ? "dark-mode-nav-line" : "nav-line"}
        ></div>
      </div>
      <div>
        {data.darkMode ? (
          <span onClick={() => setData({ darkMode: !data.darkMode })}>
            <MdLightMode />
          </span>
        ) : (
          <span onClick={() => setData({ darkMode: !data.darkMode })}>
            <MdDarkMode />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
