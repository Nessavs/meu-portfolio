import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Backend Developer <span className="highlight">| Node.js</span>
        </motion.h2>
        <p>
          Apaixonado por criar APIs escaláveis e sistemas eficientes. Sempre explorando novas tecnologias para entregar soluções de alta qualidade.
        </p>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Ver Projetos
        </motion.button>

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
        <img src="https://via.placeholder.com/300x350" alt="me" />
      </motion.div>
    </section>
  );
};

export default Hero;
