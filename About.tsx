
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { INTEREST_ICONS } from '../constants';
import { FileText, CheckCircle, Sparkles, Contact2, Building2, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  isRecruiterMode?: boolean;
  onOpenID?: () => void;
}

const About: React.FC<AboutProps> = ({ isRecruiterMode = false, onOpenID }) => {
  const handleDownloadCV = () => {
    const content = `
ARNOB MAHMUD
Aspiring Developer | CST Student at Pabna Polytechnic Institute

PERSONAL INFO:
Age: 18 (Born: 19 Nov 2007)
Present Address: Pabna, Bangladesh
Permanent Address: Shibpur hat, Puthia, Rajshahi

CONTACT:
Email: arnobmahmud03@gmail.com
WhatsApp: +8801319156975

SKILLS:
- C++, Python, Web Development (HTML/CSS/JS), AI/ML Foundations
- Problem Solving, Fast Learner, Team Player
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Arnob_Mahmud_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Profile Image Column - Now showing PPI Image */}
        <div className="lg:col-span-5 relative group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass p-4 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbuAKNxdyjnyd6LYlJnqqxag0ahUb6UzbtRVd9VdnItH9A-XEpSKiHjqcwCvhJn7mAmlcDtt7cQXBhXlNRqQp-jLyX7Ud_ZcJWsCsAdTiFWKpU7g6qmPeTX1VbnJy5imBNh2qO=s680-w680-h510-rw" 
                  alt="Pabna Polytechnic Institute" 
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge - PPI Identity Area Refined */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-white/20 backdrop-blur-2xl shadow-2xl overflow-hidden group/badge">
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                   
                   <div className="flex items-center space-x-5 relative z-10">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-xl shadow-blue-500/30">
                          <ShieldCheck size={28} className="animate-pulse" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-amber-500 text-white p-1 rounded-full shadow-lg">
                          <Award size={12} fill="currentColor" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">Identity Verified</p>
                        </div>
                        <p className="text-lg font-black text-white uppercase tracking-tighter mt-0.5">PPI ARCHITECT</p>
                        <div className="flex items-center space-x-2 mt-1.5 opacity-60">
                          <Building2 size={12} className="text-slate-300" />
                          <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.15em]">Campus Authority • 2026</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-7">
          <div className="relative glass p-8 md:p-12 rounded-[3rem] border border-white/5">
            <h3 className="text-4xl font-black mb-8 tracking-tighter">
              {isRecruiterMode ? 'Professional Profile' : "Hello! I'm Arnob."}
            </h3>
            
            {isRecruiterMode ? (
              <div className="space-y-6 mb-8">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  CST diploma student at <span className="text-blue-500 font-bold">Pabna Polytechnic Institute</span> focusing on robust architectures and technical excellence.
                </p>
                <ul className="space-y-3">
                  {['Strong foundational skills in C++ & Python', 'Rapid prototyping of web applications', 'Dedicated to scalable and clean code', 'Available for full-time or project-based roles'].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm font-medium">
                      <CheckCircle className="text-blue-500 shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="space-y-6 mb-8">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hi, I’m Arnob Mahmud, an <span className="text-blue-500 font-bold">18-year-old</span> diploma student in Computer Science & Technology (CST) at <span className="text-blue-500 font-bold">Pabna Polytechnic Institute</span>. 
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I enjoy learning new technologies and improving problem-solving skills through coding. 
                  My journey is fueled by curiosity and a desire to build software that makes a difference.
                </p>
              </div>
            )}
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 glass rounded-xl border-l-4 border-blue-500">
                <span className="font-semibold text-sm">{isRecruiterMode ? 'Current Status' : 'Problem Solver'}</span>
                {isRecruiterMode && <span className="text-[10px] font-black text-blue-500 uppercase">Available</span>}
              </div>
              <div className="flex items-center space-x-4 p-4 glass rounded-xl border-l-4 border-emerald-500">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Age: 18 Years</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Born: 19 Nov 2007</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 relative z-20">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenID}
                className="flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-purple-500/20 cursor-pointer pointer-events-auto"
              >
                <Contact2 size={18} />
                <span>Web Identity</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 cursor-pointer pointer-events-auto"
              >
                <FileText size={18} />
                <span>Download CV</span>
              </motion.button>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-black mb-6 tracking-tight uppercase">
              Core <span className="text-blue-500">Interests</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {INTEREST_ICONS.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center p-4 glass rounded-2xl border border-transparent hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as any, { size: 24 })}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
