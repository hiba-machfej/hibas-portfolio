import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import ProjectOne from "../../components/ProjectOne";

const Home = () => {

  const projectsArr = [
    {
      name: "Travel Board",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "travelBoardImg",
      className: "travelBoard",
    },
    {
      name: "MaDreamLibs",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "madlibsImg",
      className: "madlibs",
    },
    {
      name: "Movies Hub",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "moviesHubImg",
      className: "moviesHub",
    },
    {
      name: "Makeup Shop",
      shortDescription:
        "This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.This is my first project ever I was exited to make it.",
      mainImg: "makeUpShopImg",
      className: "makeUpShop",
    }
  ];

  const projects = projectsArr.map((projectData) => {
  return  <ProjectOne projectData={projectData} />;
  });
  
  return (
    <div>
      <Navbar />
      <div className="scrollSnap">
        {projects}
      </div>
    </div>
  );
};

export default Home;
