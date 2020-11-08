import React from "react";
import "./index.scss";
import img from "../../Images/madlibs.jpg";
import { ReactComponent as Arrow } from "../../Images/Icons/Arrow.svg";

const ProjectOne = () => {

  return (
    <div className="project">
      <div className="sideLine" />
      <div className="page">
        <div className="content">
          <h1>MaDreamLibs</h1>
          <p>
            This is my first project ever I was exited to make it.This is my
            first project ever I was exited to make it.This is my first project
            ever I was exited to make it.
          </p>
          <button>
            Open project
            <Arrow className="svg" />
          </button>
        </div>
        <div className="imgDiv">
          <div className="imgCut1"/>
          <div>
            <div className="imgShadow"/>
            <img src={img} alt="Madlibs project" className="clip-me" />
          </div>
          <div/>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
