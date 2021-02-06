import React from "react";
import ProjectsList from "../../components/ProjectsList";
import "./index.scss";

const Portfolio = ({ setCursorStyle }) => {
  return (
    <div className="WorkPage">
      <ProjectsList setCursorStyle={setCursorStyle} />
    </div>
  );
};

export default Portfolio;
