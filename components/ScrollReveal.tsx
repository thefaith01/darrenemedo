"use client";

import { useEffect } from "react";

/**
 * Observes every [data-reveal] element on the page and adds `is-visible`
 * the first time it enters the viewport. Actual animation lives in
 * globals.css and is skipped entirely under prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
