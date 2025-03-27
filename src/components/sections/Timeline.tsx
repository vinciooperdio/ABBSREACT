import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaFlag, FaRocket, FaUsers, FaMobileAlt, FaGlobe, FaStar } from 'react-icons/fa';
import '../styles/Timeline.scss';
import SimplifiedNebulaBackground from '../ui/SimplifiedNebulaBackground';

interface TimelineEventProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
}

// Creazione del nostro TimelineEvent personalizzato invece di usare la libreria
const TimelineEvent: React.FC<TimelineEventProps> = ({ title, subtitle, icon, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">{icon}</div>
      <div className="timeline-card">
        <div className="timeline-card-content">
          <h3>{title}</h3>
          {subtitle && <div className="timeline-subtitle">{subtitle}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <section className="timeline-section" id="roadmap">
      <SimplifiedNebulaBackground />
      <div className="container">
        <motion.div 
          className="timeline-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2><span className="text-gradient">Roadmap</span> del Progetto</h2>
          <p>Il nostro percorso per rivoluzionare la gestione degli abbonamenti</p>
        </motion.div>

        <motion.div 
          className="timeline-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="modern-timeline">
            <div className="timeline-container">
              <TimelineEvent 
                title="Q2 2023 - Ricerca e Pianificazione" 
                subtitle="Gettare le basi per ABBS"
                icon={<FaFlag />}
              >
                <ul className="timeline-list">
                  <li>Analisi di mercato delle soluzioni esistenti</li>
                  <li>Identificazione delle principali problematiche degli utenti</li>
                  <li>Definizione della value proposition</li>
                  <li>Progettazione dell'architettura del sistema</li>
                </ul>
              </TimelineEvent>
              
              <TimelineEvent 
                title="Q3 2023 - Sviluppo MVP" 
                subtitle="Minimum Viable Product"
                icon={<FaRocket />}
              >
                <ul className="timeline-list">
                  <li>Sviluppo del backend per la gestione degli abbonamenti</li>
                  <li>Creazione dell'interfaccia utente basilare</li>
                  <li>Implementazione del sistema di notifiche</li>
                  <li>Test interni con un gruppo ristretto di utenti</li>
                </ul>
              </TimelineEvent>
              
              <TimelineEvent 
                title="Q4 2023 - Beta Testing" 
                subtitle="Migliorare con il feedback"
                icon={<FaUsers />}
              >
                <ul className="timeline-list">
                  <li>Lancio della versione beta a un pubblico selezionato</li>
                  <li>Raccolta e analisi dei feedback degli utenti</li>
                  <li>Ottimizzazione dell'usabilità e correzione bug</li>
                  <li>Potenziamento della sicurezza e protezione dei dati</li>
                </ul>
              </TimelineEvent>
              
              <TimelineEvent 
                title="Q1 2024 - Lancio App Mobile" 
                subtitle="Espansione su piattaforme mobili"
                icon={<FaMobileAlt />}
              >
                <ul className="timeline-list">
                  <li>Sviluppo e rilascio delle app iOS e Android</li>
                  <li>Ottimizzazione per l'uso mobile con notifiche push</li>
                  <li>Sincronizzazione tra piattaforme web e mobile</li>
                  <li>Integrazione con wallet digitali per pagamenti</li>
                </ul>
              </TimelineEvent>
              
              <TimelineEvent 
                title="Q2 2024 - Espansione Internazionale" 
                subtitle="Raggiungere nuovi mercati"
                icon={<FaGlobe />}
              >
                <ul className="timeline-list">
                  <li>Localizzazione dell'app in più lingue</li>
                  <li>Adattamento a regolamenti e valute internazionali</li>
                  <li>Partnership strategiche con fornitori di servizi globali</li>
                  <li>Campagne di marketing internazionali</li>
                </ul>
              </TimelineEvent>
              
              <TimelineEvent 
                title="Q3 2024 e oltre - Evoluzione Continua" 
                subtitle="Innovazione e miglioramento"
                icon={<FaStar />}
              >
                <ul className="timeline-list">
                  <li>Implementazione di analisi predittive con AI</li>
                  <li>Suggerimenti personalizzati per l'ottimizzazione della spesa</li>
                  <li>Integrazione con assistenti vocali</li>
                  <li>Sviluppo di funzionalità basate sul feedback della community</li>
                </ul>
              </TimelineEvent>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection; 