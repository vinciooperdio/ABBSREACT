import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import Button from '../ui/Button';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const links = [
    { name: 'Mission', href: '#mission' },
    { name: 'What is ABBS', href: '#what' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__container">
          <a href="/" className="navbar__logo">
            <span className="logo-text">ABBS</span>
            <span className="logo-dot">.</span>
          </a>

          <div className="navbar__desktop-menu">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="navbar__link"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <Button 
              variant="outline" 
              size="sm" 
              href="#waiting-list"
            >
              Iscriviti Ora
            </Button>
            
            <button 
              className="navbar__menu-button" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`blur-overlay ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu__content">
              <div className="mobile-menu__links">
                {links.map((link) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className="mobile-menu__link"
                    variants={itemVariants}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="mobile-menu__cta"
                variants={itemVariants}
              >
                <Button 
                  variant="primary" 
                  fullWidth 
                  href="#waiting-list"
                  onClick={toggleMenu}
                >
                  Iscriviti Ora
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 