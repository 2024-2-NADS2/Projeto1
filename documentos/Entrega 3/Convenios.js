import React from "react";
import "./ConveniosPage.css";

const ConveniosPage = () => {
  return (
    <div className="convenios-page">
      <header className="header">
        <h1>Convênios</h1>
      </header>
      <main>
        <section className="cards-section">
          <div className="card">
            <h2>NotreDame Intermédica</h2>
            <p>
              <strong>Tipos de Convênios:</strong>
              <ul>
                <li>Convênio Popular: Atendimento rápido e de qualidade.</li>
                <li>
                  Convênio Premium: Oferece atendimento com cobertura completa.
                </li>
              </ul>
            </p>
            <button className="join-button">Junte-se</button>
          </div>
          <div className="card">
            <h2>Prevent Senior</h2>
            <p>
              <strong>Tipos de Convênios:</strong>
              <ul>
                <li>
                  Saúde Total: Ideal para quem busca cuidado completo.
                </li>
                <li>
                  Saúde Básica: Atendimento com foco na qualidade essencial.
                </li>
              </ul>
            </p>
            <button className="join-button">Junte-se</button>
          </div>
        </section>

        <section className="partners-info">
          <h2>Conheça melhor nossos parceiros!</h2>

          <div className="partner-detail">
            <h3>Tenha um convênio NotreDame Intermédica</h3>
            <div className="details">
              <div>
                <strong>Informações:</strong>
                <p>Rede ampla de hospitais.</p>
              </div>
              <div>
                <strong>Tratamentos:</strong>
                <p>Clínicas especializadas.</p>
              </div>
              <div>
                <strong>Atendimento:</strong>
                <p>Urgência e emergência 24h.</p>
              </div>
              <div>
                <strong>Rede Própria:</strong>
                <p>Hospitais em todo o Brasil.</p>
              </div>
            </div>
          </div>

          <div className="partner-detail">
            <h3>Tenha um convênio Prevent Senior</h3>
            <div className="details">
              <div>
                <strong>Hospitais Credenciados:</strong>
                <p>Centros médicos especializados.</p>
              </div>
              <div>
                <strong>Consultas:</strong>
                <p>Marcação online facilitada.</p>
              </div>
              <div>
                <strong>Planos Flexíveis:</strong>
                <p>Opções para todos os bolsos.</p>
              </div>
              <div>
                <strong>Atendimento Exclusivo:</strong>
                <p>Planos personalizados para idosos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Todos os direitos reservados - Sua Saúde © 2024</p>
      </footer>
    </div>
  );
};

export default ConveniosPage;
