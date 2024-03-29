import React from "react";
// import projectData from "../../projectData.json";
import ProjectImg from "./projectImg.js";
import madlibsImg from "../../Images/ProjectsImg/madlibs.jpg";
import travelBoardImg from "../../Images/ProjectsImg/travelboard.jpg";
import safePlaceImg from "../../Images/ProjectsImg/safeplace.jpg";
import moviesHubImg from "../../Images/ProjectsImg/moviesHub.jpg";
import quakingAspenImg from "../../Images/ProjectsImg/quakingAspen.jpg";
import changeMakersImg from "../../Images/ProjectsImg/changemakers.jpg";
import nimImg from "../../Images/ProjectsImg/nim.jpg";
import guestbookImg from "../../Images/ProjectsImg/guestbook.jpg";
import memeMuseumImg from "../../Images/ProjectsImg/memeMuseum.jpg";
import nearExampleImg from "../../Images/ProjectsImg/nearExampleImg.jpg"
import nearExampleImg2 from "../../Images/ProjectsImg/nearExampleImg2.jpg"
import { ReactComponent as WindowIcon } from "../../Images/Icons/windowIcon.svg";
import { ReactComponent as GithubIcon } from "../../Images/Icons/githubIcon.svg";
import "./index.scss";

const ProjectsList = ({ setCursorStyle, projectData }) => {
  const projectImgMap = {
    safePlaceImg: safePlaceImg,
    travelBoardImg: travelBoardImg,
    madlibsImg: madlibsImg,
    moviesHubImg: moviesHubImg,
    quakingAspenImg: quakingAspenImg,
    changeMakersImg: changeMakersImg,
    nimImg:nimImg,   
    nearExampleImg:nearExampleImg,
    nearExampleImg2:nearExampleImg2,
    guestbookImg:guestbookImg,
    memeMuseumImg:memeMuseumImg
  };

  const projects = projectData.map((project, index) => {
    return (
      <div className="project">
        <div className={index % 2 === 0 ? "alignLeft" : "alignRight"}>
          <div className="projectDescription">
            <a href={project.path}>
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
              {project.link !== "no" ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  
                  <WindowIcon />
                </a>
              ) : (
                ""
              )}
              {project.githubLink !== "no" ? (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  
                  <GithubIcon />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="imgDiv">
            <a href={project.path}>
              <ProjectImg project={project} projectImgMap={projectImgMap} />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="projectsList" id="projectsList">
      {projects}
    </div>
  );
};

export default ProjectsList;
