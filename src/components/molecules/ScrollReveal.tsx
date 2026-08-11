"use client";

import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // default: 0
  direction?: Direction; // default: "up"
}

function getOffset(direction: Direction) {
  switch (direction) {
    case "down":
      return { x: 0, y: -24 };
    case "left":
      return { x: 24, y: 0 };
    case "right":
      return { x: -24, y: 0 };
    case "up":
    default:
      return { x: 0, y: 24 };
  }
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = getOffset(direction);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}