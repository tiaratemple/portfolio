import React, { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Themes = () => {
  const [theme, setTheme] = useState(false);

  const handleThemeButton = () => {
    // setting theme to opposite upon click
    setTheme(!theme);
  };

  //set theme in local storage and verify it persists after refreshing

  return (
    <div>
      {theme ? (
        <span onClick={() => handleThemeButton()}>
          <MdLightMode />
        </span>
      ) : (
        <span onClick={() => handleThemeButton()}>
          <MdDarkMode />
        </span>
      )}
    </div>
  );
};

export default Themes;