"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const lenis = useLenis((instance) => {
    setProgress(instance.progress);
  });

  useEffect(() => {
    if (lenis) return;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 right-0 bottom-0 z-40 hidden w-px bg-paper/15 md:block"
    >
      <div
        className="w-px origin-top bg-acid"
        style={{ height: `${Math.max(progress * 100, 2)}%` }}
      />
    </div>
  );
}
