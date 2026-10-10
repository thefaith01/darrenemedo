"use client";

import { useEffect } from "react";

/**
 * Two IntersectionObserver jobs, no scroll listeners:
 *
 * 1. Watches #top-sentinel (rendered in app/layout.tsx). Once it leaves the
 *    viewport, <html data-scrolled> is set so the fixed header switches from
 *    transparent (over the hero) to a solid surface.
 * 2. Watches every section the header nav links to and marks the matching
 *    link with aria-current="true" while that section is in the middle of
 *    the viewport. Styling for both lives in globals.css.
 */
export function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const observers: IntersectionObserver[] = [];

    const sentinel = document.getElementById("top-sentinel");
    if (sentinel) {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) root.removeAttribute("data-scrolled");
        else root.setAttribute("data-scrolled", "");
      });
      io.observe(sentinel);
      observers.push(io);
    }

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('[data-nav-link][href^="#"]')
    );
    const sections = links
      .map((a) => document.getElementById(a.getAttribute("href")!.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length) {
      const spy = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id = `#${entry.target.id}`;
            links.forEach((a) => {
              if (a.getAttribute("href") === id) a.setAttribute("aria-current", "true");
              else a.removeAttribute("aria-current");
            });
          }
        },
        // A thin band across the middle of the viewport: whichever section
        // crosses it is the one being read.
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach((s) => spy.observe(s));
      observers.push(spy);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return null;
}
