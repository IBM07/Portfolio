"use client";

import { useEffect } from "react";

/**
 * One observer + one rAF-throttled scroll handler for the whole page:
 * reveals `.animate-on-scroll` elements, drives the progress bar, and the hero parallax.
 * Only transform/opacity are written, so everything stays on the compositor.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    let observer: IntersectionObserver | undefined;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );
      targets.forEach((el) => observer?.observe(el));
    }

    const bar = document.getElementById("scroll-progress");
    const hero = document.querySelector<HTMLElement>("[data-parallax]");
    // Parallax only on fine-pointer (desktop) devices: skip the cost on phones.
    const parallax = !!hero && !reduceMotion && !window.matchMedia("(pointer: coarse)").matches;

    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
      if (parallax && hero) {
        hero.style.transform = `translate3d(0, ${Math.min(y, 900) * 0.3}px, 0)`;
        hero.style.opacity = `${Math.max(1 - y / 700, 0)}`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />;
}
