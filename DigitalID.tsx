import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck, Smartphone, MapPin, Globe, Sparkles, BadgeCheck, Zap } from 'lucide-react';
import html2canvas from 'html2canvas';

interface DigitalIDProps {
  isOpen: boolean;
  onClose: () => void;
}

const DigitalID: React.FC<DigitalIDProps> = ({ isOpen, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotate({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const downloadID = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      backgroundColor: null,
      useCORS: true,
      logging: false,
    });
    const link = document.createElement('a');
    link.download = 'Arnob_Mahmud_Digital_ID.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" 
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            className="relative w-full max-w-lg flex flex-col items-center"
          >
            <div className="flex justify-between w-full mb-4 md:mb-6 items-center px-2">
              <div className="flex items-center space-x-2 text-blue-500">
                {/* Fixed: Removed non-existent md:size prop to resolve TypeScript error */}
                <ShieldCheck size={20} />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Verified Digital Identity</span>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors cursor-pointer"
              >
                {/* Fixed: Removed non-existent md:size prop to resolve TypeScript error */}
                <X size={20} />
              </button>
            </div>

            {/* The ID Card Container */}
            <div 
              className="perspective-[1000px] w-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                ref={cardRef}
                style={{ 
                  rotateX: rotate.x, 
                  rotateY: rotate.y,
                  transformStyle: 'preserve-3d'
                }}
                className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-2xl md:rounded-[2.5rem] border border-white/20 shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8 group transition-shadow duration-500"
              >
                {/* Holographic Overlays */}
                <div className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 bg-blue-600/10 blur-[60px] md:blur-[100px] rounded-full -mr-24 md:-mr-40 -mt-24 md:-mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 md:w-80 h-48 md:h-80 bg-purple-600/10 blur-[60px] md:blur-[100px] rounded-full -ml-24 md:-ml-40 -mb-24 md:-mb-40 pointer-events-none" />
                
                {/* ID Header */}
                <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-10 relative z-10">
                  <div className="space-y-1">
                    <h1 className="text-lg md:text-2xl font-black tracking-tighter text-white">
                      ARNOB<span className="text-blue-500">.</span>
                    </h1>
                    <div className="flex items-center space-x-1.5 md:space-x-2">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[6px] md:text-[8px] font-black uppercase tracking-widest text-slate-400">PPI-007-X</span>
                    </div>
                  </div>
                  <div className="p-1.5 md:p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg md:rounded-xl">
                    {/* Fixed: Removed non-existent md:size prop to resolve TypeScript error */}
                    <BadgeCheck size={20} className="text-blue-500" />
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex gap-4 md:gap-8 relative z-10 items-center">
                  <div className="relative group/avatar">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl relative z-10">
                      <img src="https://picsum.photos/seed/arnob/400/400" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1 bg-blue-600 rounded-md text-white shadow-lg border border-white/20 z-20">
                      {/* Fixed: Removed non-existent md:size prop to resolve TypeScript error */}
                      <Zap size={12} fill="currentColor" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2 md:space-y-4">
                    <div>
                      <h2 className="text-base md:text-2xl font-black text-white leading-tight">Arnob Mahmud</h2>
                      <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-500 mt-0.5">Full-Stack Architect</p>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Smartphone size={10} className="text-blue-500/50" />
                        <span className="text-[8px] md:text-[10px] font-bold">+880 1319 156 975</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <MapPin size={10} className="text-blue-500/50" />
                        <span className="text-[8px] md:text-[10px] font-bold">Pabna, BD</span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="hidden xs:flex flex-col items-center">
                    <div className="p-1.5 md:p-2.5 bg-white rounded-lg md:rounded-2xl shadow-xl">
                      <div className="w-12 h-12 md:w-20 md:h-20">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/8801319156975" 
                          alt="QR" 
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Micro-text */}
                <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center items-center space-x-2 md:space-x-4 px-4 md:px-8 opacity-40">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
                  <span className="text-[5px] md:text-[7px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-slate-500 whitespace-nowrap text-center">Valid until 2029 • PPI Authorized</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12 w-full max-w-sm px-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadID}
                className="flex-1 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-xl shadow-blue-500/40 cursor-pointer"
              >
                <Download size={16} />
                <span>Save Image</span>
              </motion.button>
              <button 
                onClick={onClose}
                className="px-6 md:px-8 py-3 md:py-4 glass border border-white/10 text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest cursor-pointer hover:bg-white/5 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DigitalID;