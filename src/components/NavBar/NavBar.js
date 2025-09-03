import React from "react";
import "./NavBar.css";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Você pode adicionar seu <h1> com o nome aqui se quiser */}
      {/* <h1 className="logo">Vanessa Da Silva</h1> */}

      <ul className="nav-links">
        <li>
          <Link
            to="home"           // ID da seção de destino
            spy={true}           // Ativa o monitoramento da rolagem
            smooth={true}        // Ativa a rolagem suave
            offset={-80}        // Compensa a altura do menu para o alinhamento
            duration={500}       // Duração da animação de rolagem
            activeClass="active" // Classe CSS aplicada quando o link está ativo
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