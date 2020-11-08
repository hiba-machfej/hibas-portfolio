import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import ProjectOne from "../../components/ProjectOne";
import ProjectTwo from "../../components/ProjectTwo";
import ProjectThree from "../../components/ProjectThree";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="scrollSnap">
        <div>
          <ProjectOne className="hello" />
        </div>
        <div>
          <ProjectTwo className="hello" />
        </div>
        <div>
          {" "}
          <ProjectThree className="hello" />
        </div>
      </div>
    </div>
  );
};

export default Home;
