import React from "react";
import "./NavBar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">
            Experiências
          </Link>
        </li>
        <li>
          <Link to="skills-map" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">
            Mapa de Skills
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;