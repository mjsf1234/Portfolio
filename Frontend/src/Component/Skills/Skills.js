import "./Skills.css";
import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import skills from "../Data/SkillsData";
import { Section, SectionTitle ,SectionDivider} from "../UI/Style";
import { GridContainer } from "./SkillsStyle";

const Skills = () => {
  console.log(skills);
  return (
    <Section className="skills-main" id="skills">
      <Title title=" Skills" />
      <GridContainer className="skills-grid">
        {skills.map((e) => {
          return <Card key={e.key} name={e.name} image={e.imgurl} />;
        })}
      </GridContainer>
    </Section>
  );
};
export default Skills;
