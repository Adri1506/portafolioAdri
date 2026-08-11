"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * GeometricNetworkBackground — SVG animado: vértices forman la letra "AZ".
 * Ciclo: Formación → Estructura → Deformación → Repetir.
 */

interface Vertex {
  x: number;
  y: number;
  tx: number;
  ty: number;
  ox: number;
  oy: number;
  radius: number;
  opacity: number;
  speed: number;
  delay: number;
  dx: number;
  dy: number;
}

interface Edge {
  a: number;
  b: number;
  baseOpacity: number;
  maxDist: number;
}

interface Props {
  className?: string;
  opacity?: number;
}

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(1, Math.max(0, t));
}

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const FORM_MS = 3500;
const HOLD_MS = 5000;
const DEFORM_MS = 5500;
const CYCLE_MS = FORM_MS + HOLD_MS + DEFORM_MS;

/**
 * Genera puntos a lo largo de una línea entre dos puntos.
 */
function linePoints(
  x1: number, y1: number,
  x2: number, y2: number,
  count: number
): Array<{ x: number; y: number }> {
  const pts: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    pts.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
  }
  return pts;
}

/**
 * Genera la forma de la letra "AZ" como array de puntos.
 */
function azShape(ox: number, oy: number, size: number): Array<{ x: number; y: number }> {
  const w = size;
  const h = size * 1.3;
  const pts: Array<{ x: number; y: number }> = [];

  // Letra A
  const aLeft = ox;
  const aRight = ox + w * 0.42;
  const aTop = oy;
  const aBottom = oy + h;
  const aMid = oy + h * 0.55;

  // A: izquierda (base → cima)
  pts.push(...linePoints(aLeft, aBottom, aLeft + w * 0.21, aTop, 6));
  // A: derecha (cima → base)
  pts.push(...linePoints(aLeft + w * 0.21, aTop, aRight, aBottom, 6));
  // A: barra horizontal
  pts.push(...linePoints(aLeft + w * 0.06, aMid, aRight - w * 0.06, aMid, 4));

  // Letra Z (desplazada a la derecha)
  const zOff = w * 0.52;
  const zLeft = ox + zOff;
  const zRight = ox + zOff + w * 0.42;
  const zTop = oy;
  const zBottom = oy + h;

  // Z: barra superior
  pts.push(...linePoints(zLeft, zTop, zRight, zTop, 5));
  // Z: diagonal
  pts.push(...linePoints(zRight, zTop, zLeft, zBottom, 7));
  // Z: barra inferior
  pts.push(...linePoints(zLeft, zBottom, zRight, zBottom, 5));

  return pts;
}

export default function GeometricNetworkBackground({
  className = "",
  opacity = 0.7,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const vertsRef = useRef<Vertex[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const rafRef = useRef<number>(0);
  const tRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const reducedRef = useRef(false);

  const build = useCallback((w: number, h: number) => {
    const rand = seeded(2026);

    // Tamaño de la figura AZ
    const figSize = Math.min(w, h) * 0.28;
    const figOx = w * 0.72 - figSize * 0.5;
    const figOy = h * 0.42 - figSize * 1.3 * 0.5;

    // Generar puntos de la forma AZ
    const shapePts = azShape(figOx, figOy, figSize);

    // Agregar algunos vértices dispersos alrededor
    const extraCount = w > 768 ? 8 : w > 480 ? 5 : 3;
    const spread = Math.min(w, h) * 0.35;
    const cx = w * 0.72;
    const cy = h * 0.42;

    const allTargetPoints = [...shapePts];

    for (let i = 0; i < extraCount; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = spread * (0.6 + rand() * 0.4);
      allTargetPoints.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
      });
    }

    const verts: Vertex[] = allTargetPoints.map((pt, i) => {
      const startAngle = rand() * Math.PI * 2;
      const startDist = rand() * spread * 0.1;
      return {
        x: cx + Math.cos(startAngle) * startDist,
        y: cy + Math.sin(startAngle) * startDist,
        tx: pt.x,
        ty: pt.y,
        ox: pt.x,
        oy: pt.y,
        radius: 1.8 + rand() * 1.8,
        opacity: 0.5 + rand() * 0.45,
        speed: 0.5 + rand() * 0.5,
        delay: rand() * 1500,
        dx: 0,
        dy: 0,
      };
    });

    // Conexiones: entre vértices cercanos
    const edges: Edge[] = [];
    const maxConn = figSize * 0.35;
    for (let i = 0; i < verts.length; i++) {
      for (let j = i + 1; j < verts.length; j++) {
        const ddx = verts[i].tx - verts[j].tx;
        const ddy = verts[i].ty - verts[j].ty;
        const d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < maxConn) {
          edges.push({
            a: i,
            b: j,
            baseOpacity: 0.12 + (1 - d / maxConn) * 0.25,
            maxDist: maxConn,
          });
        }
      }
    }

    vertsRef.current = verts;
    edgesRef.current = edges;
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const onMove = (e: MouseEvent) => {
      if (isTouch) return;
      const r = svg.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => (mouseRef.current = null);

    if (!isTouch) {
      svg.addEventListener("mousemove", onMove);
      svg.addEventListener("mouseleave", onLeave);
    }

    const r = svg.getBoundingClientRect();
    const w = r.width || 900;
    const h = r.height || 700;
    build(w, h);

    let prev = performance.now();

    const loop = (now: number) => {
      const dt = now - prev;
      prev = now;
      tRef.current += dt;
      const elapsed = tRef.current % CYCLE_MS;

      const vs = vertsRef.current;
      const es = edgesRef.current;

      if (reducedRef.current) {
        for (const v of vs) {
          v.x = v.ox;
          v.y = v.oy;
        }
      } else {
        for (const v of vs) {
          const adj = Math.max(0, elapsed - v.delay);

          if (adj < FORM_MS) {
            const p = ease(Math.min(1, adj / FORM_MS));
            v.x = lerp(v.x, v.tx, p * 0.04 * v.speed + 0.008);
            v.y = lerp(v.y, v.ty, p * 0.04 * v.speed + 0.008);
          } else if (adj < FORM_MS + HOLD_MS) {
            const ht = (adj - FORM_MS) / 1000;
            const bx = Math.sin(ht * 0.8 + v.delay * 0.001) * 3;
            const by = Math.cos(ht * 0.6 + v.delay * 0.002) * 2;
            v.x = lerp(v.x, v.ox + bx, 0.025);
            v.y = lerp(v.y, v.oy + by, 0.025);
          } else {
            const dt2 = adj - FORM_MS - HOLD_MS;
            const p2 = ease(Math.min(1, dt2 / DEFORM_MS));

            if (v.dx === 0 && v.dy === 0) {
              const rd = seeded(v.delay + 777);
              const a = rd() * Math.PI * 2;
              const amp = 20 + rd() * 35;
              v.dx = Math.cos(a) * amp;
              v.dy = Math.sin(a) * amp;
            }

            v.x = lerp(v.ox, v.ox + v.dx, p2);
            v.y = lerp(v.oy, v.oy + v.dy, p2);

            if (p2 >= 1) {
              v.dx = 0;
              v.dy = 0;
            }
          }

          if (mouseRef.current) {
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const ddx = v.x - mx;
            const ddy = v.y - my;
            const d = Math.sqrt(ddx * ddx + ddy * ddy);
            if (d < 120 && d > 0) {
              const f = (1 - d / 120) * 15;
              v.x += (ddx / d) * f;
              v.y += (ddy / d) * f;
            }
          }
        }
      }

      const circles = svg.querySelectorAll<SVGCircleElement>("circle.v");
      const lines = svg.querySelectorAll<SVGLineElement>("line.e");

      for (let i = 0; i < vs.length; i++) {
        if (circles[i]) {
          circles[i].setAttribute("cx", vs[i].x.toFixed(1));
          circles[i].setAttribute("cy", vs[i].y.toFixed(1));
        }
      }
      for (let i = 0; i < es.length; i++) {
        const e = es[i];
        const va = vs[e.a];
        const vb = vs[e.b];
        if (lines[i]) {
          lines[i].setAttribute("x1", va.x.toFixed(1));
          lines[i].setAttribute("y1", va.y.toFixed(1));
          lines[i].setAttribute("x2", vb.x.toFixed(1));
          lines[i].setAttribute("y2", vb.y.toFixed(1));
          const ddx = va.x - vb.x;
          const ddy = va.y - vb.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          const f = Math.max(0, 1 - d / e.maxDist);
          lines[i].setAttribute("opacity", (e.baseOpacity * f).toFixed(3));
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (!isTouch) {
        svg.removeEventListener("mousemove", onMove);
        svg.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [build]);

  const vs = vertsRef.current;
  const es = edgesRef.current;

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${className}`} style={{ opacity }} aria-hidden="true">
      <svg
        ref={svgRef}
        className="h-full w-full"
      >
        {es.map((e, i) => (
          <line
            key={`e-${i}`}
            className="e"
            x1={0}
            y1={0}
            x2={0}
            y2={0}
            stroke="var(--constellation-line)"
            strokeWidth="1"
            opacity={e.baseOpacity}
          />
        ))}
        {vs.map((v, i) => (
          <circle
            key={`v-${i}`}
            className="v"
            cx={v.x}
            cy={v.y}
            r={v.radius}
            fill="var(--constellation-star)"
            opacity={v.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
