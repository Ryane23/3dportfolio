"use client";
import { motion } from "framer-motion";

const projects = [
  {
    status: "HOSTED • LIVE",
    statusColor: "bg-primary-fixed/10 text-primary-fixed border-primary-fixed/20",
    title: "NEURAL_DOCK",
    desc: "Deep-learning visualization engine for real-time neural network monitoring and optimization.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv1O3AkDKyMgr2LnYcB-LN3SgEUtAVnXtlyy3wTw2MMBpL8KVO8YDIbYHAaCkY-P7bFtv0jB2vW4h6_G6bSUlyn5O8I528y7k2RU1bydAzVtMlly21L44c-P7Sa849CY5HWcmVDYVkoZU3olBjnl8Z7MHXKQYco4NbEc2WXcv6NjMqTMf-dyvOIjrSaFrfNFqHZgVwf6KHI8BhjQCxXeALcaYpmEQyxwKp7jlhqluMJ_nmugy3_AHLyO04SGfRnhAcdwJPfPViM38",
    tech: ["React.js", "Three.js", "PyTorch"],
    icon: "bolt"
  },
];

const sideProjects = [
  {
    status: "IN PROGRESS",
    statusColor: "bg-secondary-container/30 text-secondary border-secondary/20",
    title: "CRYO_SHELL",
    desc: "Encrypted data vault system utilizing biometric frequency matching.",
    progress: 74,
    tech: ["RUST", "WASMER"],
  },
  {
    status: "UPCOMING",
    statusColor: "bg-surface-container-highest text-on-surface-variant",
    title: "PULSAR_VM",
    desc: "Virtual machine orchestrator for decentralized cloud infrastructure.",
    tech: [],
  },
];

const miniProjects = [
  {
    title: "SYNTH_OS",
    desc: "Modular kernel design for low-latency audio synthesis processing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASGaPz-uo84Up_GDhjqVqlnTofBa6inH0vegazdWKgiY7d_U8GZd0UcTCp6vQyp4OliDaZWwsqVkgmAi3SB5jlpJLaMbEcPPjkkGWDQVBmZROJ5oTMg553GpTDwUAhrr8QG8hwAUhpz2t4v7GRYNjVY-4xxsRTkbjKV_7bscNN1cUB-SVtXYvW-kgyONTY7P_FPkM-0Sv7b9XZHRHxoo7Tn2YrVsaXuXbZDzd1epzh6IHqSmNxXzw32Rf_I6QUSG2yX5DwHVrig50",
    status: "Completed",
    statusColor: "bg-background/80",
    tech: ["code", "hub"],
    link: "#"
  },
  {
    title: "VOID_MESH",
    desc: "Collaborative p2p file transfer protocol with zero-knowledge proofs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9aJ3-9zIPvKot3uxq2Vu0tSHFJqL4DVT8du4TtlVM3l-T4941FuvhE1hjU8AaTKO6Pcs2kdO8XyLD6XWkXJutyDS8eDLWcz7P2FT-G3TdyesENC1oTnJxTTOPFGVbgEgAyaUvIkSGlCB2rzAUPsyhdqAvSO5-xyhuV3U0ATEyKPsQN6ZcSiPubX7pyQd3xQjsx2OgGve5Kb3uvf2LbxRaHKKqNWI8C4escAE1HP3WSDk1jnlevx7w-zy4DzhNOv3iFezvk4w1-zo",
    status: "Collab",
    statusColor: "bg-background/80",
    avatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBggtA65Sg98PaG5TEkvmDnX_nXThYwrszA589rAGxYLlXb2gdhWQrieoR-2J-nI-8y7mDTVo2WONiq6CteOdxlZ_lieX1XxoG4QkzM4_xVL8YetqrKj5J_ceBxEPD_gbRlGsRmADrZs2nKdldcfV3i3IdfOIpyiGbc4sJMPdAFJbO8bM6gExQgd-lTBAkZCnO1Gpe2qa4P-O0Z1jHpmYCryr0R_6XS95chqxMbO_Ed3eKCwuUEp6Wuy75beazNXhB2Aw4aPpuMXLU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo1oJj25yJ_xJWZS1mq54TkJMdO5VVgwdeJTj-08r8UD-RS4XCpkAgtwx5k1bUwHPYLgYJ95aoubhKHa9sKBdQfNw70j0goz5aA3nzESGtjWh6ND6DfPqFPAuVTJ8QaOilZl23wB55X5xzkb6dbALSHuKdduPh8lfFWPL1qjhhKULoPkGNPrj9AtMxvPEQdiCWEXCnDTHurclKhF8V-_oSjyUameLH5ZSH53teUNFEA9fpPtcysmT_gcbQzOhIsXnc41VS5N7MJds"
    ],
    link: "#"
  },
  {
    title: "OMEGA_UI",
    desc: "A high-performance component library for industrial dashboarding.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPtHVzWl7mCLRyQ4ND4-laAoYWD61LNQh1ILUsfHt2i6y7lrAHl5Wi3_LWaCFf_3RfZZueQmhdMc0fXCMzSJU9b4h9EzwIKx93-kyFcabuANCEq2QGbWj63kI7P6lLuAR31WP2UPwmbym_QM2_KVwX0I4x9X8M-cKfqhMdU5BWcWrdN07nQ6GlaJYhQFnee4FcCRjO1cLJ36qFv1r-9snbi2wMw8Ot0aNqrUUk_tvFNPT_-G2m3pYc5CArqge4DqnYEL902pP9w60",
    status: "Live",
    statusColor: "bg-background/80",
    tech: ["palette"],
    link: "#"
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-40 px-6 max-w-7xl mx-auto bg-[#131313]">
      {/* Hero Section */}
      <section className="mb-24 flex flex-col md:flex-row items-end gap-4">
        <div className="flex items-center gap-4">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-[#b7f569] drop-shadow-lg">
            <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.339 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.422-.012 2.752 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/>
          </svg>
          <h2 className="font-headline font-bold text-5xl md:text-7xl lg:text-[7rem] split-header-text uppercase">
            My <span className="text-[#b7f569]">GitHub</span> Projects
          </h2>
        </div>
        <p className="font-label text-sm uppercase tracking-[0.3em] mb-4 text-outline-variant">Architectural Systems — v2.04</p>
      </section>
      {/* Filter Buttons */}
      <section className="mb-20">
        <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-6 py-2 rounded-full bg-[#b7f569] text-[#304f00] font-bold text-sm transition-transform active:scale-95">All Systems</button>
          <button className="px-6 py-2 rounded-full bg-[#353535] text-white/80 font-medium text-sm hover:bg-[#393939] transition-colors">Hosted</button>
          <button className="px-6 py-2 rounded-full bg-[#353535] text-white/80 font-medium text-sm hover:bg-[#393939] transition-colors">In Progress</button>
          <button className="px-6 py-2 rounded-full bg-[#353535] text-white/80 font-medium text-sm hover:bg-[#393939] transition-colors">Completed</button>
          <button className="px-6 py-2 rounded-full bg-[#353535] text-white/80 font-medium text-sm hover:bg-[#393939] transition-colors">Upcoming</button>
          <button className="px-6 py-2 rounded-full bg-[#353535] text-white/80 font-medium text-sm hover:bg-[#393939] transition-colors">Collaborations</button>
        </div>
      </section>
      {/* Main Project Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
        {/* Main Project Card */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-lg bg-[#1b1c1c] p-8 glass-card">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#b7f569]/10 text-[#b7f569] text-[10px] font-bold tracking-widest uppercase mb-4 border border-[#b7f569]/20">HOSTED • LIVE</span>
              <h3 className="font-headline text-4xl font-bold text-white mb-2">NEURAL_DOCK</h3>
              <p className="text-white/60 max-w-sm">Deep-learning visualization engine for real-time neural network monitoring and optimization.</p>
            </div>
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-[#b7f569]">bolt</span>
            </div>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv1O3AkDKyMgr2LnYcB-LN3SgEUtAVnXtlyy3wTw2MMBpL8KVO8YDIbYHAaCkY-P7bFtv0jB2vW4h6_G6bSUlyn5O8I528y7k2RU1bydAzVtMlly21L44c-P7Sa849CY5HWcmVDYVkoZU3olBjnl8Z7MHXKQYco4NbEc2WXcv6NjMqTMf-dyvOIjrSaFrfNFqHZgVwf6KHI8BhjQCxXeALcaYpmEQyxwKp7jlhqluMJ_nmugy3_AHLyO04SGfRnhAcdwJPfPViM38" alt="Neural Dock" />
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="text-[10px] tracking-widest uppercase font-bold text-outline">React.js</span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-outline">Three.js</span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-outline">PyTorch</span>
          </div>
        </div>
        {/* Side Project Cards */}
        <div className="md:col-span-4 flex flex-col gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-lg flex-1 group">
            <span className="inline-block px-3 py-1 rounded-full bg-[#2c33b5]/30 text-[#bec2ff] font-bold text-[10px] tracking-widest uppercase mb-4 border border-[#bec2ff]/20">IN PROGRESS</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-4">CRYO_SHELL</h3>
            <div className="h-1 w-full bg-[#353535] rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-[#b7f569] w-[74%] neon-glow"></div>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-relaxed">Encrypted data vault system utilizing biometric frequency matching.</p>
            <div className="flex gap-4">
              <span className="text-[10px] font-bold text-outline tracking-tighter">RUST</span>
              <span className="text-[10px] font-bold text-outline tracking-tighter">WASMER</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-card p-8 rounded-lg flex-1 bg-[#353535]/20 group">
            <span className="inline-block px-3 py-1 rounded-full bg-[#353535] text-white/60 font-bold text-[10px] tracking-widest uppercase mb-4">UPCOMING</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-2">PULSAR_VM</h3>
            <p className="text-sm text-white/60 leading-relaxed">Virtual machine orchestrator for decentralized cloud infrastructure.</p>
          </div>
        </div>
      </section>
      {/* Mini Projects Grid */}
      <section className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {/* Mini Project Card 1 */}
        <div className="glass-card rounded-lg overflow-hidden group">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASGaPz-uo84Up_GDhjqVqlnTofBa6inH0vegazdWKgiY7d_U8GZd0UcTCp6vQyp4OliDaZWwsqVkgmAi3SB5jlpJLaMbEcPPjkkGWDQVBmZROJ5oTMg553GpTDwUAhrr8QG8hwAUhpz2t4v7GRYNjVY-4xxsRTkbjKV_7bscNN1cUB-SVtXYvW-kgyONTY7P_FPkM-0Sv7b9XZHRHxoo7Tn2YrVsaXuXbZDzd1epzh6IHqSmNxXzw32Rf_I6QUSG2yX5DwHVrig50" alt="SYNTH_OS" />
            <div className="absolute top-4 right-4 bg-[#131313]/80 backdrop-blur px-2 py-1 rounded-full border border-white/10">
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Completed</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-headline text-xl font-bold mb-2">SYNTH_OS</h4>
            <p className="text-xs text-white/60 mb-4">Modular kernel design for low-latency audio synthesis processing.</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#b7f569]">code</span>
                <span className="material-symbols-outlined text-[16px] text-[#b7f569]">hub</span>
              </div>
              <span className="material-symbols-outlined text-white/40 group-hover:text-[#b7f569] transition-colors">arrow_outward</span>
            </div>
          </div>
        </div>
        {/* Mini Project Card 2 */}
        <div className="glass-card rounded-lg overflow-hidden group">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9aJ3-9zIPvKot3uxq2Vu0tSHFJqL4DVT8du4TtlVM3l-T4941FuvhE1hjU8AaTKO6Pcs2kdO8XyLD6XWkXJutyDS8eDLWcz7P2FT-G3TdyesENC1oTnJxTTOPFGVbgEgAyaUvIkSGlCB2rzAUPsyhdqAvSO5-xyhuV3U0ATEyKPsQN6ZcSiPubX7pyQd3xQjsx2OgGve5Kb3uvf2LbxRaHKKqNWI8C4escAE1HP3WSDk1jnlevx7w-zy4DzhNOv3iFezvk4w1-zo" alt="VOID_MESH" />
            <div className="absolute top-4 right-4 bg-[#131313]/80 backdrop-blur px-2 py-1 rounded-full border border-white/10">
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Collab</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-headline text-xl font-bold mb-2">VOID_MESH</h4>
            <p className="text-xs text-white/60 mb-4">Collaborative p2p file transfer protocol with zero-knowledge proofs.</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img className="w-6 h-6 rounded-full border-2 border-[#131313] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBggtA65Sg98PaG5TEkvmDnX_nXThYwrszA589rAGxYLlXb2gdhWQrieoR-2J-nI-8y7mDTVo2WONiq6CteOdxlZ_lieX1XxoG4QkzM4_xVL8YetqrKj5J_ceBxEPD_gbRlGsRmADrZs2nKdldcfV3i3IdfOIpyiGbc4sJMPdAFJbO8bM6gExQgd-lTBAkZCnO1Gpe2qa4P-O0Z1jHpmYCryr0R_6XS95chqxMbO_Ed3eKCwuUEp6Wuy75beazNXhB2Aw4aPpuMXLU" alt="avatar1" />
                <img className="w-6 h-6 rounded-full border-2 border-[#131313] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo1oJj25yJ_xJWZS1mq54TkJMdO5VVgwdeJTj-08r8UD-RS4XCpkAgtwx5k1bUwHPYLgYJ95aoubhKHa9sKBdQfNw70j0goz5aA3nzESGtjWh6ND6DfPqFPAuVTJ8QaOilZl23wB55X5xzkb6dbALSHuKdduPh8lfFWPL1qjhhKULoPkGNPrj9AtMxvPEQdiCWEXCnDTHurclKhF8V-_oSjyUameLH5ZSH53teUNFEA9fpPtcysmT_gcbQzOhIsXnc41VS5N7MJds" alt="avatar2" />
              </div>
              <span className="material-symbols-outlined text-white/40 group-hover:text-[#b7f569] transition-colors">arrow_outward</span>
            </div>
          </div>
        </div>
        {/* Mini Project Card 3 */}
        <div className="glass-card rounded-lg overflow-hidden group">
          <div className="h-48 overflow-hidden relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPtHVzWl7mCLRyQ4ND4-laAoYWD61LNQh1ILUsfHt2i6y7lrAHl5Wi3_LWaCFf_3RfZZueQmhdMc0fXCMzSJU9b4h9EzwIKx93-kyFcabuANCEq2QGbWj63kI7P6lLuAR31WP2UPwmbym_QM2_KVwX0I4x9X8M-cKfqhMdU5BWcWrdN07nQ6GlaJYhQFnee4FcCRjO1cLJ36qFv1r-9snbi2wMw8Ot0aNqrUUk_tvFNPT_-G2m3pYc5CArqge4DqnYEL902pP9w60" alt="OMEGA_UI" />
            <div className="absolute top-4 right-4 bg-[#131313]/80 backdrop-blur px-2 py-1 rounded-full border border-white/10">
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Live</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-headline text-xl font-bold mb-2">OMEGA_UI</h4>
            <p className="text-xs text-white/60 mb-4">A high-performance component library for industrial dashboarding.</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#b7f569]">palette</span>
              </div>
              <span className="material-symbols-outlined text-white/40 group-hover:text-[#b7f569] transition-colors">arrow_outward</span>
            </div>
          </div>
        </div>
      </section>
      {/* Metrics Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12">
          <h2 className="font-headline font-bold text-5xl uppercase tracking-tighter">My Dev<br /><span className="text-[#b7f569]">World</span></h2>
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-outline">Metrics Stream — Localhost:8080</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#1b1c1c] p-8 rounded-lg border-l-2 border-[#b7f569]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Total Repos</p>
            <h4 className="font-headline text-5xl font-bold text-white">142</h4>
            <p className="text-[10px] text-[#b7f569] mt-4 font-bold">+12 this month</p>
          </div>
          <div className="bg-[#1b1c1c] p-8 rounded-lg border-l-2 border-[#b7f569]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Contributions</p>
            <h4 className="font-headline text-5xl font-bold text-white">2.8k</h4>
            <p className="text-[10px] text-[#b7f569] mt-4 font-bold">Top 1% Global</p>
          </div>
          <div className="md:col-span-2 glass-card p-8 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-6">Language Proficiency</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                    <span>TypeScript</span>
                    <span className="text-[#b7f569]">92%</span>
                  </div>
                  <div className="h-1 w-full bg-[#353535] rounded-full">
                    <div className="h-full bg-[#b7f569] w-[92%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                    <span>Rust</span>
                    <span className="text-[#b7f569]">68%</span>
                  </div>
                  <div className="h-1 w-full bg-[#353535] rounded-full">
                    <div className="h-full bg-[#b7f569] w-[68%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                    <span>Python</span>
                    <span className="text-[#b7f569]">85%</span>
                  </div>
                  <div className="h-1 w-full bg-[#353535] rounded-full">
                    <div className="h-full bg-[#b7f569] w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="glass-card rounded-xl p-12 text-center relative overflow-hidden border border-[#b7f569]/20">
        <div className="relative z-10">
          <h3 className="font-headline text-5xl font-bold mb-6 tracking-tighter">READY TO SYNC?</h3>
          <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">Currently accepting high-impact collaborations and technical leadership roles for Q3-Q4 2024.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 rounded-full bg-[#b7f569] text-[#304f00] font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform duration-300 neon-glow">
              Initialize Contact
            </button>
            <button className="px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all">
              Download Dossier
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#b7f569]/5 to-transparent pointer-events-none"></div>
      </section>
    </main>
  );
}
