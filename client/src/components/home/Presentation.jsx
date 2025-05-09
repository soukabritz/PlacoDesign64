import React from 'react';
import heroImg from '../../assets/hero-image.jpg'; // Mets ici le bon chemin vers ton image

const Presentation = () => (
  <section className="home-presentation">
    <div className="presentation-text">
      <h2>Spécialistes de la rénovation et de l'aménagement intérieur</h2>
      <p>
        Engagez Placo Design 64 pour tous vos projets de <b>rénovation</b> et d'aménagement. Nous intervenons sur l'ensemble du <b>Pays Basque</b> pour&nbsp;:
      </p>
      <ul>
        <li>La création et la rénovation de <b>cuisines sur mesure</b></li>
        <li>L'aménagement de <b>salles de bains</b></li>
        <li>La pose de <b>cloisons</b>, de <b>revêtements de sols</b> et de <b>murs</b></li>
        <li>Les travaux de <b>plâtrerie</b>, <b>peinture</b>, <b>menuiserie</b> et <b>carrelage</b></li>
      </ul>
      <p>
        Notre équipe vous accompagne de la <b>conception</b> à la <b>réalisation</b>, en vous proposant des <b>solutions personnalisées</b> et adaptées à vos besoins.
      </p>
      <br />
      <p>
        <b>Que vous souhaitiez optimiser l'espace, moderniser votre intérieur ou améliorer votre confort, chaque détail est pensé pour simplifier votre quotidien.</b>
      </p>
      <br />
      <p>
        Notre <b>savoir-faire</b> et notre <b>exigence de qualité</b> nous permettent de transformer vos espaces en lieux de vie <b>harmonieux</b>, <b>fonctionnels</b> et <b>esthétiques</b>.
      </p>
      <a href="/contact" className="contact-btn" style={{ textDecoration: 'none' }}>
        <i className="fas fa-envelope"></i> Contactez-nous
      </a>
    </div>
    <div className="presentation-image">
      <img src={heroImg} alt="Réalisation Placo Design 64" />
    </div>
  </section>
);

export default Presentation; 