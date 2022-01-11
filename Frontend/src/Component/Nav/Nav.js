import "./Nav.css";
import React from "react";
import { Container, Div1, Div2 } from "./NavStyle";
import { DiCssdeck } from "react-icons/di";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <Container>
      <Div1>
        <Link className="nav-link" to="/">
          <a style={{ display: "flex", alignItems: "center", color: "green" }}>
            <DiCssdeck size="3rem" />
            <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#internships">
            Internship
          </a>
        </li>
        <li>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contacts">
            Contacts
          </a>
        </li>
      </Div2>
    </Container>
  );
};
export default Nav;
