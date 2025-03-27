import React, { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { FaExchangeAlt, FaBomb, FaCheckCircle, FaCreditCard, FaClock, FaPercent, FaMoneyBillWave, FaCalendarAlt, FaBullseye, FaBell, FaFileAlt, FaSearch, FaPlus, FaDumbbell, FaSwimmer, FaFilm, FaMapMarkerAlt, FaStar, FaArrowRight } from 'react-icons/fa';
import { BsSpotify } from 'react-icons/bs';
import { SiNetflix, SiAmazon, SiApple, SiMicrosoftoffice } from 'react-icons/si';
import { IoFitness, IoWater } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';
import { MdTheaters } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import InteractiveMap from '../ui/InteractiveMap';
import './Mission.scss';
import SimplifiedNebulaBackground from '../ui/SimplifiedNebulaBackground';

interface PhysicalService {
  id: string;
  name: string;
  type: 'gym' | 'pool' | 'theater';
  distance: string;
  rating: number;
  price: string;
  position: [number, number]; // [latitude, longitude]
}

const Mission: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleMarkerClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const subscriptionServices = [
    { id: 'netflix', name: 'Netflix', icon: <SiNetflix className="subscription-icon netflix" />, cost: '€14,99/mese', date: '15' },
    { id: 'spotify', name: 'Spotify Premium', icon: <BsSpotify className="subscription-icon spotify" />, cost: '€9,99/mese', date: '22' },
    { id: 'amazon', name: 'Amazon Prime', icon: <SiAmazon className="subscription-icon amazon" />, cost: '€7,99/mese', date: '3' },
    { id: 'icloud', name: 'iCloud Storage', icon: <SiApple className="subscription-icon icloud" />, cost: '€2,99/mese', date: '28' },
    { id: 'fitness', name: 'Fitness App', icon: <IoFitness className="subscription-icon fitness" />, cost: '€19,99/mese', date: '10' },
    { id: 'office', name: 'Microsoft 365', icon: <SiMicrosoftoffice className="subscription-icon office" />, cost: '€6,99/mese', date: '7' },
  ];

  const physicalServices: PhysicalService[] = [
    { 
      id: 'gym1', 
      name: 'Fitness Club', 
      type: 'gym', 
      distance: '1,2 km', 
      rating: 4.5, 
      price: '€45/mese',
      position: [41.9028, 12.4964] // Roma
    },
    { 
      id: 'gym2', 
      name: 'Power Fitness', 
      type: 'gym', 
      distance: '3,5 km', 
      rating: 4.8, 
      price: '€60/mese',
      position: [41.907, 12.501] // Poco a est
    },
    { 
      id: 'pool1', 
      name: 'Centro Acquatico', 
      type: 'pool', 
      distance: '2,8 km', 
      rating: 4.2, 
      price: '€7/ingresso',
      position: [41.914, 12.491] // Poco a nord
    },
    { 
      id: 'theater1', 
      name: 'Cinema Centrale', 
      type: 'theater', 
      distance: '1,5 km', 
      rating: 4.7, 
      price: '€12/biglietto',
      position: [41.898, 12.482] // Poco a sud-ovest
    },
  ];

  const abbsFeatures = [
    { 
      icon: <FaBullseye />, 
      title: 'Tracciamento Completo', 
      description: 'Tenere traccia di ogni abbonamento attivo, da Netflix alla palestra sotto casa.' 
    },
    { 
      icon: <FaBell />, 
      title: 'Notifiche Intelligenti', 
      description: 'Ricevere notifiche utili per evitare rinnovi indesiderati.' 
    },
    { 
      icon: <FaSearch />, 
      title: 'Confronto Prezzi', 
      description: 'Confrontare prezzi e scegliere le offerte migliori.' 
    },
    { 
      icon: <FaFileAlt />, 
      title: 'Gestione Documenti', 
      description: 'Gestire documenti, certificati medici e bonus con pochi click.' 
    },
  ];

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const staggerItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="mission">
      <SimplifiedNebulaBackground />
      <div className="container">
        <motion.div 
          className="mission__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2>La Nostra <span className="text-gradient">Missione</span></h2>
          <p className="mission__subtitle">
            Stiamo trasformando il modo in cui gestisci i tuoi abbonamenti e i servizi nelle vicinanze,
            portando ordine nel caos e restituendoti il controllo sulle tue spese digitali e fisiche.
          </p>
        </motion.div>

        <div className="mission__transformation">
          <motion.div 
            className="mission__before"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="mission__phase-title">
              <FaBomb />
              <h3>Prima di ABBS</h3>
            </div>
            
            <div className="mission__chaos-container">
              <motion.div
                variants={staggerItems}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="mission__chaos-subscriptions"
              >
                {subscriptionServices.map((service, index) => (
                  <motion.div 
                    className="mission__chaos-subscription"
                    key={service.id}
                    variants={itemFade}
                    style={{
                      transform: `rotate(${(index % 5 - 2) * 3}deg)`,
                      zIndex: 6 - index,
                    }}
                  >
                    {service.icon}
                    <div className="subscription-details">
                      <span className="subscription-name">{service.name}</span>
                      <span className="subscription-cost">{service.cost}</span>
                      <div className="subscription-date">
                        <span className="date-indicator">Scadenza:</span>
                        <span className="date-value">{service.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              
              
            </div>
          </motion.div>

          <motion.div 
            className="mission__after"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="mission__phase-title">
              <FaCheckCircle />
              <h3>Con ABBS</h3>
            </div>
            
            <div className="mission__organized-container">
              <div className="mission__phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="app-header">
                      <div className="app-tabs-header">
                        <div className="app-tab-button active">Digitali</div>
                        <div className="app-tab-button">Fisici</div>
                      </div>
                      <div className="app-info">
                        <span className="app-logo">ABBS</span>
                        <span className="app-tagline">Tutti i tuoi abbonamenti</span>
                      </div>
                    </div>
                    <div className="app-content">
                      {subscriptionServices.slice(0, 4).map((service, index) => (
                        <div className="app-subscription-item" key={service.id}>
                          {service.icon}
                          <div className="item-details">
                            <span className="item-name">{service.name}</span>
                            <span className="item-cost">{service.cost}</span>
                          </div>
                          <div className="item-date">
                            <span>{service.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="app-tabs">
                      <div className="app-tab">
                        <FaBullseye />
                        <span>Home</span>
                      </div>
                      <div className="app-tab">
                        <FaSearch />
                        <span>Esplora</span>
                      </div>
                      <div className="app-tab">
                        <FaBell />
                        <span>Notifiche</span>
                      </div>
                      <div className="app-tab">
                        <FaFileAlt />
                        <span>Documenti</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mission__benefits-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="mission__section-title">
            <h3>Vantaggi di <span className="text-gradient">ABBS</span></h3>
          </div>
          
          <div className="mission__benefits-grid">
            {abbsFeatures.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="mission__benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="benefit-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.section 
          className="mission__map-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="mission__map-header">
            <h3>
              Scopri Servizi <span className="text-gradient">Vicino a Te</span>
            </h3>
            <p>Trova palestre, piscine e sale cinematografiche nella tua zona.</p>
          </div>
          
          <div className="mission__map-container">
            <div className="mission__interactive-map" style={{ 
              position: 'relative', 
              zIndex: 10, 
              display: 'block',
              visibility: 'visible',
              overflow: 'visible',
              minHeight: '450px'
            }}>
              <InteractiveMap 
                userPosition={[41.9028, 12.4964]} 
                services={physicalServices}
                onMarkerClick={handleMarkerClick}
              />
            </div>
            
            <div className="mission__nearby-services">
              <h4>Servizi Fisici Vicini</h4>
              <div className="services-list">
                {physicalServices.map((service) => (
                  <div 
                    key={service.id}
                    className={`service-card ${selectedService === service.id ? 'service-card--active' : ''}`}
                    onClick={() => handleMarkerClick(service.id)}
                  >
                    <div className="service-icon">
                      {service.type === 'gym' && <FaDumbbell />}
                      {service.type === 'pool' && <FaSwimmer />}
                      {service.type === 'theater' && <FaFilm />}
                    </div>
                    <div className="service-details">
                      <h5>{service.name}</h5>
                      <div className="service-meta">
                        <span className="service-distance">
                          <FaMapMarkerAlt />
                          {service.distance}
                        </span>
                        <span className="service-rating">
                          <FaStar />
                          {service.rating}/5
                        </span>
                      </div>
                      <span className="service-price">{service.price}</span>
                    </div>
                    <button className="service-action">
                      <FaArrowRight />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Mission; 