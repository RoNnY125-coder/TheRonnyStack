"use client";

import { useEffect, useRef } from "react";
import { usePointerFine } from "@/hooks/usePointerFine";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const fine = usePointerFine();
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const tick = () => {
      tx += (x - tx) * 0.2;
      ty += (y - ty) * 0.2;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      trail.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[80] hidden lg:block">
      <div
        ref={trailRef}
        className="custom-cursor custom-cursor--trail"
      />
      <div ref={cursorRef} className="custom-cursor custom-cursor--mark" />
    </div>
  );
}
