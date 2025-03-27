import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Traccia lo scroll della pagina per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Impedisce lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Toggle del menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Chiude il menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Links del menu per la home page
  const homeLinks = [
    { text: 'Home', to: '/' },
    { text: 'Caratteristiche', to: '/#features' },
    { text: 'Timeline', to: '/#timeline' },
    { text: 'Lista d\'attesa', to: '/#waiting-list' },
    { text: 'Contatti', to: '/#contact' },
    { text: 'Business', to: '/business' }
  ];

  // Links del menu per la pagina business
  const businessLinks = [
    { text: 'Home', to: '/' },
    { text: 'Come Funziona', to: '/business#how-it-works' },
    { text: 'Vantaggi', to: '/business#benefits' },
    { text: 'Confronto', to: '/business#comparison' },
    { text: 'Prova Gratuita', to: '/business#cta' }
  ];

  // Scegli i link in base alla pagina corrente
  const menuLinks = isHomePage ? homeLinks : businessLinks;

  // Varianti per le animazioni
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span>ABBS</span>
        </Link>

        <button 
          className="navbar__toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Overlay con sfondo sfocato */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Menu navigazione */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="navbar__menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="navbar__menu-list">
                {menuLinks.map((link, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="navbar__menu-item"
                  >
                    <Link 
                      to={link.to} 
                      className="navbar__menu-link"
                      onClick={closeMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar; 