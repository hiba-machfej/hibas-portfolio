import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import ProjectOne from "../../components/ProjectOne";
import ProjectTwo from "../../components/ProjectTwo";
import ProjectThree from "../../components/ProjectThree";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="scrollSnap">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </>
  );
};

export default Home;
