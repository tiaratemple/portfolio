import React, { useContext, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import { ToggleThemeContext } from "./components/themes/ThemesContext";
function App() {
  const { data, setData } = useContext(ToggleThemeContext);

  return (
    <div
      className="App"
      style={{
        // update mode between dark and light
        backgroundColor: data.darkMode ? "#231F20" : "#FAF4F0",
        color: data.darkMode ? "#ffffff" : "#000000",
        height: "100%",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
