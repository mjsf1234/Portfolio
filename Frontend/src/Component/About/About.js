import Title from "../UI/Title";
import "./About.css";

const About = () => {
  return (
    <div className="about-main" id="about">
      <Title title="About" />
      <div className="content">
        <img src="/Images/profile-image.jpg" alt="logo"></img>

        <div className="about-title">
          <h2>
            Hello everyone this Mrityunjay saraf and I'm a full stack developer
          </h2>
        </div>
      </div>
    </div>
  );
};
export default About;
