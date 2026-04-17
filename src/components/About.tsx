"use client";

import { motion } from "framer-motion";

const skills = ["React", "Next.js", "Laravel", "Django", "AI Systems", "MongoDB"];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Avatar/Visual */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="relative aspect-square w-full max-w-md mx-auto rounded-[2rem] overflow-hidden group"
        >
          {/* Glassmorphism placeholder container */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] transition-colors group-hover:bg-white/10 group-hover:border-[#C6FF00]/50" />
          <div className="absolute inset-4 bg-gradient-to-br from-black to-[#0a0a0a] rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Mock 3D or Image placeholder */}
            <span className="text-white/20 font-bold text-2xl tracking-widest">AVATAR.OBJ</span>
            <div className="absolute inset-0 bg-[#C6FF00]/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px]"></div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-12">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white heading-font">
              Bridging the gap between <span className="text-[#C6FF00]">design</span> & engineering.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              I am a Digital Engineer specializing in building full-stack applications with an emphasis on interactive, immersive user experiences and deeply integrated AI systems. My code isn't just functional; it's an experience.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 px-6 py-2 rounded-full bg-[#C6FF00] text-black font-bold shadow-lg hover:bg-[#b6e600] transition-colors text-base"
            >
              Learn more about us
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="group"
          >
            <div className="pl-6 border-l-2 border-white/10 group-hover:border-[#C6FF00] transition-colors duration-500 py-2">
              <span className="block text-[#C6FF00] text-sm font-bold uppercase tracking-widest mb-1">Education</span>
              <h4 className="text-xl font-bold text-white mb-1">B.Sc. Computer Science</h4>
              <p className="text-white/50 text-sm">University of Technology • 2018 - 2022</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
