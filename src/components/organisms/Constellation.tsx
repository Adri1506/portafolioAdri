"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// PRNG — Linear Congruential Generator (deterministic)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

// Desktop-only gate (lg breakpoint = 1024px) — parallax is skipped on mobile
// to save CPU. SSR-safe: starts as false and syncs on mount.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

interface Node {
  x: number;
  y: number;
  r: number;
  isStar: boolean;
  delay: number;
}

interface Line {
  x1: number; y1: number;
  x2: number; y2: number;
  opacity: number;
}

export default function Constellation() {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const applyParallax = isDesktop && !shouldReduceMotion;
  
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1000], [0, 60]);
  
  // Generate deterministic data
  const rand = seededRandom(2026);
  const nodes: Node[] = [];
  const lines: Line[] = [];
  
  // Generate 75 nodes
  const nodeCount = 75;
  for (let i = 0; i < nodeCount; i++) {
    const isStar = i < Math.floor(nodeCount * 0.12); // ~12% stars
    nodes.push({
      x: rand() * 1440,
      y: rand() * 900,
      r: isStar ? 1.5 + rand() * 1.5 : 1 + rand() * 1.5,
      isStar,
      delay: rand() * 7,
    });
  }
  
  // Generate connections (pairs with distance < 110)
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        lines.push({
          x1: nodes[i].x, y1: nodes[i].y,
          x2: nodes[j].x, y2: nodes[j].y,
          opacity: 0.1 + rand() * 0.15,
        });
      }
    }
  }
  
  return (
    <div
      className="constellation"
      aria-hidden="true"
    >
      <motion.div
        style={applyParallax ? { translateY } : {}}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          {/* Connections */}
          {lines.map((line, i) => (
            <line
              key={`l-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="var(--constellation-line)"
              strokeWidth="0.75"
              opacity={line.opacity}
            />
          ))}
          {/* Nodes */}
          {nodes.map((node, i) => (
            <circle
              key={`n-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.isStar ? "var(--constellation-star)" : "var(--constellation-node)"}
              opacity={node.isStar ? 0.6 + (node.delay / 7) * 0.35 : 0.25 + (node.delay / 7) * 0.35}
              className={node.isStar ? "star" : undefined}
              style={node.isStar ? { animationDelay: `${node.delay}s` } : undefined}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
