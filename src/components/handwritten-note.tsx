"use client";

import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import styles from "./handwritten-note.module.css";

const handwriting = localFont({ src: "./fonts/allura-regular.ttf", display: "swap", weight: "400" });

export function HandwrittenNote() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animations: Animation[] = [];
    let visible = false;

    function cancel() {
      animations.forEach(animation => animation.cancel());
      animations = [];
    }

    function write() {
      cancel();
      if (motion.matches || !element) return;
      animations = Array.from(element.querySelectorAll<HTMLElement>("[data-handwriting-line]")).map((line, index) =>
        line.animate([
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)" },
        ], {
          duration: (index === 0 ? 650 : 850) / 1.6,
          delay: index * 700 / 1.6,
          easing: "linear",
          fill: "both",
        })
      );
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !visible) {
        visible = true;
        write();
      } else if (!entry.isIntersecting) {
        visible = false;
      }
    }, { threshold: [0, 0.4] });
    observer.observe(element);

    const restore = () => { if (visible) write(); };
    const motionChanged = () => { if (motion.matches) cancel(); };
    element.addEventListener("pointerenter", write);
    window.addEventListener("pageshow", restore);
    motion.addEventListener("change", motionChanged);
    return () => {
      cancel();
      observer.disconnect();
      element.removeEventListener("pointerenter", write);
      window.removeEventListener("pageshow", restore);
      motion.removeEventListener("change", motionChanged);
    };
  }, []);

  return (
    <p ref={ref} className={`${styles.note} ${handwriting.className}`}>
      <span data-handwriting-line>Du musst nicht</span>{" "}
      <span data-handwriting-line>alles alleine tragen.</span>
    </p>
  );
}
