import React from "react";
import projectData from "../../projectData.json";
import ProjectImg from "./projectImg.js";
import madlibsProject from "../../Images/ProjectsImg/madlibs.jpg";
import travelBoardProject from "../../Images/ProjectsImg/travelboard.jpg";
import safePlaceProject from "../../Images/ProjectsImg/safeplace.jpg";
import moviesHubProject from "../../Images/ProjectsImg/moviesHub.jpg";
import butterfly2 from "../../Images/butterfly2.png";
import { ReactComponent as WindowIcon } from "../../Images/Icons/windowIcon.svg";
import { ReactComponent as GithubIcon } from "../../Images/Icons/githubIcon.svg";
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
        <div className={index % 2 === 0 ? "alignLeft" : "alignRight"}>
          <div className="projectDescription">
            <a href={project.link} target="_blank" rel="noreferrer">
              <div
                className="text"
                onMouseOver={(e) => setCursorStyle("viewCursor")}
                onMouseOut={(e) => setCursorStyle("cursor")}
              >
                <h2>{project.name}</h2>
                <p>{project.shortDescription}</p>
              </div>
            </a>
            <div className="outerLinks">
              <a href={project.link} target="_blank" rel="noreferrer">
                <WindowIcon />
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </div>
          </div>
          <div className="imgDiv">
            <a href={project.link} target="_blank" rel="noreferrer">
              <ProjectImg project={project} projectImgMap={projectImgMap} />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projects" id="projects">
      <h1>Recent Projects</h1>
      <img src={butterfly2} alt="Butterfly" className="butterfly2" />
      {projects}
    </div>
  );
};

export default ProjectsList;
