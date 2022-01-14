import React from "react";
import Title from "../UI/Title";
import "./Contacts.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "../Form/Form";
import { Section, SectionTitle ,SectionDivider} from "../UI/Style";
const Contacts = () => {
  return (
    <Section className="contacts-main" id="contacts">

      <Title title="Contacts" />
      <Form />
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
     
    </Section>
  );
};
export default Contacts;
