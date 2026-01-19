
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Procedures', path: '/procedures' },
  ];

  const logoUrl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/CbexEfr9R7B7E2oF/optusenergy-logo-tRBYRgNpB4t3a8js.png";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
      isTransparent 
        ? 'bg-transparent py-8' 
        : 'bg-white/95 backdrop-blur-md shadow-xl py-4'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <img 
              src={logoUrl} 
              alt="Optus Energy" 
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-500 ${
                isTransparent ? 'brightness-110 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]' : ''
              }`} 
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] font-bold tracking-[0.3em] uppercase transition-all hover:text-orange-500 relative group ${
                isTransparent ? 'text-white drop-shadow-md' : 'text-slate-900'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-3 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-10 py-4 text-[12px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl ${
              isTransparent 
                ? 'bg-white text-slate-900 hover:bg-orange-600 hover:text-white' 
                : 'bg-slate-950 text-white hover:bg-orange-600'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden focus:outline-none transition-colors ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-700 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-serif italic tracking-wider transition-all transform ${location.pathname === link.path ? 'text-orange-500 scale-110' : 'text-white hover:text-orange-500'}`}
          >
            {link.label}
          </Link>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setIsOpen(false)} 
          className="bg-orange-600 text-white px-16 py-5 text-sm font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl mt-8"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
