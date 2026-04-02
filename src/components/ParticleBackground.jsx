import { useEffect, useRef } from "react";

const NODE_COUNT = 42;
const FOV = 400;
const PULSE_SPEED = 0.016;
const PULSE_SPAWN_RATE = 0.025;
const EDGE_DIST = 320;

function project(x, y, z, w, h) {
  const scale = FOV / (FOV + z);
  return { sx: x * scale + w / 2, sy: y * scale + h / 2, scale };
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: (Math.random() - 0.5) * W * 1.3,
      y: (Math.random() - 0.5) * H * 1.3,
      z: (Math.random() - 0.5) * 500,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      vz: (Math.random() - 0.5) * 0.15,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Build edges once
    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dz = nodes[i].z - nodes[j].z;
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < EDGE_DIST) {
          edges.push({ a: i, b: j });
        }
      }
    }

    const pulses = [];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy; n.z += n.vz;
        if (Math.abs(n.x) > W * 0.75)  n.vx *= -1;
        if (Math.abs(n.y) > H * 0.75)  n.vy *= -1;
        if (Math.abs(n.z) > 280)        n.vz *= -1;
        n.pulsePhase += 0.022;
      }

      if (Math.random() < PULSE_SPAWN_RATE && edges.length > 0) {
        const edge = edges[Math.floor(Math.random() * edges.length)];
        pulses.push({ edge, t: 0, dir: Math.random() < 0.5 ? 1 : -1 });
      }

      const proj = nodes.map((n) => project(n.x, n.y, n.z, W, H));

      // Edges
      for (const { a, b } of edges) {
        const pa = proj[a], pb = proj[b];
        const avgScale = (pa.scale + pb.scale) / 2;
        const alpha = avgScale * 0.18;
        ctx.beginPath();
        ctx.moveTo(pa.sx, pa.sy);
        ctx.lineTo(pb.sx, pb.sy);
        ctx.strokeStyle = `rgba(200,50,50,${alpha.toFixed(3)})`;
        ctx.lineWidth = avgScale * 0.8;
        ctx.stroke();
      }

      // Pulses — simple bright circle, no gradient
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += PULSE_SPEED;
        if (p.t > 1) { pulses.splice(i, 1); continue; }

        const { a, b } = p.edge;
        const ta = p.dir > 0 ? p.t : 1 - p.t;
        const px3 = nodes[a].x + (nodes[b].x - nodes[a].x) * ta;
        const py3 = nodes[a].y + (nodes[b].y - nodes[a].y) * ta;
        const pz3 = nodes[a].z + (nodes[b].z - nodes[a].z) * ta;
        const pp = project(px3, py3, pz3, W, H);

        const fade = 1 - Math.abs(p.t - 0.5) * 2;
        const size = pp.scale * 5;
        ctx.beginPath();
        ctx.arc(pp.sx, pp.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,110,110,${(fade * 0.85).toFixed(3)})`;
        ctx.fill();
      }

      // Nodes — simple glow via two circles (no ctx.filter)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const p = proj[i];
        const glow = Math.sin(n.pulsePhase) * 0.5 + 0.5;
        const r = p.scale * (3 + glow * 2);

        // Soft outer ring
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,60,60,${(0.08 + glow * 0.07).toFixed(3)})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,${140 + Math.round(glow * 60)},${140 + Math.round(glow * 40)},${(0.7 + glow * 0.25).toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.7,
      }}
    />
  );
}
