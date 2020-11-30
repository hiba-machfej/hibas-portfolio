import React from "react";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="name" href="/">
        <p className="firstName">HIBA</p>
        <p className="lastName">MACHFEJ</p>
      </a>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
