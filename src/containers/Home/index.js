import React from "react";
import Introduction from "../../components/Introduction";
import ProjectsList from "../../components/ProjectsList";
import "./index.scss";

const Home = ({ setCursorStyle }) => {
  return (
    <div className="HomePage">
      <Introduction />
      <ProjectsList setCursorStyle={setCursorStyle} />
    </div>
  );
};

export default Home;
