import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: "Desenvolvedora Back-End Node.js",
    company: "Amo - Soluções em Tecnologia",
    duration: "Abr 2023 - Atualmente",
    description: [
      "Desenvolvimento e manutenção de APIs e Microserviços com Node.js para a plataforma de delivery.",
      "Implementação de funções serverless com AWS Lambda e Serverless Framework (SLS).",
      "Utilização de Docker para criação de ambientes de desenvolvimento consistentes.",
      "Versionamento de código com Git (Bitbucket), incluindo Pull Requests e Code Reviews."
    ]
  },
  {
    role: "Analista de Suporte",
    company: "Zyoncore Sistemas",
    duration: "Jul 2022 - Abr 2023",
    description: [
      "Atendimento ao cliente via telefone e chat online.",
      "Testes de qualidade e validação de funcionalidades em sistemas web."
    ]
  },
  {
    role: "Estagiária de Tecnologia da Informação",
    company: "Secretaria Municipal de Saúde",
    duration: "Out 2019 - Jul 2021",
    description: [
      "Montagem e manutenção de computadores e infraestrutura de redes.",
      "Atendimento e suporte técnico presencial e remoto aos servidores."
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experiências</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <span className="company">{exp.company}</span>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;