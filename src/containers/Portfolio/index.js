import React from "react";
import ProjectsList from "../../components/ProjectsList";
import projectData from "../../projectData.json";
import "./index.scss";

const Portfolio = ({ setCursorStyle }) => {
  // const [numToSlice, setNumToSlice] = useState(-1);
  const numToSlice = projectData.length;

  return (
    <div className="WorkPage">
      <ProjectsList setCursorStyle={setCursorStyle} numToSlice={numToSlice} />
    </div>
  );
};

export default Portfolio;
