import React from "react";
import "./RightPanel.css";

function RightPanel() {
  return (
    <div className="right-panel">
      <h2>Crie Sua Conta</h2>
      <p>Crie sua conta agora com facilidade e praticidade</p>
      <form className="signup-form">
        <input type="text" placeholder="Nome" required />
        <input type="text" placeholder="Telefone/Celular" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" className="signup-button">Crie agora</button>
      </form>
    </div>
  );
}

export default RightPanel;

import React from "react";
import "./LeftPanel.css";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="welcome-text">
        <h2>Bem-Vindo de Volta!</h2>
        <p>Já tem uma conta? Conecte-se aqui</p>
      </div>
      <button className="login-button">Login</button>
    </div>
  );
}

export default LeftPanel;
