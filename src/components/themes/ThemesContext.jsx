import React, { createContext, useState } from "react";

// create toggle context
export const ToggleThemeContext = createContext();

// create context provider
export const ToggleThemeProvider = ({ children }) => {
  const [data, setData] = useState({ darkMode: false });

  // the value passed in here will be accessible anywhere in our application
  // you can pass any value, in our case we pass our state and it's update method
  return (
    <ToggleThemeContext.Provider value={{ data, setData }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};
