"use client";

import { useEffect, useRef, useState } from "react";
import { resumeData } from "@/data/resume";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalSlides = resumeData.projects.length;

  useEffect(() => {
    // Scroll-triggered animations via IntersectionObserver
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

  useEffect(() => {
    // Auto-advance carousel every 4 seconds, unless hovered
    if (isHovered || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section id="projects" className="py-20 px-6 bg-black overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto relative group">
        {/* Section Header */}
        <div 
          className="mb-12 animate-on-scroll" 
          style={{ "--animate-delay": "0ms" } as React.CSSProperties}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-orange-500 font-mono text-sm">01</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Selected Work</h2>
          </div>
          <div className="w-12 h-1 bg-orange-500"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative animate-on-scroll"
          style={{ "--animate-delay": "200ms" } as React.CSSProperties}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Projects Track Mask */}
          <div className="overflow-hidden bg-black py-4">
            {/* Flex track that translates precisely to the current slide */}
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {resumeData.projects.map((project, idx) => (
                <div key={idx} className="w-full shrink-0 flex-none md:p-2">
                  <div className="max-w-4xl mx-auto h-full"> 
                    <ProjectCard {...project} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls (Arrows) */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/80 border border-gray-700 text-white p-3 rounded-full hover:bg-orange-500 hover:text-black z-10 hidden md:block"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900/80 border border-gray-700 text-white p-3 rounded-full hover:bg-orange-500 hover:text-black z-10 hidden md:block"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {resumeData.projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-orange-500" : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
