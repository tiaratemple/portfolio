import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-container">
        <a href="https://share.vidyard.com/watch/GqfqK4JZ7U91Bsf7WU4A3H?">
          <button className="project-btn">Lore</button>
        </a>
        <a href="https://share.vidyard.com/watch/VMbBdio3xECoT8geoEYp52?">
          <button className="project-btn">You Grow Girl</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
