import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="name" to="/">
        <p>HIBA</p>
        <p className="lastName">MACHFEJ</p>
      </NavLink>
      <div>
        <NavLink to="section1">Projects</NavLink>
        <NavLink to="section1">About</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
