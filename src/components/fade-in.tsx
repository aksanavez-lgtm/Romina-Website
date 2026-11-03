"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function FadeIn({ children, rise = false, write = false }: { children: ReactNode; rise?: boolean; write?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const animation = element.animate(write
      ? [{ opacity: 0, clipPath: "inset(0 100% 0 0)", transform: rise ? "translateY(40px)" : "none" }, { opacity: 1, clipPath: "inset(-10% -15% -10% 0)", transform: rise ? "translateY(0)" : "none" }]
      : rise
      ? [{ opacity: 0, transform: "translateY(40px)" }, { opacity: 1, transform: "translateY(0)" }]
      : [{ opacity: 0 }, { opacity: 1 }], {
      duration: write ? 2750 : rise ? 1400 : 2200,
      easing: "ease-in-out",
      fill: "both",
    });
    animation.pause();

    let hasStarted = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.2 && !hasStarted) {
        hasStarted = true;
        animation.play();
      } else if (!entry.isIntersecting) {
        hasStarted = false;
        animation.pause();
        animation.currentTime = 0;
      }
    }, { threshold: [0, 0.2] });
    observer.observe(element);

    const showImmediately = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        animation.cancel();
      }
    };
    reducedMotion.addEventListener("change", showImmediately);

    return () => {
      observer.disconnect();
      animation.cancel();
      reducedMotion.removeEventListener("change", showImmediately);
    };
  }, [rise, write]);

  return <div ref={ref}>{children}</div>;
}
