import React from "react";
import projectData from "../../projectData.json";
import ProjectImg from "./projectImg.js";
import madlibsProject from "../../images/projects/madlibs.jpg";
import travelBoardProject from "../../images/projects/travelboard.jpg";
import safePlaceProject from "../../images/projects/safeplace.jpg";
import moviesHubProject from "../../images/projects/moviesHub.jpg";
import { ReactComponent as Arrow } from "../../images/icons/Arrow.svg";
import "./index.scss";

const ProjectsList = ({ setCursorStyle }) => {
  const projectImgMap = {
    safePlaceImg: safePlaceProject,
    travelBoardImg: travelBoardProject,
    madlibsImg: madlibsProject,
    moviesHubImg: moviesHubProject,
  };

  const projects = projectData.projects.map((project, index) => {
    return (
      <div className="project">
        <a href={project.link}>
          <div className={index % 2 === 0 ? "alignLeft" : "alignRight"}>
            <div
              className="text"
              onMouseOver={(e) => setCursorStyle("viewCursor")}
              onMouseOut={(e) => setCursorStyle("cursor")}
            >
              <h2>{project.name}</h2>
              <p>{project.shortDescription}</p>
              <a href={project.link} className="caseStudyBtn">
                View case study <Arrow className="arrow" />
              </a>
            </div>
            <div className="imgDiv">
              <ProjectImg project={project} projectImgMap={projectImgMap} />
            </div>
          </div>
        </a>
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
