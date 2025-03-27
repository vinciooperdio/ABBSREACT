import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.scss';
import logo from '../../assets/images/ABBS_LOGO.jpeg';

const Footer = () => {
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
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__gradient-circle footer__gradient-circle--1"></div>
      <div className="footer__gradient-circle footer__gradient-circle--2"></div>
      
      <div className="footer__container">
        <motion.div 
          className="footer__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="footer__brand">
            <img src={logo} alt="ABBS Logo" className="footer__logo" />
            <p className="footer__tagline">
              Rivoluziona il tuo modo di gestire l'identità digitale. Un account, infiniti servizi.
            </p>
          </motion.div>
          
          <div className="footer__links-container">
            <motion.div variants={itemVariants} className="footer__links">
              <h3>Navigazione</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/business">Business</a></li>
                <li><a href="#what-is">Cos'è ABBS</a></li>
                <li><a href="#timeline">Roadmap</a></li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="footer__links">
              <h3>Sezioni</h3>
              <ul>
                <li><a href="#mission">Missione</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#waiting-list">Lista d'Attesa</a></li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="footer__links">
              <h3>Legale</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Termini di Servizio</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="footer__contact">
            <h3>Contattaci</h3>
            <p>Hai domande? Vuoi saperne di più?</p>
            <a href="mailto:info@abbs.one" className="footer__contact-button">
              <FiMail />
              <span>Scrivici</span>
            </a>
            
            <div className="footer__social">
              <a href="https://github.com/abbsone" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://twitter.com/abbsone" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="https://linkedin.com/company/abbsone" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <div className="footer__copyright">
            &copy; {currentYear} ABBS. Tutti i diritti riservati.
          </div>
          
          <div className="footer__made-with">
            Made with <FiHeart className="footer__heart" /> in Italia
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 