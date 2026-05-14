"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; size: number; speed: number; opacity: number;
  vx: number; vy: number; char: string;
}

export function HeroParticles(_props: { gradient: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = ["『", "』", "。", "、", "·", "◆", "◇", "○", "●", " ", " ", " ", " "];
    const particles: Particle[] = [];
    const max = 30;

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
        size: Math.random() * 14 + 8,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.05,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        char: chars[Math.floor(Math.random() * chars.length)],
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
        ctx!.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx!.font = `${p.size}px "Noto Serif SC", serif`;
        ctx!.fillText(p.char, p.x, p.y);
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-10" aria-hidden="true" />;
}
