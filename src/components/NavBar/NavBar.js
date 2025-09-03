import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">

      </h1>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Experiências
          </Link>
        </li>
        <li>
          <Link to="skills-map" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Competências
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} activeClass="active" onClick={closeMenu}>
            Contato
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;