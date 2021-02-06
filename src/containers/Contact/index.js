import React from "react";
import { ReactComponent as LinkedinIcon } from "../../Images/Icons/linkedinIcon.svg";
import { ReactComponent as GithubIcon } from "../../Images/Icons/githubIcon.svg";
import butterfly3 from "../../Images/butterfly3.png";
import hibaResume from "../../Files/HibaResume.pdf";
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
        <a href={hibaResume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
        <div className="outerLinks">
          <a
            href="https://www.linkedin.com/in/hiba-machfej-09400189/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/hiba-machfej"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
