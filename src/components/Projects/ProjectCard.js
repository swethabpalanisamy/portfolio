import React from "react";
import { assets } from "../../assets/assets";
import "./ProjectCard.css";

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className="projectcard-container">
      <img
        src={assets[imageSrc]}
        alt={`project card`}
        className="projectcard-image"
      />
      <h3 className="projectcard-title">{title}</h3>
      <div className="projectcard-links">
        <a
          href={source}
          className="projectcard-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.right_arrow} alt="right-arrow" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
