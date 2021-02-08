import React from "react";
import madlibsImg from "../../Images/ProjectsImg/madlibs.jpg";
import travelBoardImg from "../../Images/ProjectsImg/travelboard.jpg";
import safePlaceImg  from "../../Images/ProjectsImg/safeplace.jpg";
import moviesHubImg  from "../../Images/ProjectsImg/moviesHub.jpg";
import quakingAspenImg  from "../../Images/ProjectsImg/quakingAspen.jpg";

const SingleProject = ({project}) => {

  const projectImg = {
    safePlaceImg: safePlaceImg ,
    travelBoardImg: travelBoardImg ,
    madlibsImg: madlibsImg ,
    moviesHubImg: moviesHubImg ,
    quakingAspenImg: quakingAspenImg
  };

  return (<div className="project">
    <img src={projectImg[project.mainImg]} alt=""/>
  </div>)
};

export default SingleProject;
