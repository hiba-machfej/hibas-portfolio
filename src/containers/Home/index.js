import React from "react";
import Introduction from "../../components/Introduction";
import ProjectsList from "../../components/ProjectsList";
import Contact from "../../components/Contact";
import "./index.scss";

const Home = ({ setCursorStyle }) => {
  return (
    <div className="HomePage">
      <Introduction />
      <ProjectsList setCursorStyle={setCursorStyle} />
      <Contact />
    </div>
  );
};

export default Home;
