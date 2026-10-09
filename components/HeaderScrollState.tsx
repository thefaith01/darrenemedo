"use client";

import { useEffect } from "react";

/**
 * Marks <html data-scrolled> once the page has scrolled, so the fixed
 * header can switch from transparent (over the hero) to a solid surface
 * and never sit on top of body text. Styling lives in globals.css.
 */
export function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      if (window.scrollY > 8) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}
