"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { usePointerFine } from "@/hooks/usePointerFine";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 10,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = usePointerFine();
  const reduced = usePrefersReducedMotion();
  const active = fine && !reduced;

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate3d(0,0,0)";
  };

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!active) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate3d(${(dx / rect.width) * strength}px, ${(dy / rect.height) * strength}px, 0)`;
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn("inline-flex will-change-transform", className)}
      style={{ transition: active ? "transform 0.28s cubic-bezier(0.16,1,0.3,1)" : undefined }}
    >
      {children}
    </div>
  );
}
