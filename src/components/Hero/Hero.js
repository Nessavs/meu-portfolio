import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll'; // 1. IMPORTAR O 'Link'


// Imports para as partículas
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../particles-config"; // Verifique se o caminho está correto

import "./Hero.css";
import fotoPerfil from './eu.jpeg'

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // Esta função carrega o motor do tsparticles
    await loadFull(engine);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Componente de Partículas no Fundo */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      
      <div className="hero-text">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vanessa Da Silva <span className="highlight">| Desenvolvedora De Software</span>
        </motion.h2>
        <p>
          “A persistência é o menor caminho do êxito.” – Charles Chaplin 🚀
        </p>
        {/* --- 2. BOTÃO AJUSTADO PARA SER UM LINK DE ROLAGEM --- */}
        <motion.div >
          <Link
            to="projects" // Aponta para a seção com id="projects"
            spy={true}
            smooth={true}
            offset={-80} // Mesmo offset do menu para consistência
            duration={500}
            className="btn" // Mantém o estilo do seu botão
          >
            Ver Projetos
          </Link>
        </motion.div>

        <div className="socials">
          <a href="https://github.com/nessavs" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/vanessadasilva25" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:vanessadasilva2509@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <motion.div
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={fotoPerfil} alt="me" />
      </motion.div>
    </section>
  );
};

export default Hero;