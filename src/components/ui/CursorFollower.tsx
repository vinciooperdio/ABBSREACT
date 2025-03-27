import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CursorFollower.scss';

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Manage mouse events
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Handle hover on interactive elements
    const handleElementMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      }
    };
    
    const handleElementMouseLeave = () => {
      setIsHovering(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementMouseEnter);
    document.addEventListener('mouseout', handleElementMouseLeave);
    
    // Hide when cursor leaves the window
    const handleWindowMouseLeave = () => setIsVisible(false);
    const handleWindowMouseEnter = () => setIsVisible(true);
    
    document.documentElement.addEventListener('mouseleave', handleWindowMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleWindowMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementMouseEnter);
      document.removeEventListener('mouseout', handleElementMouseLeave);
      document.documentElement.removeEventListener('mouseleave', handleWindowMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleWindowMouseEnter);
    };
  }, [isMobile, isVisible, isHovering]);

  if (isMobile) return null;

  return (
    <div 
      className={`cursor-follower ${isVisible ? 'visible' : ''}`}
      ref={cursorRef}
    >
      <motion.div 
        className={`cursor-dot ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20,
          duration: 0.1
        }}
      />
      
      <motion.div 
        className={`cursor-ring ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicking ? 1.2 : isHovering ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          mass: 0.8,
          stiffness: 150,
          damping: 15,
          duration: 0.3
        }}
      />
    </div>
  );
};

export default CursorFollower; 