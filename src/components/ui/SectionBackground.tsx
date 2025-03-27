import React from 'react';
import { motion } from 'framer-motion';
import './SectionBackground.scss';
import SimplifiedNebulaBackground from './SimplifiedNebulaBackground';

interface SectionBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ 
  variant = 'primary',
  children, 
  className = '',
  id
}) => {
  // Animazione per l'entrata della sezione
  const sectionVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animazione per il contenuto
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className={`section-background section-background--${variant} ${className}`} 
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Utilizzare il nuovo SimplifiedNebulaBackground */}
      <SimplifiedNebulaBackground />
      
      {/* Contenuto della sezione */}
      <motion.div 
        className="section-background__content"
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default SectionBackground; 