import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authContext';
import logo from '../../assets/LogoPlacoDesign64.png';
import './navbar.scss';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { isAuth, logout } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        {/* Top Navbar - Logo only */}
        <nav className="top-navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo Placo Design 64" />
          </Link>
        </nav>

        {/* Bottom Navigation Bar */}
        <nav className="bottom-navbar">
          <button className="nav-item">
            <i className="fas fa-bars"></i>
            <span>Menu</span>
          </button>
          <Link to="/contact" className="nav-item">
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </Link>
          {isAuth ? (
            <Link to="/parametres" className="nav-item">
              <i className="fas fa-cog"></i>
              <span>Paramètres</span>
            </Link>
          ) : (
            <Link to="/login" className="nav-item">
              <i className="fas fa-user"></i>
              <span>Connexion</span>
            </Link>
          )}
        </nav>
      </>
    );
  }

  return (
    <nav className="desktop-navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Placo Design 64" />
        </Link>
      </div>
      
      <div className="nav-right">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/realisations" className="nav-link">Réalisations</Link>
        <Link to="/contact" className="nav-link nav-contact">Contact</Link>
        <Link to="/parametres" className="nav-link nav-settings">
          <i className="fas fa-cog"></i>
        </Link>
        {isAuth ? (
          <button onClick={logout} className="nav-link logout-btn">
            Déconnexion
          </button>
        ) : (
          <Link to="/login" className="nav-link">
            <i className="fas fa-user"></i> Connexion
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 