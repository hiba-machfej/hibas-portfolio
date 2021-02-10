import React from "react";
import madlibsImg from "../../Images/ProjectsImg/madlibs.jpg";
import travelBoardImg from "../../Images/ProjectsImg/travelboard.jpg";
import safePlaceImg from "../../Images/ProjectsImg/safeplace.jpg";
import moviesHubImg from "../../Images/ProjectsImg/moviesHub.jpg";
import quakingAspenImg from "../../Images/ProjectsImg/quakingAspen.jpg";
import sealrImg from "../../Images/ProjectsImg/sealr.jpg";
import changeMakersImg from "../../Images/ProjectsImg/changemakers.jpg";
import "./index.scss";

const SingleProject = ({ project }) => {
  const projectImg = {
    safePlaceImg: safePlaceImg,
    travelBoardImg: travelBoardImg,
    madlibsImg: madlibsImg,
    moviesHubImg: moviesHubImg,
    quakingAspenImg: quakingAspenImg,
    sealrImg:sealrImg,
    changeMakersImg:changeMakersImg
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
             {project.link !== "no" ?  <a href={project.link} target="_blank" rel="noreferrer"> Live Demo  </a>   : ""}
             {project.githubLink !== "no" ?  <a href={project.githubLink} target="_blank" rel="noreferrer"> Check the code </a>  : ""}
            </div>
        </div>
      </div>
      <div className="partTwo">
        <img src={projectImg[project.img2]} alt="" className="img2" />
      </div>
    </div>
  );
};

export default SingleProject;
