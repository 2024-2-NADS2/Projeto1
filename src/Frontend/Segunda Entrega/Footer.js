import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="about">
        <h4>Sobre Nós</h4>
        <p>Informações sobre a Inova Saúde.</p>
      </div>
      <div className="quick-links">
        <h4>Links Rápidos</h4>
        <ul>
          <li><a href="#convênios">Convênios</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div className="contact">
        <h4>Contate-nos</h4>
        <p>Email: contato@inovasaude.com.br</p>
        <p>Telefone: (11) 1234-5678</p>
      </div>
    </footer>
  );
}

export default Footer;
