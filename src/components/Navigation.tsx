"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "My World", href: "#world" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0 md:w-fit"
      >
        <div className="flex items-center justify-between md:justify-center p-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-white focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className="px-5 py-2.5 text-sm font-medium text-white/70 hover:text-[#C6FF00] transition-colors relative z-10"
                >
                  {item.name}
                </Link>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
            <div className="w-[1px] h-6 bg-white/20 mx-2" />
            <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#C6FF00] text-black hover:bg-[#A3D900] transition-colors shadow-[0_0_15px_rgba(198,255,0,0.4)]">
              Hire Me
            </button>
          </div>

          {/* Mobile Hire Me Button */}
          <button className="md:hidden px-6 py-2 rounded-full text-sm font-bold bg-[#C6FF00] text-black">
            Hire Me
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#C6FF00] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
