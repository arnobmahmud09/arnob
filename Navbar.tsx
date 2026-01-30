
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Briefcase, GraduationCap, Command } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  onNavigate?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleDarkMode, 
  activeSection, 
  isRecruiterMode, 
  toggleRecruiterMode,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-2xl border-b border-slate-200/50 dark:border-slate-800/50' 
          : 'py-5 md:py-8 bg-transparent'
      }`}
    >
      <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 origin-left" style={{ scaleX }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-xl md:text-2xl font-black tracking-tighter group flex items-center pointer-events-auto"
          >
            ARNOB<span className="text-blue-500 group-hover:animate-ping inline-block">.</span>
          </motion.a>

          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
            className="hidden lg:flex items-center space-x-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 hover:text-blue-500 transition-colors pointer-events-auto"
          >
            <Command size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Type ⌘K</span>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-2xl p-1 border border-slate-200 dark:border-slate-800 mr-4">
            <button 
              onClick={() => isRecruiterMode && toggleRecruiterMode()}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest pointer-events-auto ${
                !isRecruiterMode ? 'bg-white dark:bg-slate-800 text-blue-500 shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap size={14} />
              <span>Student</span>
            </button>
            <button 
              onClick={() => !isRecruiterMode && toggleRecruiterMode()}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest pointer-events-auto ${
                isRecruiterMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase size={14} />
              <span>Recruiter</span>
            </button>
          </div>

          <div className="flex items-center space-x-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-bold transition-all uppercase tracking-[0.2em] relative group pointer-events-auto ${
                    isActive ? 'text-blue-500' : 'text-slate-500 dark:text-slate-400 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </div>

          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 pointer-events-auto"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleDarkMode} className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl pointer-events-auto">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2.5 bg-blue-600 text-white rounded-xl pointer-events-auto shadow-lg shadow-blue-500/30"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 overflow-hidden backdrop-blur-3xl shadow-2xl z-[1001]"
          >
            <div className="flex flex-col p-6 space-y-6">
              {/* Mode Toggle for Mobile */}
              <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => { if(isRecruiterMode) toggleRecruiterMode(); }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all font-black text-xs uppercase ${!isRecruiterMode ? 'bg-white dark:bg-slate-800 text-blue-500 shadow-sm' : 'text-slate-400'}`}
                >
                  <GraduationCap size={16} />
                  <span>Student</span>
                </button>
                <button 
                  onClick={() => { if(!isRecruiterMode) toggleRecruiterMode(); }}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all font-black text-xs uppercase ${isRecruiterMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400'}`}
                >
                  <Briefcase size={16} />
                  <span>Recruiter</span>
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xl font-black uppercase tracking-tighter py-3 px-4 rounded-xl transition-colors pointer-events-auto ${
                      activeSection === link.href.slice(1) ? 'bg-blue-500/10 text-blue-500' : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
