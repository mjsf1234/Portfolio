import "./Skills.css";
import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import skills from "../Data/SkillsData";

const Skills = () => {
  console.log(skills);
  return (
    <div className="skills-main" id="skills">
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
