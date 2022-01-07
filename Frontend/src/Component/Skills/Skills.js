import "./Skills.css";
import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";

const Skills = () => {
  const skills = [
    {
      key: "0",
      name: "HTML5",
      img: "/Images/html5.png",
    },
    {
      key: "1",
      name: "CSS",
      img: "/Images/css3.png",
    },
    {
      key: "2",
      name: "Javascript",
      img: "/Images/javascript.png",
    },
    {
      key: "3",
      name: "React",
      img: "/Images/react.png",
    },
    {
      key: "4",
      name: "NodeJs",
      img: "/Images/nodejs.png",
    },
    {
      key: "5",
      name: "C++",
      img: "/Images/c++.png",
    },
    {
      key: "6",
      name: "Bootstrap",
      img: "/images/bootstrap.png",
    },
    {
      key: "7",
      name: "MongoDb",
      img: "/Images/mongodb.png",
    },
  ];
  return (
    <div className="skills-main">
      <Title title=" Skills" />

      {/* <h1 className="skills-title">Skills</h1>
      </Title> */}

      <div className="skills-grid">
        {skills.map((e) => {
          return <Card key={e.key} name={e.name} image={e.img} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
