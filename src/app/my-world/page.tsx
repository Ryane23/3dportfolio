"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MyWorldPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-transparent">
      {/* Ambient Light Leaks */}
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#C6FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-[#2c33b5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        {/* Editorial Hero Section */}
        <div className="split-editorial-grid gap-16 mb-20 items-end">
          <div className="flex flex-col gap-4">
            <p className="text-[#C6FF00] uppercase tracking-[0.3em] text-xs font-bold">RYAN ERICK / {new Date().getFullYear()}</p>
            <h1 className="font-headline text-7xl md:text-[8rem] font-black leading-[0.8] tracking-tighter text-white">
              MY<br/><span className="text-[#C6FF00] ml-12">/</span>WORLD
            </h1>
          </div>
          <div className="max-w-xl pb-4 border-l border-white/5 pl-8">
            <p className="text-white/60 text-lg leading-relaxed">
              A curated archive of the digital and physical frequencies I inhabit. Beyond the code and the pixels, this is the architecture of my focus.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bg-[#1f2020] rounded-lg p-8 relative overflow-hidden group border border-white/5 shadow-xl"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C6FF00]/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest text-[#C6FF00] uppercase">Current Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse"></div>
                  <span className="text-[10px] text-white/60 uppercase tracking-widest">Live Signal</span>
                </div>
              </div>
              <div>
                <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Building a <span className="text-[#C6FF00]">Cognitive UI</span> Framework.
                </h2>
                <p className="text-white/60 max-w-md">
                  Exploring the intersection of LLMs and generative design to create interfaces that adapt to human intent in real-time.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-[#353535] rounded-full text-xs font-medium text-white/80">AI Design</span>
                <span className="px-4 py-2 bg-[#353535] rounded-full text-xs font-medium text-white/80">R&amp;D</span>
              </div>
            </div>
          </motion.div>
          {/* Music Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 bg-[#1f2020] rounded-lg p-8 border border-white/5 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-center mb-8">
                <span className="material-symbols-outlined text-[#C6FF00]">headphones</span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest">Aetheric Beats</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-zinc-800 rounded-lg mb-6 shadow-2xl relative overflow-hidden">
                  <img alt="playlist cover" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIp-B9f8lbZ9EN-kpqiPcl7lKbnDekShCrkM3drqMqIY0eLaiPx3XxtPgakAfjkP1tPpRvsTiC7z_a8J6PziMHS13iKidm_bdw6ScWLZ9UrPLANlyqQQczNePnkNMB2J_wAY0bdQ2fAnEQ17QR-jSPIk0nkdKiHv0VUUb5zN98Ur6OSFU89ydEcT3nIUWk1Qdk90Rrafki6-jXvIDlVgJs69OrHQVXndXVg0gYvXNhZpBi46U0492Agok7802OSzXGbXcwSyfnGwo" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-1">Cybernetic Lo-Fi</h3>
                <p className="text-white/60 text-sm">Deep Focus vol. 4</p>
              </div>
              <div className="mt-8 space-y-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C6FF00] w-1/3 shadow-[0_0_10px_#C6FF00] animate-pulse"></div>
                </div>
                <div className="flex justify-between text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  <span>1:12</span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Anime Watchlist Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 bg-[#1f2020] rounded-lg p-8 border border-white/5 shadow-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-xl font-bold text-white uppercase tracking-wider">Continuum</h3>
              <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Watchlist</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-16 h-20 rounded-md overflow-hidden flex-shrink-0 border border-white/10">
                  <img alt="anime thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSv8tkv6cBF_exTCA7tPU5D9zi1cy0sa1i9FGg60l0cjrai6xrBvmpR517-r5ATQqHjIZeG3D-PLf6SBEk_eIL7eRNYgzEfOgwVcsL6Hq29IhxRf7S5aOJ_Cvb0B91xnl3NOMVPN9-aL-GOG6LaoOP7zfaa1rJZpYkV0yq38byfM0N_0xnPwAc1yEBNcIavtygw-H9XGgnN3jJBYUDUKvizWnxM2S8DPkW2c_X5le3dg9o-VkPG5DjdGbEQj3_KyqO07D4fITXgKw" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-[#C6FF00] mb-1 font-bold">EPISODE 12 / 24</p>
                  <h4 className="text-white font-bold text-sm">Cyberpunk Edgerunners</h4>
                </div>
                <span className="material-symbols-outlined text-white/20 group-hover:text-[#C6FF00] transition-colors">arrow_forward_ios</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-16 h-20 rounded-md overflow-hidden flex-shrink-0 border border-white/10">
                  <img alt="anime thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIutKfEkgdGj8tieQmw635TD2QPMN95qbYWpSpfIvXyh4ctS8pnpeLQ-40pY0uHEX5uEJh0W5ut7DQT_xosLnWkV6qcbQlgdFhJGvDek4PlAnYjOHLGHWnf5BnEhekjGPlZGXruKDFdSxqecOZakH1KAw6_BskmNSe3zwjtyLkYBxkqQsse_F9x4Yryl8YhJljsF2FRCanGgEUCufkcMVO3Va4lms2I3-wQ8wHPDZPsqiQAscz0Vm8bDiuecwebAzmEDqbIdjCE14" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs text-[#C6FF00] mb-1 font-bold">EPISODE 4 / 12</p>
                  <h4 className="text-white font-bold text-sm">Solo Leveling</h4>
                </div>
                <span className="material-symbols-outlined text-white/20 group-hover:text-[#C6FF00] transition-colors">arrow_forward_ios</span>
              </div>
            </div>
          </motion.div>
          {/* FC Barcelona Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-7 bg-gradient-to-br from-[#A50044] via-[#004D98] to-[#131313] rounded-lg p-8 border border-white/5 relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white text-3xl">sports_soccer</span>
                </div>
                <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] font-black">Més que un club</span>
              </div>
              <div>
                <h2 className="font-headline text-5xl font-black text-white italic tracking-tighter mb-4">FC BARCELONA</h2>
                <p className="text-white/80 max-w-sm text-sm leading-relaxed">
                  Since 2004. Witnessing the golden era from Rijkaard to Xavi. Football isn't just a game; it's the geometry of passion and the physics of the perfect pass.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 uppercase font-bold">Last Match</span>
                  <span className="text-white font-black text-lg">BAR 4 - 0 MAD</span>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 uppercase font-bold">Status</span>
                  <span className="text-[#C6FF00] font-black text-lg">Culers Always</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Hobbies Bento Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4"
          >
            {/* Coding */}
            <div className="bg-[#1f2020] rounded-lg p-8 border border-white/5 group hover:bg-[#353535] transition-all duration-500">
              <div className="w-12 h-12 bg-[#C6FF00]/10 rounded-full flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#C6FF00]">code</span>
              </div>
              <h3 className="text-white font-headline text-2xl font-bold mb-4 tracking-tight">System Architect</h3>
              <p className="text-white/60 text-sm leading-relaxed">Designing clean, scalable codebases. React, TypeScript, and the occasional dance with Rust.</p>
            </div>
            {/* Gaming */}
            <div className="bg-[#1f2020] rounded-lg p-8 border border-white/5 group hover:bg-[#353535] transition-all duration-500">
              <div className="w-12 h-12 bg-[#C6FF00]/10 rounded-full flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#C6FF00]">videogame_asset</span>
              </div>
              <h3 className="text-white font-headline text-2xl font-bold mb-4 tracking-tight">Competitive Play</h3>
              <p className="text-white/60 text-sm leading-relaxed">Mastering mechanics in Valorant and exploring sprawling narratives in Elden Ring.</p>
            </div>
            {/* Photography */}
            <div className="bg-[#1f2020] rounded-lg p-8 border border-white/5 group hover:bg-[#353535] transition-all duration-500">
              <div className="w-12 h-12 bg-[#C6FF00]/10 rounded-full flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#C6FF00]">photo_camera</span>
              </div>
              <h3 className="text-white font-headline text-2xl font-bold mb-4 tracking-tight">Visual Journal</h3>
              <p className="text-white/60 text-sm leading-relaxed">Capturing the brutalist beauty of urban landscapes through a 35mm lens.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Polish: Architectural elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute right-0 top-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 bottom-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-[10%] top-0 w-[1px] h-full bg-white/[0.02]" />
        <div className="absolute right-[10%] top-0 w-[1px] h-full bg-white/[0.02]" />
      </div>
    </main>
  );
}
