import React from "react";

import "./ProjectCard.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareIcon from "@mui/icons-material/IosShare";

const ProjectCard = (props) => {
  return (
    <div className="projectcard-main">
      <div className="projectcard-img">
        <img src={props.image} alt="logo"></img>
      </div>
      <div className="projectcard-content">
        <span className="heading">{props.name}</span>
        <p>{props.desc}</p>
      </div>
      <div className="projectcard-link">
        <a href={props.gitlink}>
          <GitHubIcon style={{ fontSize: 50, color: "#3b7ab0" }} />
        </a>
        <a href={props.prolink}>
          <IosShareIcon style={{ fontSize: 50, color: "#3b7ab0" }} />
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
