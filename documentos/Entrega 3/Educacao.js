import React from "react";
import "./EducacaoPage.css";

const EducacaoPage = () => {
  return (
    <div className="educacao-page">
      <header className="header">
        <h1>Setembro Amarelo</h1>
      </header>
      <main>
        <section className="content">
          <h2>Mitos e Verdades sobre o Suicídio</h2>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Imagem de conscientização sobre o suicídio"
            className="banner-image"
          />

          <div className="faq">
            <div className="question-answer">
              <strong>1 - Quando a pessoa tem um pensamento suicida poderá voltar ter pelo resto da vida?</strong>
              <p>
                Mito. O pensamento suicida pode ser devidamente tratado ajudando
                a pessoa a viver sem esse peso.
              </p>
            </div>
            <div className="question-answer">
              <strong>2 - Quando a pessoa fala sobre suicídio é por chamar atenção?</strong>
              <p>
                Mito. Geralmente as pessoas com ideias suicidas estão sinalizando
                que estão em risco de cometer o ato.
              </p>
            </div>
            <div className="question-answer">
              <strong>
                3 - Se uma pessoa passou por uma crise e depois ficou mais calma
                significa que o risco de suicídio já passou?
              </strong>
              <p>
                Mito. Uma fase mais calma pode indicar que a pessoa já decidiu
                cometer suicídio.
              </p>
            </div>
            <div className="question-answer">
              <strong>4 - Falar sobre suicídio incentiva ou não?</strong>
              <p>
                Mito. Falar sobre suicídio é importante para a compreensão e
                rompimento de normas erradas sobre o tema, além de ser uma
                oportunidade de oferecer ajuda às pessoas em risco.
              </p>
            </div>
          </div>
        </section>

        <section className="additional-info">
          <h3>Fatores de risco e de proteção: como identificar o paciente suicida.</h3>
          <p>
            Há sinais principais que indicam que o paciente pode estar em risco
            de suicídio. Perda, o desespero e transtornos psiquiátricos são
            alguns dos fatores que podem ajudar na identificação. É essencial
            estar atento ao comportamento de pessoas próximas.
          </p>

          <h3>
            Características psicopatológicas comuns no estado mental dos
            suicidas
          </h3>
          <ul>
            <li>
              <strong>1. Ambivalência:</strong> Desejam viver e morrer ao mesmo
              tempo.
            </li>
            <li>
              <strong>2. Impulsividade:</strong> Comportamentos rápidos e
              frequentemente relacionados a episódios de crises.
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>Sobre Nós | Políticas de Privacidade | Contato</p>
        <p>Todos os direitos reservados - Sua Saúde © 2024</p>
      </footer>
    </div>
  );
};

export default EducacaoPage;
