import React from "react";
import hiba from "../../images/hiba.jpg";
import hibaPurble from "../../images/hibaPurble.jpg";
import butterflies1 from "../../images/butterflies1.png";
import butterflies2 from "../../images/butterflies2.png";
import "./index.scss";

const Introduction = () => {
  const [scrollPosition, setSrollPosition] = React.useState(0);
  const [profileImg, setProfileImg] = React.useState(hiba);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="description">
      <p className="aboutMe">
        Hi there, I'm <span>Hiba Machfej</span>, and I'm a
      </p>

      <img src={butterflies2} alt="Butterfly" className="butterfly2" />

      <img src={butterflies1} alt="Butterfly1" className="butterfly1" />
      <h1>Front-end</h1>

      <div className="developer">
        <h2>Developer</h2>
      </div>

      <p className="scroll"> Scroll to explore</p>
      <img
        src={profileImg}
        onMouseOver={(e) => setProfileImg(hibaPurble)}
        onMouseOut={(e) => setProfileImg(hiba)}
        alt="Hiba Machfej"
        className={500 < scrollPosition ? "hibaAnimation" : "hiba"}
      />
      <div className="introduction">
        <p>
          I am on a mission 🚀 aiming to improve people's lives with technology.
          <span>
            "because people who are crazy enough to think that they can change
            the world, are the ones who do." -Steve Jobs
          </span>
        </p>

        <p className="studies">
          I have certificates from{" "}
          <a href="https://www.re-coded.com/">Re:coded</a> and{" "}
          <a href="https://flatironschool.com/">Flatiron</a>, the New York-based
          coding school. I am continuing my Ph.D. in Urban planning. I have a
          master's in Urban Design and a bachelor's degree in Architecture.
          <br /> Well, I am always up for a challenge and I love learning new
          things. That's exactly why I chose to learn coding. I believe
          creativity is born from hybrid skills. So, I am quite excited to
          translate my past experiences into digital products. aren't you?
        </p>
      </div>
    </div>
  );
};

export default Introduction;
