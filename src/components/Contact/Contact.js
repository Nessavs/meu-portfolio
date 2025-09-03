import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contato
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Fique à vontade para entrar em contato ou ver meu currículo completo para mais detalhes. Estou sempre aberta a novas oportunidades e parcerias.
          </p>
        </motion.div>

        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a
            href="mailto:vanessadasilva2509@gmail.com"
            className="btn"
          >
            Entrar em Contato
          </a>

          <a
            href="https://www.canva.com/design/DAGHOWrxSHg/G0EFk1EDGGLytKNsewTuqA/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver CV Online
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;