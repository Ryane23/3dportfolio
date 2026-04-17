"use client";

import { motion } from "framer-motion";

export default function HireMePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-[#C6FF00]/10 px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl backdrop-blur-xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white heading-font mb-6 leading-tight">
          Ready to Work Together?
        </h1>
        <p className="text-white/70 text-xl mb-10">
          Let’s build something amazing! Fill out the form below to start your project or discuss your idea. I’ll get back to you as soon as possible.
        </p>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            required
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
            placeholder="Your Email"
          />
          <textarea
            required
            rows={4}
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#C6FF00] text-black font-bold text-lg py-5 rounded-2xl hover:bg-white hover:text-black flex justify-center items-center gap-3 transition-all active:scale-95 border border-transparent shadow-[0_0_20px_rgba(198,255,0,0.3)]"
          >
            Send Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
}
