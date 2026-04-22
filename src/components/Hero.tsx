"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference to respect accessibility settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    let requestRef: number;
    
    const handleScroll = () => {
      // Use requestAnimationFrame to ensure smooth 60fps performance
      requestRef = requestAnimationFrame(() => {
        if (contentRef.current) {
          const scrollY = window.scrollY;
          // Apply subtle parallax effect: slow downward move (0.4x) and slight fade
          contentRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
          contentRef.current.style.opacity = `${Math.max(1 - scrollY / 700, 0)}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 bg-black overflow-hidden relative">
      <div ref={contentRef} className="max-w-6xl w-full will-change-transform relative z-10 pt-16 md:pt-0">

        {/* Profile Image & Availability */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] mb-6 rounded-full overflow-hidden border-2 border-gray-800 hover:border-orange-500 transition-colors duration-500 bg-gray-900">
            <Image 
              src="/profile.jpg"
              alt="Mohammed Ibrahim Aejaz"
              width={140}
              height={140}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-orange-500 uppercase flex items-center gap-3 opacity-90">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            Available for Freelance Work
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center mb-8 leading-tight">
          Building AI products that actually ship.
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Full Stack AI Engineer • SaaS Founder • Freelance Dev • Hyderabad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition font-medium"
          >
            VIEW WORK
          </a>
          <a
            href="mailto:ibrahimaejaz@gmail.com"
            className="px-8 py-3 bg-orange-500 text-black hover:bg-orange-600 transition font-medium"
          >
            LET'S TALK
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <svg className="w-6 h-6 text-orange-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
