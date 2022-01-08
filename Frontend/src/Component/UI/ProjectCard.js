import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="projectCard-main">
      <div className="img">
        <img src={props.image}></img>
      </div>
      <h2 className="heading">{props.name}</h2>
      <div className="projects-desc">
        <h4>{props.desc}</h4>
      </div>
    </div>
  );
};
export default ProjectCard;
