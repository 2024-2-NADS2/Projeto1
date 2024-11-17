import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Inova Saúde" />
      </div>
      <div className="buttons">
        <button className="donate-button">Doações</button>
        <button className="login-button">Cadastre-se/Faça Login</button>
      </div>
    </header>
  );
}

export default Header;
