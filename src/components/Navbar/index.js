import React from "react";
import "./index.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  var Scroll = require("react-scroll");
  var Events = Scroll.Events;

  Events.scrollEvent.register("begin", function (to, element) {
    console.log("begin", to, element);
  });

  return (
    <div className="navbar">
      Hiba Machfej
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        project one
      </Link>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        project two
      </Link>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        project three
      </Link>
    </div>
  );
};

export default Navbar;
