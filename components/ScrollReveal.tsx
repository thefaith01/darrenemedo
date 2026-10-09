"use client";

import { useEffect } from "react";

/**
 * Observes every [data-reveal] element on the page and adds `is-visible`
 * the first time it enters the viewport. Content is visible by default:
 * elements are only hidden after this runs and adds `.reveal-ready` to
 * <html>, so the page still works if the script never loads. Actual
 * animation lives in globals.css and is skipped under prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (targets.length === 0) return;

    // Anything already on screen is shown immediately, so turning reveals
    // on never makes visible content blink out.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-visible");
    });
    document.documentElement.classList.add("reveal-ready");

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
