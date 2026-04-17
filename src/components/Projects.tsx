"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const FILTERS = ["All", "Live", "Development", "Concept"];

const PROJECTS = [
  {
    id: 1,
    title: "AI Voice Assistant",
    category: "Development",
    tech: ["Next.js", "Python", "ElevenLabs"],
    image: "/project-1.jpg", 
  },
  {
    id: 2,
    title: "E-Commerce Reimagined",
    category: "Live",
    tech: ["React", "Stripe", "Tailwind"],
    image: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    category: "Concept",
    tech: ["WebGL", "Three.js", "ethers.js"],
    image: "/project-3.jpg",
  },
  {
    id: 4,
    title: "SaaS Task Manager",
    category: "Live",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/project-4.jpg",
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [githubStats, setGithubStats] = useState({ repos: 128, commits: 3420 });

  useEffect(() => {
    // Basic mock logic or fetch for GitHub stats
    // Note: True total commits requires scraping timeline or complex GraphQL query
    const loadGithub = async () => {
      try {
        const res = await fetch("https://api.github.com/users/tj"); // Placeholder popular dev
        const data = await res.json();
        if (data.public_repos) {
          setGithubStats((prev) => ({ ...prev, repos: data.public_repos }));
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadGithub();
  }, []);

  const filteredProjects = PROJECTS.filter((p) =>
    activeFilter === "All" ? true : p.category === activeFilter
  );

  return (
    <section id="projects" className="relative min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C6FF00] tracking-[0.2em] font-bold text-sm uppercase mb-3 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-white heading-font">Select Work</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors ${
                activeFilter === filter
                  ? "text-black bg-[#C6FF00] shadow-[0_0_15px_rgba(198,255,0,0.4)]"
                  : "text-white/60 hover:text-white bg-white/5 border border-white/10 hover:border-white/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
              >
                {/* Image / Canvas Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0 group-hover:scale-105 transition-transform duration-700" />
                
                <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-between z-10 transition-colors group-hover:bg-black/20">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-500">
                      <button className="p-2 rounded-full bg-black/50 hover:bg-[#C6FF00] hover:text-black border border-white/20 hover:border-[#C6FF00] transition-colors">
                        <FaGithub size={18} />
                      </button>
                      <button className="p-2 rounded-full bg-black/50 hover:bg-[#C6FF00] hover:text-black border border-white/20 hover:border-[#C6FF00] transition-colors">
                        <FiExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 heading-font">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-sm font-medium text-white/50 bg-black/40 px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mx-auto mt-32 p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6FF00]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 heading-font">My Dev World</h3>
              <p className="text-white/60">Exploring the GitHub universe, one commit at a time.</p>
            </div>
            
            <div className="flex gap-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-[#C6FF00] mb-1">{githubStats.repos}</span>
                <span className="text-white/50 uppercase text-xs font-bold tracking-widest">Repos</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-white mb-1">{(githubStats.commits / 1000).toFixed(1)}k</span>
                <span className="text-white/50 uppercase text-xs font-bold tracking-widest">Commits</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
