import React from 'react';
import './home.scss';
import HeroSection from './HeroSection';
import Presentation from './Presentation';
import RealisationsHome from './RealisationsHome';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <section className="home-title-block">
        <h1>Entreprise de rénovation et aménagement intérieur au Pays Basque</h1>
        <p className="home-subtitle">
          Placo Design 64 met son expertise à votre service pour transformer et moderniser votre intérieur. Profitez d'un accompagnement sur-mesure pour des travaux de qualité, réalisés dans le respect de vos attentes.
        </p>
      </section>
      <Presentation />
      <RealisationsHome />
    </div>
  );
};

export default Home;