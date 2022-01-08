import React from "react";
import Title from "../UI/Title";
import "./Contacts.css";
import GitHubIcon from "@material-ui/icons/GitHub.js";
import LinkedIn from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const Contacts = () => {
  return (
    <div className="contacts-main">
      <Title title="Contacts" />

      <div className="contacts-grid">
        <a href="https://github.com/mjsf1234">
          <GitHubIcon style={{ fontSize: 60, color: "#171515" }} />
        </a>
        <a href="https://www.linkedin.com/in/mrityunjay-saraf-37a520186/">
          <LinkedIn style={{ fontSize: 60, color: "#0e76a8" }} />
        </a>
        <a href="https://twitter.com/SarafMrityunjay">
          <TwitterIcon style={{ fontSize: 60, color: "#00acee" }} />
        </a>
      </div>
    </div>
  );
};
export default Contacts;
