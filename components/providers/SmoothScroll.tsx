"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.14,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
