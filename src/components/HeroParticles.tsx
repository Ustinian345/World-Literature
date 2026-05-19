"use client";

import { useEffect, useRef, useMemo } from "react";

interface Particle {
  x: number; y: number; size: number; speed: number; opacity: number;
  vx: number; vy: number; char: string; color: string;
}

function extractColors(gradient: string): string[] {
  // Extract Tailwind gradient color classes and convert to CSS colors
  const colorMap: Record<string, string> = {
    red: "rgba(255,180,170,",
    rose: "rgba(255,180,190,",
    amber: "rgba(255,210,150,",
    orange: "rgba(255,190,140,",
    yellow: "rgba(255,230,160,",
    green: "rgba(180,220,180,",
    emerald: "rgba(160,220,180,",
    teal: "rgba(160,210,210,",
    cyan: "rgba(160,210,230,",
    blue: "rgba(170,190,240,",
    indigo: "rgba(180,170,240,",
    purple: "rgba(210,170,230,",
    pink: "rgba(240,180,200,",
    stone: "rgba(220,210,200,",
    slate: "rgba(200,200,210,",
    gray: "rgba(210,210,210,",
    warm: "rgba(240,220,190,",
  };

  const classes = gradient.split(/\s+/);
  const colors: string[] = [];

  for (const cls of classes) {
    for (const [key, rgba] of Object.entries(colorMap)) {
      if (cls.includes(key)) {
        colors.push(rgba);
        break;
      }
    }
  }

  // Default to warm white if no colors found
  if (colors.length === 0) return ["rgba(255,240,220,", "rgba(255,220,180,"];
  // Pad to at least 2 colors
  while (colors.length < 2) colors.push(colors[0]);
  return colors.slice(0, 3);
}

export function HeroParticles({ gradient }: { gradient: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = useMemo(() => extractColors(gradient), [gradient]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = ["『", "』", "。", "、", "·", "◆", "◇", "○", "●", " ", " ", " ", " "];
    const particles: Particle[] = [];
    const max = 35;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < max; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 16 + 8,
        speed: Math.random() * 0.3 + 0.08,
        opacity: Math.random() * 0.25 + 0.04,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        char: chars[Math.floor(Math.random() * chars.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -20) { p.y = canvas!.height + 20; p.x = Math.random() * canvas!.width; }
        if (p.x < -20) p.x = canvas!.width + 20;
        if (p.x > canvas!.width + 20) p.x = -20;
        ctx!.fillStyle = `${p.color}${p.opacity})`;
        ctx!.font = `${p.size}px "Noto Serif SC", serif`;
        ctx!.fillText(p.char, p.x, p.y);
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, [colors]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-10" aria-hidden="true" />;
}
