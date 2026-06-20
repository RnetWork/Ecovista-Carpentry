"use client";

import { useEffect, useRef } from "react";

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: React.ElementType;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay ? `fade-up-d${delay}` : "";

  return (
    <Tag ref={ref} className={`fade-up ${delayClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
