import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="name" to="/">
        <p>HIBA</p>
        <p className="lastName">MACHFEJ</p>
      </NavLink>
      <div className="links">
        <NavLink to="section1">Projects</NavLink>
        <NavLink to="section1">About</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
