import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import ProjectOne from "../../components/ProjectOne";
import ProjectTwo from "../../components/ProjectTwo";
import ProjectThree from "../../components/ProjectThree";

const Home = () => {

  const projectsArr = [
    {
      name: "MaDreamLibs",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "madlibsImg",
      imgAlt: "Image of MaDreamLibs project",
    },
    {
      name: "project 2",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "madlibsImg",
      imgAlt: "Image of MaDreamLibs project",
    },
    {
      name: "project 3",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "madlibsImg",
      imgAlt: "Image of MaDreamLibs project",
    },
  ];

  const projects = projectsArr.map((projectData) => {
  return  <ProjectOne projectData={projectData} />;
  });
  
  return (
    <div>
      <Navbar />
      <div className="scrollSnap">
        {projects}
        {/* <div>
          <ProjectOne projectData={projectData} />
        </div>
        <div>
          <ProjectTwo className="hello" />
        </div>
        <div>
          {" "}
          <ProjectThree className="hello" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
