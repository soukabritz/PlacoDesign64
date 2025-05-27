import React from 'react';
import './heroSection.scss';
import heroBg from '../../assets/home-bg2.jpg';
import ServicesCarousel from './ServicesCarousel';

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-subtitle">À VOTRE SERVICE SUR TOUT LE PAYS BASQUE</span>
          <h1>Créons l'intérieur parfait pour votre confort</h1>
          <p className="hero-description">Nous nous chargeons de tous les projets de rénovation.</p>
          <div className="hero-buttons">
            <button className="contact-btn">
              <i className="fas fa-envelope"></i> Contactez-nous
            </button>
            <button className="phone-btn">
              <i className="fas fa-phone"></i> 06 65 05 29 99
            </button>
          </div>
        </div>
        <ServicesCarousel />
      </div>
    </div> 
  );
};

export default HeroSection; 