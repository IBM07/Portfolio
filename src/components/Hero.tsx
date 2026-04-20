"use client";

import { useEffect, useRef } from "react";

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
      <div ref={contentRef} className="max-w-6xl w-full will-change-transform relative z-10">

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
