import React from "react";
import ProjectsList from "../ProjectsList";
import butterfly2 from "../../Images/butterfly2.png";
import "./index.scss";

const Projects = ({ setCursorStyle }) => {
  return (
    <div className="projects" id="projects">
      <h1>Recent Projects</h1>
      <img src={butterfly2} alt="Butterfly" className="butterfly2" />
      <ProjectsList setCursorStyle={setCursorStyle} />
      <h5>View all Projects</h5>
    </div>
  );
};

export default Projects;
