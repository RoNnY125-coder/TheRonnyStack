"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { easeCinematic } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, delay, ease: easeCinematic }}
    >
      {children}
    </motion.div>
  );
}
