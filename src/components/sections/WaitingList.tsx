import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight, FiCheck, FiX } from 'react-icons/fi';
import SectionBackground from '../ui/SectionBackground';
import './WaitingList.scss';

const WaitingList = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Per favore, inserisci un indirizzo email valido');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Il form di Netlify gestirà la submission automaticamente
    // Lo stato viene comunque aggiornato per l'UX
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 500);
  };
  
  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] 
      } 
    }
  };
  
  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275] 
      } 
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <SectionBackground variant="secondary" id="waiting-list" className="waiting-list">
      <div className="waiting-list__container">
        <motion.div 
          className="waiting-list__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="waiting-list__title"
          >
            Unisciti alla Rivoluzione <br />
            degli <span className="text-gradient">Abbonamenti</span>
          </motion.h2>
          
          <motion.p
            className="waiting-list__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Entra nella lista d'attesa per accedere in anteprima all'app ABBS e gestire tutti i tuoi abbonamenti a palestre, piscine e centri sportivi in un unico posto.
          </motion.p>

          <div className="waiting-list__benefits">
            <motion.div
              className="waiting-list__badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="waiting-list__badge-icon">
                <FiCheck />
              </div>
              <div className="waiting-list__badge-content">
                <h4 className="waiting-list__badge-title">Early Access</h4>
                <p className="waiting-list__badge-text">
                  Accesso esclusivo anticipato alla beta di ABBS
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="waiting-list__badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="waiting-list__badge-icon waiting-list__badge-icon--premium">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div className="waiting-list__badge-content">
                <h4 className="waiting-list__badge-title">Premium Gratis</h4>
                <p className="waiting-list__badge-text">
                  3 mesi gratuiti del piano premium all'uscita
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="waiting-list__badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="waiting-list__badge-icon waiting-list__badge-icon--vip">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4H3C1.89 4 1 4.89 1 6V18C1 19.11 1.89 20 3 20H21C22.11 20 23 19.11 23 18V6C23 4.89 22.11 4 21 4ZM21 18H3V6H21V18ZM16 12C16 10.34 14.66 9 13 9H9V15H13C14.66 15 16 13.66 16 12ZM13 13H11V11H13C13.55 11 14 11.45 14 12C14 12.55 13.55 13 13 13Z" fill="currentColor" />
                </svg>
              </div>
              <div className="waiting-list__badge-content">
                <h4 className="waiting-list__badge-title">Status VIP</h4>
                <p className="waiting-list__badge-text">
                  Supporto prioritario e accesso alle nuove funzionalità
                </p>
              </div>
            </motion.div>
          </div>

          <div className="waiting-list__form-container">
            {!submitted ? (
              <motion.form 
                onSubmit={handleSubmit} 
                className="waiting-list__form"
                variants={formVariants}
                data-netlify="true"
                name="waiting-list"
                method="POST"
                netlify-honeypot="bot-field"
              >
                {/* Campi richiesti da Netlify Forms */}
                <input type="hidden" name="form-name" value="waiting-list" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                
                <div className="waiting-list__input-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Il tuo indirizzo email"
                    className={`waiting-list__input ${error ? 'waiting-list__input--error' : ''}`}
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="waiting-list__submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="waiting-list__spinner"></span>
                    ) : (
                      <>
                        <span>Iscriviti</span>
                        <FiChevronRight />
                      </>
                    )}
                  </button>
                </div>
                {error && <p className="waiting-list__error">{error}</p>}
                <p className="waiting-list__disclaimer">
                  Iscrivendoti accetti i nostri <a href="#">Termini di Servizio</a> e la <a href="#">Privacy Policy</a>
                </p>
              </motion.form>
            ) : (
              <motion.div 
                className="waiting-list__success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="waiting-list__success-icon">
                  <FiCheck />
                </div>
                <h3>Grazie per esserti iscritto!</h3>
                <p>Ti invieremo aggiornamenti e notizie su ABBS e sarai tra i primi a poterlo provare.</p>
                <button 
                  onClick={handleReset}
                  className="waiting-list__reset"
                >
                  Iscrivere un altro indirizzo
                </button>
              </motion.div>
            )}
          </div>
          
          <motion.div variants={itemVariants} className="waiting-list__counter">
            <div className="waiting-list__counter-value">3482</div>
            <div className="waiting-list__counter-label">persone già in lista</div>
          </motion.div>
        </motion.div>
      </div>
    </SectionBackground>
  );
};

export default WaitingList; 