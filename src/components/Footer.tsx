"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-xl py-10 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-black heading-font text-white mb-2 hover:text-[#C6FF00] transition-colors">
            Ryan Erick
          </Link>
          <p className="text-white/50 text-sm mb-2 md:mb-0">Full-stack developer & AI systems builder</p>
        </div>
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-black hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:scale-110 transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={22} />
          </a>
        </div>
        <div className="text-white/40 text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} Ryan Erick. All rights reserved.
        </div>
      </div>
      {/* System Status and Links - compact, single column */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#b7f569] animate-pulse"></div>
          <span className="font-label text-[10px] tracking-[0.2em] text-zinc-500 uppercase">System Status: Accepting Q3 Requests</span>
        </div>
        <div className="flex gap-6 mt-1">
          <a className="text-[10px] font-label tracking-widest text-zinc-600 hover:text-[#b7f569] transition-colors uppercase" href="#">Custom Quote</a>
          <a className="text-[10px] font-label tracking-widest text-zinc-600 hover:text-[#b7f569] transition-colors uppercase" href="#">Terms of Force</a>
        </div>
      </div>
    </footer>
  );
}
