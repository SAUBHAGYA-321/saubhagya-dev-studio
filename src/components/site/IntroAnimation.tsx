import { useEffect, useRef, useState } from "react";

/**
 * Cinematic opening animation: animated particle field + name reveal.
 * Plays once per browser session.
 */
export function IntroAnimation() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "leaving">("hidden");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem("intro-played")) return;
    window.sessionStorage.setItem("intro-played", "1");
    setPhase("playing");
    const leave = window.setTimeout(() => setPhase("leaving"), 2600);
    const done = window.setTimeout(() => setPhase("hidden"), 3500);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  useEffect(() => {
    if (phase === "hidden") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frame = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.9,
      vy: (Math.random() - 0.5) * 0.9,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]!;
          const b = dots[j]!;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(129,140,248,${(1 - dist / 130) * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = "rgba(168,140,255,0.85)";
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-[900ms] ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-70" />
      <div className="animate-rise relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary">
          Portfolio
        </p>
        <h2 className="text-gradient animate-sheen mt-4 text-4xl font-bold sm:text-6xl">
          Saubhagya Singh
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Full Stack Developer &middot; AI Enthusiast
        </p>
      </div>
    </div>
  );
}
