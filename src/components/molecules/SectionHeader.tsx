"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeaderProps {
  number: string; // "01.", "02.", etc.
  title: string; // "Sobre Mí", "Proyectos", etc.
  className?: string;
}

const underlineStyle = { background: "var(--gradient-underline)" };

export default function SectionHeader({
  number,
  title,
  className,
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} aria-label={`${number} ${title}`}>
        <span aria-hidden="true" className="block font-mono text-sm text-primary">
          {number}
        </span>
        <h2 aria-hidden="true" className="mt-2 font-display text-h2">
          {title}
        </h2>
        <div
          aria-hidden="true"
          className="mt-4 h-[2px] w-16"
          style={underlineStyle}
        />
      </div>
    );
  }

  return (
    <div className={className} aria-label={`${number} ${title}`}>
      <motion.span
        aria-hidden="true"
        className="block font-mono text-sm text-primary"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
      >
        {number}
      </motion.span>
      <motion.h2
        aria-hidden="true"
        className="mt-2 font-display text-h2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>
      <motion.div
        aria-hidden="true"
        className="mt-4 h-[2px] w-16"
        style={underlineStyle}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}