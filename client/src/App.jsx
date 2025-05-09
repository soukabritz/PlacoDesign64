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
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  {/* Votre Dashboard ici */}
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;