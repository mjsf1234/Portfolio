import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="projectCard-main">
      <div className="img">
        <img src={props.image}></img>
      </div>
      <h2>{props.name}</h2>
      <div className="projects-desc">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
