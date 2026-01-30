
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CursorTracker from './components/CursorTracker';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import AIAgent from './components/AIAgent';
import VoiceIntro from './components/VoiceIntro';
import CommandPalette from './components/CommandPalette';
import ResumeGenerator from './components/ResumeGenerator';
import DigitalID from './components/DigitalID';

import About from './components/About';
import Skills from './components/Skills';
import FutureLab from './components/FutureLab';
import LearningJournal from './components/LearningJournal';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isIDCardOpen, setIsIDCardOpen] = useState(false);

  // Handle Theme Application
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Loading Progress Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 20);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const sectionId = id.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isTyping = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      if (!isTyping && !isCommandPaletteOpen && !loading) {
        const key = e.key.toLowerCase();
        if (key === 'h') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        if (key === 's') { e.preventDefault(); scrollToSection('skills'); }
        if (key === 'a') { e.preventDefault(); scrollToSection('about'); }
        if (key === 'l') { e.preventDefault(); scrollToSection('future-lab'); }
        if (key === 'j') { e.preventDefault(); scrollToSection('journal'); }
        if (key === 'e') { e.preventDefault(); scrollToSection('education'); }
        if (key === 'c') { e.preventDefault(); scrollToSection('contact'); }
        if (key === 't') { e.preventDefault(); setIsDarkMode(prev => !prev); }
        if (key === 'm') { e.preventDefault(); setIsRecruiterMode(prev => !prev); }
        if (key === 'i') { e.preventDefault(); setIsIDCardOpen(true); }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, loading, isDarkMode, isRecruiterMode]);

  // Section Observer
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    ['home', 'about', 'skills', 'future-lab', 'journal', 'education', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className={`min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-700 relative ${isRecruiterMode ? 'recruiter-view' : ''}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-[500]"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                ARNOB<span className="text-blue-500">.</span>
              </div>
              <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${progress}%` }} className="h-full bg-blue-500" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <CursorTracker />
            <Navbar 
              isDarkMode={isDarkMode} 
              toggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
              activeSection={activeSection} 
              isRecruiterMode={isRecruiterMode} 
              toggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
              onNavigate={scrollToSection}
            />
            
            <WhatsAppButton />
            <VoiceIntro />
            <AIAgent />
            <BackToTop />
            
            <CommandPalette 
              isOpen={isCommandPaletteOpen}
              onClose={() => setIsCommandPaletteOpen(false)}
              toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
              isDarkMode={isDarkMode}
              isRecruiterMode={isRecruiterMode}
              toggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
              openResume={() => setIsResumeModalOpen(true)}
              openIDCard={() => setIsIDCardOpen(true)}
            />
            
            <ResumeGenerator 
              isOpen={isResumeModalOpen}
              onClose={() => setIsResumeModalOpen(false)}
            />

            <DigitalID 
              isOpen={isIDCardOpen}
              onClose={() => setIsIDCardOpen(false)}
            />

            <Background3D />
            
            <main className="relative z-10 bg-transparent">
              <Hero isRecruiterMode={isRecruiterMode} />
              <About isRecruiterMode={isRecruiterMode} onOpenID={() => setIsIDCardOpen(true)} />
              <Skills isRecruiterMode={isRecruiterMode} />
              <FutureLab isRecruiterMode={isRecruiterMode} />
              <LearningJournal isRecruiterMode={isRecruiterMode} />
              <Education isRecruiterMode={isRecruiterMode} />
              <Contact isRecruiterMode={isRecruiterMode} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
