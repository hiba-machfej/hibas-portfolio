import React from "react";
import projectData from "../../projectData.json";
import madlibsProject from "../../images/projects/madlibs.jpg";
import travelBoardProject from "../../images/projects/travelboard.jpg";
import safePlaceProject from "../../images/projects/safeplace.jpg";
import moviesHubProject from "../../images/projects/moviesHub.jpg";
import ProjectImg from "./projectImg.js";
import "./index.scss";

const ProjectsList = () => {
  const projectImgMap = {
    safePlaceImg: safePlaceProject,
    travelBoardImg: travelBoardProject,
    madlibsImg: madlibsProject,
    moviesHubImg: moviesHubProject
  };

  const projects = projectData.projects.map((project, index) => {
    return (
      <div className="project">
        <div className={index % 2 === 0 ? "alignLeft" : "alignRight"}>
          <div className="text">
            <h2>{project.name}</h2>
            <p>{project.shortDescription}</p>
            <button>View Case Study</button>
          </div>
          <div className="imgDiv">
            <ProjectImg project={project} projectImgMap={projectImgMap} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects">
      <h1>Recent Projects</h1>
      {projects}
    </div>
  );
};

export default ProjectsList;
