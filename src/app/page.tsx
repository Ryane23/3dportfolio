"use client";
import { useEffect } from "react";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MyWorld from "@/components/MyWorld";

export default function Home() {
  useEffect(() => {
    const section = window.localStorage.getItem("scrollToSection");
    if (section) {
      window.localStorage.removeItem("scrollToSection");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Wait for DOM to be ready
    }
  }, []);

  return (
    <div className="relative">
      <main className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* 3D Background */}
        <Hero3D />

        {/* Main Content Layout */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pointer-events-none pb-20 md:pb-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full h-full gap-8 md:gap-0 mt-24 md:mt-0">
            
            {/* Left Text */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-start select-none">
              <span className="text-[#C6FF00] tracking-[0.3em] text-sm md:text-md uppercase font-bold mb-6 ml-1">
                Ryan Erick
              </span>
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mix-blend-screen">
                DIGITAL
              </h1>
            </div>

            {/* Center Space for 3D Avatar (Handles responsive spacing) - hidden on mobile */}  
            <div className="hidden md:block w-[25vw] h-auto shrink-0" />
            
            {/* On mobile, the 3D object will be below the text */}
            <div className="md:hidden w-full h-[20vh]" />

            {/* Right Text */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:items-end text-center md:text-right select-none">
              <h1 className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-bl from-white to-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mix-blend-screen">
                ENGINEER
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-sm mt-8 font-light">
                Full-stack developer & AI systems builder
              </p>
            </div>

          </div>
        </div>
      </main>

      <About />
      <Projects />
      <MyWorld />
    </div>
  );
}