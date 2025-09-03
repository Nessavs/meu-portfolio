import React from 'react';
import { FaArrowUp } from 'react-icons/fa6'; // Ícone de seta para cima
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>Vanessa Da Silva © 2025</p>
          <p className="footer-credit">  ❤ Desenvolvido com React</p>
        </div>
        <div className="footer-back-to-top">
          <a href="#home" aria-label="Voltar ao topo">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;