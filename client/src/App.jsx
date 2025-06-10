import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authContext';
import Navbar from './components/navigation/Navbar';
import Login from './components/login/Login';
import Home from './components/home/home';
import PolitiqueConfidentialite from './components/home/PolitiqueConfidentialite';
import PrivateRoute from './components/privateRoute';
import ContactPage from './components/home/ContactPage';
import Footer from './components/navigation/Footer';
import RealisationsPage from './components/home/RealisationsPage';
import Platrerie from './components/home/Platrerie';
import Peinture from './components/home/Peinture';
import Carrelage from './components/home/Carrelage';
import Menuiserie from './components/home/Menuiserie';
import Cuisine from './components/home/Cuisine';
import Revetement from './components/home/Revetement';
import Terrasse from './components/home/Terrasse';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/services/platrerie" element={<Platrerie />} />
            <Route path="/services/peinture" element={<Peinture />} />
            <Route path="/services/carrelage" element={<Carrelage />} />
            <Route path="/services/menuiserie" element={<Menuiserie />} />
            <Route path="/services/cuisine" element={<Cuisine />} />
            <Route path="/services/revetement" element={<Revetement />} />
            <Route path="/services/terrasse" element={<Terrasse />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;