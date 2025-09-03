import React from 'react';
import { motion } from 'framer-motion'; // Importando a biblioteca de animação
import './Projects.css';

// Seus dados de projetos (pode manter a mesma lista)
const projectsData = [
  {
    title: "API de Contatos com Integração Climática",
    technologies: ["Node.js", "Hapi.js", "MongoDB", "REST API"],
    description: "API RESTful robusta para gerenciamento de contatos, com funcionalidades como soft delete, filtros de busca e integração com a API HG Brasil Weather.",
    link: "https://github.com/Nessavs/api_contatos_clima"
  },
  {
    title: "GitHub Finder",
    technologies: ["React", "TypeScript", "API REST"],
    description: "Aplicação front-end que permite buscar perfis de usuários no GitHub, utilizando a API oficial para consultar dados em tempo real.",
    link: "https://github.com/Nessavs/github_finder"
  },
  {
    title: "Contador de Passos (Mobile App)",
    technologies: ["Mobile", "UI/UX", "Intercâmbio"],
    description: "Trabalho de graduação sobre um app de passos/calorias, desenvolvido durante um intercâmbio online internacional com a Fundación Universitaria Católica del Norte (Colômbia).",
    link: "https://github.com/Nessavs/contador_pasos"
  },
  {
    title: "Sistema de Biblioteca",
    technologies: ["Full-Stack", "Frontend", "Backend"],
    description: "Sistema completo para gerenciamento de uma biblioteca, integrando a interface do usuário (front-end) com a lógica de servidor e banco de dados (back-end).",
    link: "https://github.com/Nessavs/Biblioteca"
  },
];

// Configurações da animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Cria um efeito cascata na animação dos cards
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Começa invisível e 50px para baixo
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Anima para visível na posição original
};

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Meus Projetos</h2>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animação é ativada quando a seção entra na tela
        viewport={{ once: true, amount: 0.2 }} // Configura para animar apenas uma vez
      >
        {projectsData.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }} // Efeito ao passar o mouse
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Ver Código
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;