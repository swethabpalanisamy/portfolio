import React from "react";
import "./Projects.css";
import projects from "../../constants/projects.json";
import ProjectCard from "./ProjectCard";
import { assets } from "../../assets/assets";

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-div">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        <a
          className="project-view-more-btn"
          href="https://github.com/swethabpalanisamy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View more</span>
          <img src={assets.right_arrow} alt="right-arrow" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
