"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/data/resume";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!prefersReducedMotion.matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));
      }
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll" style={{ "--animate-delay": "0ms" } as React.CSSProperties}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">03</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">About</h2>
          </div>
          <div className="w-12 h-1 bg-orange-500"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="animate-on-scroll" style={{ "--animate-delay": "150ms" } as React.CSSProperties}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{resumeData.bio}</p>
            <p className="text-gray-400">
              Based in Hyderabad, I'm a developer focused on scaling my own SaaS ventures, consulting for high-growth startups,
              and contributing to open-source tooling.
            </p>
          </div>

          {/* Expertise & Experience */}
          <div className="animate-on-scroll" style={{ "--animate-delay": "250ms" } as React.CSSProperties}>
            <h3 className="text-sm font-mono text-orange-500 uppercase mb-6">Expertise</h3>
            <div className="space-y-3">
              {resumeData.expertise.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-sm font-mono text-orange-500 uppercase mt-10 mb-4">Certifications</h3>
            <div className="space-y-2">
              {resumeData.certifications.map((cert, idx) => (
                <p key={idx} className="text-gray-400 text-sm">
                  ✓ {cert}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 pt-12 border-t border-gray-800 animate-on-scroll" style={{ "--animate-delay": "350ms" } as React.CSSProperties}>
          <p className="text-2xl md:text-3xl font-serif italic text-gray-300 text-center">
            "{resumeData.quote}"
          </p>
        </div>
      </div>
    </section>
  );
}
