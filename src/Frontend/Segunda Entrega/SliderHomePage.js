import React from "react";
import "./CampaignSlider.css";

function CampaignSlider() {
  return (
    <section className="campaign-slider">
      <h2>Tenha acesso a informações importante sobre as campanhas mensais de saúde</h2>
      <div className="slider">
        <p>
          Entre os jovens de 15 a 29 anos, o suicídio foi a quarta causa de morte depois de acidentes no trânsito, tuberculose e violência interpessoal.
        </p>
        <p className="source">Fonte: <a href="https://www.saude.ms.gov.br/">saude.ms.gov.br</a></p>
      </div>
    </section>
  );
}

export default CampaignSlider;
