import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="project-content-container">
      <h3 className="project-title">PROJECTS</h3>
      <p className="project-p">
        The world of technology is growing and evolving rapidly. With each
        project, I grow and evolve as well. I am learning and acquiring new
        skills every day.
      </p>
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
