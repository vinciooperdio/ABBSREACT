import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaSyncAlt, FaChartLine, FaGem, FaMagic } from 'react-icons/fa';
import SectionBackground from '../ui/SectionBackground';
import './WhatIs.scss';

const WhatIs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <FaRocket />,
      title: "Centralizzazione Intelligente",
      description: "Unifica tutti i tuoi abbonamenti in un'unica dashboard interattiva. Mai più abbonamenti dimenticati o pagamenti inaspettati."
    },
    {
      icon: <FaShieldAlt />,
      title: "Controllo Totale",
      description: "Monitora scadenze, costi e utilizzo. Ricevi notifiche intelligenti prima dei rinnovi e previeni addebiti indesiderati."
    },
    {
      icon: <FaSyncAlt />,
      title: "Ottimizzazione Automatica",
      description: "La nostra AI analizza le tue abitudini e suggerisce piani più adatti. Risparmia fino al 30% sui tuoi abbonamenti mensili."
    },
    {
      icon: <FaChartLine />,
      title: "Analisi Dettagliate",
      description: "Visualizza grafici e statistiche sul tuo utilizzo per decisioni informate su quali abbonamenti mantenere o cancellare."
    },
    {
      icon: <FaGem />,
      title: "Offerte Esclusive",
      description: "Accedi a promozioni e sconti riservati agli utenti ABBS, ottimizzando ulteriormente la tua spesa mensile."
    },
    {
      icon: <FaMagic />,
      title: "Esperienza Senza Sforzo",
      description: "Interfaccia intuitiva che semplifica la gestione anche di decine di abbonamenti con pochi click."
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const statsVariants = {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <SectionBackground variant="primary" id="what-is" className="what-is">
      <div ref={ref}>
        {/* Header */}
        <div className="what-is__header">
          <span className="what-is__badge">Piattaforma Innovativa</span>
          <h2 className="what-is__title">Cos'è ABBS?</h2>
          <p className="what-is__subtitle">
            La prima piattaforma all-in-one che rivoluziona la gestione degli abbonamenti digitali e fisici,
            riportando ordine nelle tue finanze e tempo nella tua vita.
          </p>
        </div>

        {/* Highlight Stats */}
        <motion.div
          className="what-is__stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="stat-card" variants={statsVariants}>
            <div className="stat-value">€348</div>
            <div className="stat-label">Risparmio medio annuale</div>
          </motion.div>
          <motion.div className="stat-card" variants={statsVariants}>
            <div className="stat-value">15+</div>
            <div className="stat-label">Servizi integrati</div>
          </motion.div>
          <motion.div className="stat-card" variants={statsVariants}>
            <div className="stat-value">98%</div>
            <div className="stat-label">Soddisfazione utenti</div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="what-is__features"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div 
          className="what-is__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="cta-content">
            <h3>Inizia a riprendere il controllo oggi</h3>
            <p>Prova ABBS gratuitamente e scopri quanto puoi risparmiare</p>
          </div>
          <a href="#waiting-list" className="cta-button">Iscriviti Ora</a>
        </motion.div>
      </div>
    </SectionBackground>
  );
};

export default WhatIs; 