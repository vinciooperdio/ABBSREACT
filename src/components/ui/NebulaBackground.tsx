import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './NebulaBackground.scss';

const NebulaBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="nebula-background" ref={containerRef}>
      <div className="planet-system">
        {/* Strati di atmosfera rotanti */}
        <motion.div 
          className="atmosphere-layer"
          animate={{ 
            rotate: 360 
          }}
          initial={{ rotate: 0 }}
          transition={{ 
            duration: 120, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="atmosphere-gradient atmosphere-gradient-1"></div>
        </motion.div>
        
        <motion.div 
          className="atmosphere-layer"
          animate={{ 
            rotate: -360 
          }}
          initial={{ rotate: 0 }}
          transition={{ 
            duration: 180, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="atmosphere-gradient atmosphere-gradient-2"></div>
        </motion.div>
        
        <motion.div 
          className="atmosphere-layer"
          animate={{ 
            rotate: 360
          }}
          initial={{ rotate: 0 }}
          transition={{ 
            duration: 150, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="atmosphere-gradient atmosphere-gradient-3"></div>
        </motion.div>
        
        
        
        {/* Pianeta centrale */}
        <div className="planet"></div>
        
        {/* Orbite satelliti */}
        <div className="orbits">
          {/* Prima orbita e satellite */}
          <div className="orbit orbit-1">
            <motion.div 
              className="satellite-container"
              animate={{ rotate: 360 }}
              initial={{ rotate: 0 }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="satellite satellite-1"></div>
            </motion.div>
          </div>
          
          {/* Seconda orbita e satellite */}
          <div className="orbit orbit-2">
            <motion.div 
              className="satellite-container"
              animate={{ rotate: -360 }}
              initial={{ rotate: 0 }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="satellite satellite-2"></div>
            </motion.div>
          </div>
          
          {/* Terza orbita e satellite */}
          <div className="orbit orbit-3">
            <motion.div 
              className="satellite-container"
              animate={{ rotate: 360 }}
              initial={{ rotate: 0 }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="satellite satellite-3"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Stelle di background */}
        <div className="stars-container">
          {Array(50).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="star" 
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NebulaBackground; 