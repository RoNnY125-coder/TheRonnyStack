"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function HeroTitle() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 520], [0, -64]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0.22]);

  return (
    <motion.h1
      className="hero-title uppercase"
      style={{ y, opacity }}
    >
      <span>The Ronny</span>
      <span className="block">Stack</span>
    </motion.h1>
  );
}
