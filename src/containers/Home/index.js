import React from "react";
import Introduction from "../../components/Introduction";
import Projects from "../../components/Projects";
import "./index.scss";

const Home = ({ setCursorStyle }) => {
  return (
    <div className="HomePage">
      <Introduction />
      <Projects setCursorStyle={setCursorStyle} />
    </div>
  );
};

export default Home;
