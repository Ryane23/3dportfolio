"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Radio, ArrowLeft, Terminal } from "lucide-react";

export default function HireMePage() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-12 lg:p-24 bg-transparent">
      {/* Ambient Light Leaks */}
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#C6FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-[#2c33b5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 font-label tracking-widest text-xs uppercase">
              <ArrowLeft size={16} className="text-sm" />
              Back to orbit
            </Link>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase text-white">
              Select Your <span className="text-[#C6FF00] text-glow-lime italic">Trajectory</span>
            </h1>
            <p className="mt-6 text-zinc-400 font-body text-lg max-w-md leading-relaxed">
              High-performance engineering for digital monoliths. Secure your position in the development queue.
            </p>
          </div>
          <div className="hidden md:block">
            <Terminal size={96} className="text-white/5 select-none" />
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1: Basic */}
          <div className="glass-card p-10 rounded-lg flex flex-col group transition-all duration-500 hover:-translate-y-2 bg-white/5 border border-[#C6FF00]/10 backdrop-blur-xl">
            <div className="mb-12">
              <h3 className="font-headline text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">Core Implementation</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-white">$1,500</span>
                <span className="text-zinc-600 font-label text-sm uppercase">+</span>
              </div>
            </div>
            <div className="flex-grow">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">High-End UI/UX Design System</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">Responsive Web Development</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Radio className="text-zinc-700 text-xl" />
                  <span className="text-zinc-600 font-body text-sm leading-tight">Custom AI Model Integration</span>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Radio className="text-zinc-700 text-xl" />
                  <span className="text-zinc-600 font-body text-sm leading-tight">Advanced Backend Scalability</span>
                </li>
              </ul>
            </div>
            <button className="mt-12 w-full py-5 rounded-full border border-white/10 text-white font-headline font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Initiate Basic
            </button>
          </div>
          {/* Tier 2: Standard (Most Popular) */}
          <div className="glass-card p-10 rounded-lg flex flex-col relative scale-105 border-[#C6FF00]/30 bg-[#2a2a2a]/40 shadow-[0_0_60px_rgba(198,255,0,0.05)] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#C6FF00] rounded-full">
              <span className="text-[#102000] font-headline text-[10px] font-black tracking-widest uppercase">Most Popular</span>
            </div>
            <div className="mb-12">
              <h3 className="font-headline text-xs tracking-[0.3em] text-[#C6FF00] uppercase mb-4">Advanced Systems</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-white">$3,000</span>
                <span className="text-zinc-600 font-label text-sm uppercase">+</span>
              </div>
            </div>
            <div className="flex-grow">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-100 font-body text-sm leading-tight">Full-Stack Digital Ecosystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-100 font-body text-sm leading-tight">AI Agent Integration & Tuning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-100 font-body text-sm leading-tight">Motion-Heavy UX Interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Radio className="text-zinc-700 text-xl" />
                  <span className="text-zinc-600 font-body text-sm leading-tight">Global Infrastructure Setup</span>
                </li>
              </ul>
            </div>
            <button className="mt-12 w-full py-5 rounded-full bg-[#b7f569] text-[#102000] font-headline font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(183,245,105,0.4)] transition-all">
              Secure Spot
            </button>
          </div>
          {/* Tier 3: Premium */}
          <div className="glass-card p-10 rounded-lg flex flex-col transition-all duration-500 hover:-translate-y-2 bg-white/5 border border-[#C6FF00]/10 backdrop-blur-xl">
            <div className="mb-12">
              <h3 className="font-headline text-xs tracking-[0.3em] text-zinc-500 uppercase mb-4">Enterprise Monolith</h3>
              <div className="flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-white">$5,000</span>
                <span className="text-zinc-600 font-label text-sm uppercase">+</span>
              </div>
            </div>
            <div className="flex-grow">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">Everything in Advanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">Distributed Cloud Architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">Private LLM Infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-[#C6FF00] text-xl" fill="#C6FF00" />
                  <span className="text-zinc-300 font-body text-sm leading-tight">White-Glove 24/7 Support</span>
                </li>
              </ul>
            </div>
            <button className="mt-12 w-full py-5 rounded-full border border-white/10 text-white font-headline font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Full Deployment
            </button>
          </div>
        </div>

        {/* Collaboration Inquiry Form */}
        <div className="max-w-3xl mx-auto w-full bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14 backdrop-blur-xl mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 heading-font text-center">Collaboration & Custom Inquiries</h2>
          <p className="text-white/60 text-center mb-8">Have a unique project, partnership, or collaboration in mind? Let’s connect and build something extraordinary together.</p>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Name</label>
              <input
                type="text"
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Project Type</label>
              <div className="relative">
                <select
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-headline text-base focus:outline-none focus:border-[#C6FF00] transition-colors appearance-none pr-12"
                  defaultValue=""
                  style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="web">Web Development</option>
                  <option value="video">Video Editing</option>
                  <option value="design">UI/UX Design</option>
                  <option value="ai">AI/ML Project</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
                <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-[#C6FF00] text-xl">▼</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-white/50 tracking-widest pl-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#C6FF00] transition-colors resize-none"
                placeholder="Tell me about your idea, partnership, or collaboration..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-[#C6FF00] text-black font-bold text-lg py-5 rounded-2xl hover:bg-white hover:text-black flex justify-center items-center gap-3 transition-all active:scale-95 border border-transparent shadow-[0_0_20px_rgba(198,255,0,0.3)]"
            >
              Send Collaboration Request
            </button>
          </form>
        </div>

      </div>

      {/* Visual Polish: Architectural elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute right-0 top-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 bottom-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-[10%] top-0 w-[1px] h-full bg-white/[0.02]"></div>
        <div className="absolute right-[10%] top-0 w-[1px] h-full bg-white/[0.02]"></div>
      </div>
    </main>
  );
}
