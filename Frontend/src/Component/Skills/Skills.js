import "./Skills.css";
import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";

const Skills = () => {
  const skills = [
    {
      key: "0",
      name: "HTML5",
      imgurl: "/Images/html5.png",
    },
    {
      key: "1",
      name: "CSS",
      imgurl: "/Images/css3.png",
    },
    {
      key: "2",
      name: "Javascript",
      imgurl: "/Images/javascript.png",
    },
    {
      key: "3",
      name: "React",
      imgurl: "/Images/react.png",
    },
    {
      key: "4",
      name: "NodeJs",
      imgurl: "/Images/nodejs.png",
    },
    {
      key: "5",
      name: "C++",
      imgurl: "/Images/c++.png",
    },
    {
      key: "6",
      name: "Bootstrap",
      imgurl: "/images/bootstrap.png",
    },
    {
      key: "7",
      name: "MongoDb",
      imgurl: "/Images/mongodb.png",
    },
    {
      key: "8",
      name: "Github",
      imgurl: "/Images/github.png",
    },
    {
      key: "9",
      name: "Heroku",
      imgurl: "/Images/heroku.png",
    },
    {
      key: "10",
      name: "Python",
      imgurl: "Images/python.png",
    },
  ];
  return (
    <div className="skills-main">
      <Title title=" Skills" />
      <div className="skills-grid">
        {skills.map((e) => {
          return <Card key={e.key} name={e.name} image={e.imgurl} />;
        })}
      </div>
    </div>
  );
};
export default Skills;
