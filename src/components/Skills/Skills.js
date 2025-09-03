import React from "react";
// Importando os ícones
import {
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaAws,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiFlutter,
  SiServerless, // <-- Ícone do Serverless Framework adicionado
} from "react-icons/si";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        <div className="skill">
          <FaNodeJs /> Node.js
        </div>
        <div className="skill">
          <FaDatabase /> PostgreSQL / MongoDB
        </div>
        <div className="skill">
          <FaDocker /> Docker
        </div>
        <div className="skill">
          <FaGithub /> Git / GitHub
        </div>
        <div className="skill">
          <FaAws /> AWS
        </div>
        <div className="skill">
          <FaReact /> React
        </div>
        <div className="skill">
          <SiTypescript /> TypeScript
        </div>
        <div className="skill">
          <SiPostman /> API Rest / Postman
        </div>
        <div className="skill">
          <SiFlutter /> Flutter
        </div>
        {/* Nova Habilidade Adicionada */}
        <div className="skill">
          <SiServerless /> Serverless
        </div>
      </div>
    </section>
  );
};

export default Skills;