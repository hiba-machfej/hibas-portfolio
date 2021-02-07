import React, { useState } from "react";
import ProjectsList from "../../components/ProjectsList";
import projectData from "../../projectData.json";
import "./index.scss";

const Portfolio = ({ setCursorStyle }) => {
  const [projectsList, setProjectsList] = useState(projectData.projects);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState("All");

  return (
    <div className="workPage">
      <h1 className="workWelcome">Welcome to my Portfolio!</h1>
      <p className="workAbout">I am Multi-Potentialite*, I am curios about many things, </p>
      <div className="tags">
        {projectData.tags.map((tag) => {
          return (
            <button
              onClick={() => {
                setProjectsList(
                  projectData.projects.filter((selectedTag) =>
                    selectedTag.tags.includes(tag)
                  )
                );
                setSelectedButtonIndex(tag);
              }}
              disabled={tag === selectedButtonIndex}
            >
              {tag}{" "}
            </button>
          );
        })}
      </div>
      <ProjectsList
        setCursorStyle={setCursorStyle}
        projectData={projectsList}
      />
    </div>
  );
};

export default Portfolio;
