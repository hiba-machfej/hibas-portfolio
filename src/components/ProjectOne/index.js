import React from "react";
import "./index.scss";
import madlibsImg from "../../Images/madlibs.jpg";
import { ReactComponent as Arrow } from "../../Images/Icons/Arrow.svg";

const ProjectOne = ({ projectData }) => {
  const imageMap = [madlibsImg];

  return (
    <div className={projectData.className}>
      <div className="project">
        <div className="sideLine" />
        <div className="page">
          <div className="content">
            <h1>{projectData.name}</h1>
            <p>{projectData.shortDescription}</p>
            <button>
              Open project
              <Arrow className="svg" />
            </button>
          </div>
          <div className="imgDiv">
            {imageMap.map((img) => {
              return <img src={img} alt={projectData.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
