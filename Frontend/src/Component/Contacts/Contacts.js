import React from "react";
import Title from "../UI/Title";
import "./Contacts.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Contacts = () => {
  return (
    <div className="contacts-main">
      <Title title="Contacts" />

      <div className="contacts-grid">
        <div className="contact-link">
          <a href="https://github.com/mjsf1234">
            <GitHubIcon style={{ fontSize: 60, color: "#171515" }} />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/mrityunjay-saraf-37a520186/">
            <LinkedInIcon style={{ fontSize: 60, color: "#0e76a8" }} />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://twitter.com/SarafMrityunjay">
            <TwitterIcon style={{ fontSize: 60, color: "#00acee" }} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
