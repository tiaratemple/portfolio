import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <a
          href="https://grand-selkie-9e0323.netlify.app"
          className="project-card-links"
        >
          Pixel Perfect Mock Landing Page
        </a>
        <a
          href="https://share.vidyard.com/watch/GqfqK4JZ7U91Bsf7WU4A3H?"
          className="project-card-links"
        >
          Lore
        </a>
        <a
          href="https://share.vidyard.com/watch/VMbBdio3xECoT8geoEYp52?"
          className="project-card-links"
        >
          You Grow Girl
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
