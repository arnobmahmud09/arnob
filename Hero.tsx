import React, { useRef } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Mail, Download } from 'lucide-react';

interface HeroProps {
  isRecruiterMode: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Hero: React.FC<HeroProps> = ({ isRecruiterMode }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 bg-transparent">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[20rem] md:w-[40rem] h-[20rem] md:h-[40rem] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[60px] md:blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[18rem] md:w-[35rem] h-[18rem] md:h-[35rem] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-[60px] md:blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={isRecruiterMode ? 'recruiter' : 'student'}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 py-1.5 px-4 md:py-2 md:px-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>{isRecruiterMode ? 'Open for Professional Roles' : 'Available for new projects'}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tight">
            {isRecruiterMode ? (
              <>Full-Stack <br /><span className="gradient-text">Developer</span></>
            ) : (
              <>I'm <span className="gradient-text">Arnob</span> <br className="hidden sm:block" /> Mahmud</>
            )}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-xl font-medium text-slate-500 dark:text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {isRecruiterMode 
              ? "Engineering robust software solutions with C++, Python, and modern Web Stacks. Focused on scalable architecture."
              : "Crafting digital experiences as an Aspiring Developer specialized in Web, App, and AI/ML."}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-5 perspective-1000 relative z-20">
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 md:px-10 py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black shadow-2xl shadow-blue-500/40 transition-all flex items-center justify-center group overflow-hidden relative cursor-pointer pointer-events-auto text-sm md:text-base"
            >
              <span className="relative z-10">{isRecruiterMode ? 'CONTACT ME' : 'WORK WITH ME'}</span>
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform relative z-10" size={18} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            
            <motion.a 
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileTap={{ scale: 0.95 }}
              href={isRecruiterMode ? "#about" : "#future-lab"} 
              className="px-8 md:px-10 py-4 md:py-5 glass border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 rounded-2xl font-black transition-all relative group cursor-pointer pointer-events-auto text-sm md:text-base text-center"
            >
              <span style={{ transform: "translateZ(30px)" }} className="inline-block tracking-widest uppercase">
                {isRecruiterMode ? 'View Resume' : 'Explore Lab'}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem]">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 md:-inset-8 border-[1px] border-dashed border-blue-500/20 rounded-full" 
            />
            <div className="w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white dark:border-slate-900 shadow-2xl relative z-10 group">
              <img 
                src="https://picsum.photos/seed/arnob/1200/1200" 
                alt="Arnob Mahmud" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-400 cursor-pointer p-4 z-20"
      >
        {/* Fixed: Removed non-existent md:size prop to resolve TypeScript error */}
        <ChevronDown size={40} strokeWidth={1} />
      </motion.a>
    </section>
  );
};

export default Hero;