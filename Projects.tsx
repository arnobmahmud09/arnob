
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Network, Loader2 } from 'lucide-react';

const Projects: React.FC = () => {
  const logEntries = [
    "Compiling next-gen web frameworks...",
    "Optimizing neural network weights...",
    "Refining responsive UI components...",
    "Securing API endpoints...",
    "Building digital experiences..."
  ];

  return (
    <SectionWrapper id="future-lab" className="relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>System Status: Architecting</span>
        </motion.div>
        
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase leading-[0.8]">
          The Future <br />
          <span className="gradient-text">Lab.</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg mt-8">
          I'm currently building something truly game-changing. The lab is operating at 100% capacity to bring you the next generation of digital solutions.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-stretch">
        {/* Main Lab Visualization */}
        <div className="lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h-full glass rounded-[3rem] border border-slate-200 dark:border-slate-800 p-1 md:p-12 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 -z-10" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-8 flex-1">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>Build Progress</span>
                    <span className="text-blue-500">85% Complete</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 dark:bg-slate-900 rounded-full p-1 overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 3, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full relative"
                    >
                      <motion.div 
                        animate={{ x: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-20 bg-white/30 blur-md"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: <Cpu />, label: "Backend Core", color: "text-blue-500" },
                    { icon: <Network />, label: "Edge Mesh", color: "text-purple-500" },
                    { icon: <Database />, label: "Vault Sync", color: "text-amber-500" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center space-y-2"
                    >
                      <div className={`${item.color}`}>{item.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative w-full md:w-64 h-64 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-blue-500/10 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-dotted border-purple-500/20 rounded-full"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <Loader2 className="animate-spin text-blue-500 mb-2" size={48} strokeWidth={1} />
                  <span className="text-3xl font-black tracking-tighter">BREWING</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal / Logs UI */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-full bg-slate-950 rounded-[3rem] p-10 border border-slate-800 flex flex-col shadow-2xl overflow-hidden relative"
          >
             <div className="flex items-center space-x-2 mb-8">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-amber-500" />
               <div className="w-3 h-3 rounded-full bg-emerald-500" />
               <span className="text-[10px] text-slate-600 font-mono ml-4 uppercase tracking-widest">root@arnob-lab:~/future</span>
             </div>

             <div className="space-y-4 font-mono text-sm overflow-hidden flex-grow">
               {logEntries.map((log, idx) => (
                 <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex space-x-3 text-emerald-500/80"
                 >
                   <span className="opacity-40">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                   <span className="text-white">&gt; {log}</span>
                 </motion.div>
               ))}
               <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-4 bg-emerald-500 mt-2"
               />
             </div>

             <div className="mt-10 pt-8 border-t border-slate-900">
               <a 
                href="#contact" 
                className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-500/10 cursor-pointer"
               >
                 Get Early Access
               </a>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Textures */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 blur-[100px] pointer-events-none" />
    </SectionWrapper>
  );
};

export default Projects;
