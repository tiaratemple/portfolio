import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Header />
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
