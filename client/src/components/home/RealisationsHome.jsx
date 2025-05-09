import React, { useEffect, useState, useRef } from 'react';
import './realisationsHome.scss';

const RealisationsHome = () => {
  const [realisations, setRealisations] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchRealisations = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/realisations?showOnHome=true');
        const data = await res.json();
        setRealisations(data);
      } catch {
        setRealisations([]);
      }
    };
    fetchRealisations();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!realisations.length) return null;

  // Version mobile : slider horizontal fluide
  if (isMobile) {
    return (
      <section className="realisations-home-section">
        <div className="realisations-home-wrapper">
          <h2 className="realisations-home-title">Nos réalisations</h2>
          <div className="realisations-scroll" ref={scrollRef}>
            {realisations.map((real) => (
              <div key={real._id} className="realisation-slide">
                <div className="slide-img-wrapper">
                  <img src={real.imageUrl} alt={real.titre} className="slide-img" />
                </div>
                <div className="slide-caption">
                  <h3>{real.titre}</h3>
                  {real.description && <p>{real.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Version desktop : grille
  return (
    <section className="realisations-home-section">
      <div className="realisations-home-wrapper">
        <h2 className="realisations-home-title">Nos réalisations</h2>
        <div className="realisations-grid">
          {realisations.map((real) => (
            <div key={real._id} className="grid-item">
              <div className="slide-img-wrapper">
                <img src={real.imageUrl} alt={real.titre} className="grid-img" />
              </div>
              <div className="grid-caption">
                <h3>{real.titre}</h3>
                {real.description && <p>{real.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsHome; 