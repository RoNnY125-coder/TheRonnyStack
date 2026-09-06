"use client";

import { MotionConfig } from "motion/react";
import { easeCinematic } from "@/lib/motion";
import { SmoothScroll } from "./SmoothScroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ ease: easeCinematic, duration: 0.7 }}
    >
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
