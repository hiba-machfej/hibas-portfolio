import React from "react";
import { ReactComponent as LinkedinIcon } from "../../Images/Icons/linkedin.svg";
import { ReactComponent as Github } from "../../Images/Icons/github.svg";
import butterfly3 from "../../Images/butterfly3.png";
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img src={butterfly3} alt="Butterfly3" className="butterfly3" />
      <h1>
        What's the next step?
        <br />
        you tell me 😉
      </h1>
      <div className="contactText">
        <p>
          I wish to keep on learning and I want to translate my knowledge into
          real-world projects. I put my heart into everything I do. I would like
          to have the chance to prove it to you! So, shall we talk?
        </p>
        <a href="mailto: hiba.mashfij@gmail.com">hiba.mashfij@gmail.com</a>
        <a href="https://www.linkedin.com/in/hiba-machfej-09400189/">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/hiba-machfej">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Contact;
