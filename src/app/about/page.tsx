"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2018-2022",
    title: "B.Sc. Computer Science",
    place: "University of Technology",
    desc: "Graduated with honors, specializing in software engineering, AI, and interactive systems."
  },
  {
    year: "2022-2024",
    title: "Full-Stack Engineer",
    place: "Freelance & Startups",
    desc: "Built scalable web apps, led design-to-code handoff, and delivered immersive user experiences."
  },
  {
    year: "2024-Present",
    title: "AI Systems Architect",
    place: "Independent R&D",
    desc: "Researching generative UI, LLM integration, and cognitive interfaces for next-gen products."
  }
];

const skills = [
  "React", "Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS", "Node.js", "Python", "AI/ML", "Figma", "UX Engineering"
];

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-48 px-6 md:px-12 lg:px-24 bg-[#131313]">
      {/* Ambient Glows */}
      <div className="fixed top-1/4 -left-20 w-[500px] h-[500px] bg-[#b7f569]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#2c33b5]/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Grain Overlay */}
      <div className="grain-overlay fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
        {/* Left: 3D Avatar/Portrait */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#b7f569]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border-[0.5px] border-white/10 glass-panel">
              <img
                alt="Ryan Erick Stylized Portrait"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQvhwmGVYJvKDhB4UVBBjige5XlYGMFaO1M96dHVz_iAUnAYoLfeuLdW0A32iHcAWogduKWmBaYqb00sjfKSI_oO8rRco3ZxteQA2gZ3QFdE_5aKu7zO2J-GZpPE2xP9foIdn51OVsjdI4MGaONOmnWoM_kCHVm9xWEfsuWHSq7Q1INuyhoxZMpzf_aZK0JjIfw-qNzvYyMzmbo6aq9II6etY3G6mAmJOXeGvQJC_re88vbkF1OPo44UZoOl0_wCHnbiPG9zTq6I"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
              {/* Floating Identity Tag */}
              <div className="absolute bottom-8 left-8">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-none">
                  Ryan <br /> <span className="text-[#b7f569] neon-glow">Erick</span>
                </h2>
                <p className="mt-4 font-label text-xs tracking-widest uppercase text-white/40">Architect of Digital Monoliths</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Content */}
        <div className="lg:col-span-7 space-y-24">
          {/* Bio Section */}
          <section>
            <div className="inline-block px-3 py-1 border border-[#b7f569]/30 rounded-full mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-label text-[#b7f569]">Operational Profile</span>
            </div>
            <h3 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">
              CRAFTING <span className="text-[#b7f569]">FUTURE</span> SYSTEMS.
            </h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 max-w-2xl">
              A Computer Engineer specialized in the convergence of <span className="text-white font-medium italic">high-performance backend architecture</span> and immersive front-end interfaces. Building robust digital structures that bridge the gap between human intuition and machine logic.
            </p>
          </section>
          {/* Skills Bento Grid */}
          <section>
            <h4 className="font-headline text-sm tracking-[0.3em] uppercase text-white/40 mb-10">Technical Arsenal</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Skill Card 1 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">data_object</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">React / Next.js</h5>
                <p className="text-xs text-white/40 mt-2 font-label">Complex state & Server components</p>
              </div>
              {/* Skill Card 2 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">database</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">Laravel / Django</h5>
                <p className="text-xs text-white/40 mt-2 font-label">Scalable API Ecosystems</p>
              </div>
              {/* Skill Card 3 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">psychology</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">AI Engineering</h5>
                <p className="text-xs text-white/40 mt-2 font-label">LLMs & Neural Networks</p>
              </div>
              {/* Skill Card 4 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">view_in_ar</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">Three.js / WebGL</h5>
                <p className="text-xs text-white/40 mt-2 font-label">Immersive 3D Environments</p>
              </div>
              {/* Skill Card 5 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">cloud</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">Cloud Arch</h5>
                <p className="text-xs text-white/40 mt-2 font-label">AWS & Serverless Logic</p>
              </div>
              {/* Skill Card 6 */}
              <div className="glass-panel p-8 rounded-lg group hover:border-[#b7f569]/50 transition-all duration-500 hover:-translate-y-1">
                <span className="material-symbols-outlined text-[#b7f569] mb-4 block">memory</span>
                <h5 className="text-white font-headline text-lg uppercase tracking-tighter">Rust / C++</h5>
                <p className="text-xs text-white/40 mt-2 font-label">System-level optimization</p>
              </div>
            </div>
          </section>
          {/* Timeline Section */}
          <section className="relative">
            <h4 className="font-headline text-sm tracking-[0.3em] uppercase text-white/40 mb-12">Trajectory & Milestones</h4>
            <div className="relative pl-12 border-l border-white/5 space-y-16">
              {/* Education Node */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-[#b7f569] shadow-[0_0_15px_rgba(193,255,114,0.8)]"></div>
                <span className="text-[10px] font-label text-[#b7f569] uppercase tracking-widest mb-2 block">Foundations</span>
                <h5 className="text-2xl font-headline text-white uppercase tracking-tighter">Academic Mastery</h5>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center glass-panel px-6 py-4 rounded">
                    <span className="text-sm text-white">M.Sc. in Artificial Intelligence</span>
                    <span className="text-[10px] text-white/40 font-label">Stanford University</span>
                  </div>
                  <div className="flex justify-between items-center glass-panel px-6 py-4 rounded">
                    <span className="text-sm text-white">B.Sc. in Computer Engineering</span>
                    <span className="text-[10px] text-white/40 font-label">MIT</span>
                  </div>
                </div>
              </div>
              {/* Certifications Node */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-white/20"></div>
                <span className="text-[10px] font-label text-white/40 uppercase tracking-widest mb-2 block">Validation</span>
                <h5 className="text-2xl font-headline text-white uppercase tracking-tighter">Technical Certification</h5>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#1f2020] text-xs text-white/80 rounded-full border border-white/5">AWS Solutions Architect</span>
                  <span className="px-4 py-2 bg-[#1f2020] text-xs text-white/80 rounded-full border border-white/5">Google ML Engineer</span>
                  <span className="px-4 py-2 bg-[#1f2020] text-xs text-white/80 rounded-full border border-white/5">Azure Cloud Expert</span>
                </div>
              </div>
              {/* Accomplishments Node */}
              <div className="relative">
                <div className="absolute -left-[54px] top-0 w-3 h-3 rounded-full bg-[#b7f569] shadow-[0_0_15px_rgba(193,255,114,0.8)]"></div>
                <span className="text-[10px] font-label text-[#b7f569] uppercase tracking-widest mb-2 block">Impact</span>
                <h5 className="text-2xl font-headline text-white uppercase tracking-tighter">Recognition</h5>
                <div className="mt-4 space-y-6">
                  <div className="group">
                    <p className="text-lg text-white font-headline uppercase leading-tight group-hover:text-[#b7f569] transition-colors">Top 1% Developer on StackOverflow</p>
                    <p className="text-xs text-white/30 font-label mt-1">Global ranking for Node.js and Systems Design contributions.</p>
                  </div>
                  <div className="group">
                    <p className="text-lg text-white font-headline uppercase leading-tight group-hover:text-[#b7f569] transition-colors">Open Source Contributor of the Year</p>
                    <p className="text-xs text-white/30 font-label mt-1">Recognized for core contributions to the Three.js ecosystem.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CTA */}
          <div className="pt-12">
            <button className="group relative px-12 py-5 bg-[#b7f569] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 font-label font-bold text-[#304f00] tracking-tight uppercase text-sm">Initiate Collaboration</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="fixed bottom-12 right-12 hidden lg:flex flex-col items-center gap-4 z-40">
        <span className="[writing-mode:vertical-lr] font-label text-[10px] tracking-[0.5em] text-white/20 uppercase">Scroll to explore</span>
        <div className="w-px h-24 bg-gradient-to-b from-[#b7f569] to-transparent opacity-30"></div>
      </div>
    </main>
  );
}
