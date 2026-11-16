"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function CenteredHeroText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const text = ref.current;
    const hero = text?.closest("section");
    if (!text || !hero) return;

    const center = () => {
      text.style.transform = "none";
      const heroRect = hero.getBoundingClientRect();
      const textRect = text.getBoundingClientRect();
      const offset = heroRect.top + heroRect.height / 2 - textRect.top - textRect.height / 2;
      text.style.transform = `translateY(${offset}px)`;
    };

    const observer = new ResizeObserver(center);
    observer.observe(hero);
    observer.observe(text);
    center();
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
