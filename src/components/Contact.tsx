"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-[80vh] py-32 px-6 overflow-hidden flex items-center justify-center">
      <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#C6FF00]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-[#C6FF00] tracking-[0.2em] font-bold text-sm uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-black text-white heading-font mb-6 leading-tight">
            Let's Build <br/> The Future.
          </h2>
          <p className="text-white/60 text-xl leading-relaxed max-w-md mb-12">
            Have a project in mind, or just want to say hi? My inbox is always open.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-12 backdrop-blur-xl relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C6FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none duration-700" />
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-[#C6FF00] text-black font-bold text-lg py-5 rounded-2xl hover:bg-white hover:text-black flex justify-center items-center gap-3 transition-all active:scale-95 group/btn border border-transparent shadow-[0_0_20px_rgba(198,255,0,0.3)] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
