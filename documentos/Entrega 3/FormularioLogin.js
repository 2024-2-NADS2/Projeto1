import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", formData);
    
    alert(`Bem-vindo, ${formData.email}`);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h2>Bem-Vindo de Volta!</h2>
        <p>Já tem uma conta? Conecte-se aqui</p>
        <button className="login-button">Login</button>
      </div>
      <div className="right-panel">
        <h2>Crie Sua Conta</h2>
        <p>Entre agora com seu email e senha</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
