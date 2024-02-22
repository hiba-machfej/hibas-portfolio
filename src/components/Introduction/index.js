import React from 'react';
import profilePicture from '../../Images/profilePicture.jpg';
import profilePictureEdit from '../../Images/profilePictureEdit.jpg';
import butterfly1 from '../../Images/butterfly1.png';
import './index.scss';

const Introduction = () => {
  const [scrollPosition, setSrollPosition] = React.useState(0);
  const [profileImg, setProfileImg] = React.useState(profilePicture);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="description">
      <p className="aboutMe">
        Hi there, I'm <span>Hiba Machfej</span>, a software developer and I'm passionate about
      </p>

      <img src={butterfly1} alt="Butterfly1" className="butterfly1" />
      <h1>Technology, Community and Design.</h1>

      <div className="developer">
        <div className="introduction">
          <p>
            I am on a mission 🚀 aiming to improve people's lives with technology.
            <span>"because people who are crazy enough to think that they can change the world, are the ones who do." -Steve Jobs</span>
          </p>

          <p className="studies">
            I am experienced in advancing technical projects and empowering students to join the tech community. Through my work as a coding trainer, I've developed a skill for making complex concepts accessible. My academic studies in Architecture and Urban Design enriched my skills in crafting intuitive, user-centered UI/UX designs. I do my best to merge technical know-how, design insight, and educational experience to make meaningful contributions to development and design initiatives.
            <br /> <br /> Well, I am always up for a challenge and I love learning new things. That's exactly why I chose to learn coding. I believe creativity is born from hybrid skills. So, I am quite excited to translate my past experiences into digital products. aren't you?
          </p>
        </div>
      </div>

      <p className="scroll"> Scroll to explore</p>
      <img src={profileImg} onMouseOver={e => setProfileImg(profilePictureEdit)} onMouseOut={e => setProfileImg(profilePicture)} alt="Hiba Machfej" className={200 < scrollPosition ? 'hibaAnimation' : 'hiba'} />
    </div>
  );
};

export default Introduction;
