import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import SectionBackground from '../ui/SectionBackground';
import './Team.scss';

// Importo le immagini del team
import vincenzoImage from '../../assets/images/vincenzo.png';
import silviaImage from '../../assets/images/silvia.png';
import lorenzoImage from '../../assets/images/lorenzo.jpeg';

const Team = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  
  const teamMembers = [
    {
      name: 'Vincenzo Elia Schilirò',
      role: 'Founder & CEO',
      bio: 'Imprenditore e project manager con una visione chiara: creare soluzioni digitali che abbiano un impatto concreto sulla vita delle persone.',
      image: vincenzoImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/vinnari/',
        twitter: 'https://twitter.com/vincenzoschiliro'
      }
    },
    {
      name: 'Silvia La Malfa',
      role: 'COO',
      bio: 'Con esperienze in Cattolica nel campo della gestione dell\'innovazione e strategie digitali, Silvia guida le decisioni strategiche del team.',
      image: silviaImage,
      social: {
        linkedin: 'https://linkedin.com/in/silvialamalfa',
        twitter: 'https://twitter.com/silvialamalfa'
      }
    },
    {
      name: 'Lorenzo Vincini',
      role: 'CTO & Lead Developer',
      bio: 'Sviluppatore full-stack con competenze in intelligenza artificiale e cloud computing, Lorenzo ha lavorato su diversi progetti prima di unirsi al team di ABBS.',
      image: lorenzoImage,
      social: {
        linkedin: 'https://linkedin.com/in/lorenzovincini',
        twitter: 'https://twitter.com/lorenzovincini'
      }
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <SectionBackground variant="primary" id="team" className="team">
      <div className="container">
        <motion.div 
          className="team__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Il Nostro <span className="text-gradient">Team</span></h2>
          <p className="team__subtitle">
            Le persone di talento dietro ABBS che lavorano per trasformare la tua esperienza digitale
          </p>
        </motion.div>
        
        <motion.div 
          className="team__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className={`team__card ${activeCard === index ? 'team__card--active' : ''}`}
              variants={cardVariants}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="team__card-inner">
                <div className="team__image-container">
                  <img src={member.image} alt={member.name} className="team__image" />
                  <div className="team__image-overlay"></div>
                </div>
                
                <div className="team__content">
                  <h3 className="team__name">{member.name}</h3>
                  <p className="team__role">{member.role}</p>
                  <div className="team__bio-container">
                    <p className="team__bio">{member.bio}</p>
                  </div>
                
                  <div className="team__social">
                    <a href={member.social.linkedin} className="team__social-link" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                    <a href={member.social.twitter} className="team__social-link" aria-label="Twitter">
                      <FiTwitter />
                    </a>
                  </div>
                </div>
                
                <div className="team__card-bg"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="team__join"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h3>Vuoi unirti al nostro team?</h3>
          <p>Siamo sempre alla ricerca di persone di talento per aiutarci a rivoluzionare la gestione degli abbonamenti.</p>
          <a href="mailto:careers@abbs.com" className="team__join-button">
            Visualizza Posizioni Aperte
          </a>
        </motion.div>
      </div>
    </SectionBackground>
  );
};

export default Team; 