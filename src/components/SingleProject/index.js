import React from "react";
import madlibsImg from "../../Images/ProjectsImg/madlibs.jpg";
import travelBoardImg from "../../Images/ProjectsImg/travelboard.jpg";
import safePlaceImg from "../../Images/ProjectsImg/safeplace.jpg";
import moviesHubImg from "../../Images/ProjectsImg/moviesHub.jpg";
import quakingAspenImg from "../../Images/ProjectsImg/quakingAspen.jpg";
import changeMakersImg from "../../Images/ProjectsImg/changemakers.jpg";
import nimImg from "../../Images/ProjectsImg/nim.jpg";
import nearExampleImg from "../../Images/ProjectsImg/nearExampleImg.jpg"
import nearExampleImg2 from "../../Images/ProjectsImg/nearExampleImg2.jpg"
import guestbookImg from "../../Images/ProjectsImg/guestbook.jpg";
import memeMuseumImg from "../../Images/ProjectsImg/memeMuseum.jpg";
import { ReactComponent as WindowIcon } from "../../Images/Icons/windowIcon.svg";
import { ReactComponent as GithubIcon } from "../../Images/Icons/githubIcon.svg";
import "./index.scss";

const SingleProject = ({ project }) => {
  const projectImg = {
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

  return (
    <div className="singleProject">
      <div className="partOne">
        <div className="mainImgBlock">
          <img src={projectImg[project.mainImg]} alt="" className="mainImg" />
        </div>
        <div className="partOneText">
          <h1 className="workWelcome">{project.name}</h1>
          <p className="workAbout">{project.shortDescription}</p>
          <h4>Used Technologies</h4>
          <p className="technologies">
            {project.technologies.map((tech) => {
              return <button>{tech} </button>;
            })}
          </p>
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
      </div>
    </div>
  );
};

export default SingleProject;
