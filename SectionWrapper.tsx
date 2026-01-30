
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        y: 60, 
        scale: 0.95, 
        filter: "blur(10px)" 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        filter: "blur(0px)" 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // High-end exponential ease-out
      }}
      className={`py-24 px-6 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
