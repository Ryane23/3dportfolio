"use client";

import { motion } from "framer-motion";
import { PlayCircle, SkipForward, SkipBack, Music2, Gamepad2, Dumbbell } from "lucide-react";

export default function MyWorld() {
  return (
    <section id="world" className="relative min-h-screen py-32 px-6 overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-[#C6FF00]/10 border-dashed rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-[#C6FF00] tracking-[0.2em] font-bold text-sm uppercase mb-3 block">Personal</span>
          <h2 className="text-5xl md:text-7xl font-black text-white heading-font">My World</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Tile 1: Music */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden group min-h-[300px] flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#C6FF00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/20">
                    <Music2 className="text-[#C6FF00]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">Listening To</h3>
                </div>
                
                <p className="text-3xl lg:text-4xl font-bold text-white mb-2 heading-font">
                  Midnight Coding <br/><span className="text-white/40">Vibes</span>
                </p>
              </div>

              {/* Mini Player */}
              <div className="w-full md:w-auto bg-black/60 backdrop-blur-md p-4 rounded-3xl border border-white/10 flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-50" />
                </div>
                <div className="flex-1 min-w-[150px]">
                  <p className="text-sm font-bold text-white truncate">Synthwave Mix</p>
                  <div className="flex gap-4 mt-2">
                    <SkipBack size={16} className="text-white/50 hover:text-white cursor-pointer" />
                    <PlayCircle size={16} className="text-[#C6FF00] hover:scale-110 cursor-pointer transition-transform" />
                    <SkipForward size={16} className="text-white/50 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Football */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 bg-gradient-to-br from-[#0c0f1c] to-[#1e142e] border border-blue-900/50 rounded-[2rem] p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png')] bg-center bg-no-repeat bg-contain scale-150 blur-sm group-hover:scale-100 group-hover:opacity-20 transition-all duration-700" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/10 mb-6">
                <Dumbbell className="text-blue-400" size={24} />
              </div>
              <div>
                <span className="uppercase text-xs font-bold tracking-widest text-[#a50044] mb-2 block">Favorite Team</span>
                <h3 className="text-3xl font-black text-white heading-font">FC Barcelona</h3>
                <p className="text-white/60 mt-2 text-sm leading-relaxed">More than a club. The philosophy on the pitch translates to how I structure code.</p>
              </div>
            </div>
          </motion.div>

          {/* Tile 3: Hobbies */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#C6FF00]/10 rounded-full flex items-center justify-center border border-[#C6FF00]/20">
                <Gamepad2 className="text-[#C6FF00]" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Gamer</h3>
                <p className="text-white/50 font-medium">Deconstructing game loops to build better UI.</p>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl h-2 bg-black/50 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#C6FF00] rounded-full shadow-[0_0_10px_#C6FF00]"
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}