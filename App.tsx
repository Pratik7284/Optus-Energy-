
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Procedures from './pages/Procedures';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className={`flex-grow ${!isHome ? 'pt-20 md:pt-24' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/procedures" element={<Procedures />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
