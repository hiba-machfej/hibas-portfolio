import React from "react";
import ProjectsList from "../ProjectsList";
import projectData from "../../projectData.json";
import butterfly2 from "../../Images/butterfly2.png";
import "./index.scss";

const Projects = ({ setCursorStyle }) => {
  const ProjectDataSlice = projectData.projects.slice(0, 4);
  return (
    <div className="projects" id="projects">
      <h1>Recent Projects</h1>
      <img src={butterfly2} alt="Butterfly" className="butterfly2" />
      <ProjectsList
        setCursorStyle={setCursorStyle}
        projectData={ProjectDataSlice}
      />
      <a href="/portfolio" className="viewProjects">
        View all Projects
      </a>
    </div>
  );
};

export default Projects;
