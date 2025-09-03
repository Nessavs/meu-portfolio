import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../particles-config";

import "./Hero.css";
import fotoPerfil from './eu.jpeg'

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="hero" id="home">
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
        <motion.div >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="btn"
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