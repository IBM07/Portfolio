"use client";

import { useEffect, useRef } from "react";
import { resumeData } from "@/data/resume";

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const skillCategories = Object.entries(resumeData.skills);
  const midpoint = Math.ceil(skillCategories.length / 2);
  const leftColumn = skillCategories.slice(0, midpoint);
  const rightColumn = skillCategories.slice(midpoint);

  useEffect(() => {
    // 1. Intersection Observer for Scroll Animations
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
    <section id="skills" className="py-20 px-6 bg-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll" style={{ "--animate-delay": "0ms" } as React.CSSProperties}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">02</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Stack & Craft</h2>
          </div>
          <div className="w-12 h-1 bg-orange-500"></div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {leftColumn.map(([category, skills], index) => (
              <div 
                key={category} 
                className="animate-on-scroll"
                style={{ "--animate-delay": `${150 + index * 100}ms` } as React.CSSProperties}
              >
                <h3 className="text-sm font-mono text-orange-500 uppercase mb-4">{category}</h3>
                <div className="space-y-2">
                  {(skills as string[]).map((skill, idx) => (
                    <p key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightColumn.map(([category, skills], index) => (
              <div 
                key={category} 
                className="animate-on-scroll"
                style={{ "--animate-delay": `${250 + index * 100}ms` } as React.CSSProperties}
              >
                <h3 className="text-sm font-mono text-orange-500 uppercase mb-4">{category}</h3>
                <div className="space-y-2">
                  {(skills as string[]).map((skill, idx) => (
                    <p key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
