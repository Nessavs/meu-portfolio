import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'; // Ícones temáticos
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Sobre mim
      </motion.h2>
      
      <motion.p 
        className="about-intro-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Olá! Sou a <span className="highlight">Vanessa</span>, uma desenvolvedora apaixonada por tecnologia e por construir soluções que impactam positivamente as pessoas.
      </motion.p>

      <div className="about-cards-container">
        {/* Card 1: Foco em Back-End */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <FaServer className="icon" />
          <h4>Foco em Back-End</h4>
          <p>
            Minha especialidade é o ecossistema Node.js, onde construo e mantenho APIs e microsserviços. Tenho experiência com Serverless (AWS Lambda) e Docker para otimizar ambientes.
          </p>
        </motion.div>

        {/* Card 2: Jornada Full-Stack */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <FaLaptopCode className="icon" />
          <h4>Jornada Full-Stack</h4>
          <p>
            Acredito na versatilidade. Por isso, estou sempre me aprofundando em React e TypeScript para construir pontes sólidas entre o front-end e o back-end.
          </p>
        </motion.div>

        {/* Card 3: Formação e Paixão */}
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <FaGraduationCap className="icon" />
          <h4>Formação e Curiosidade</h4>
          <p>
            Técnica em Informática (IFSC) e graduanda em Sistemas de Informação (Unoesc), minha curiosidade me leva a explorar desde o desenvolvimento mobile com Flutter até novas arquiteturas de software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;