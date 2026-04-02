import { ABOUT } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden"
      style={{ padding: "6rem 8%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

      <div className="absolute pointer-events-none" style={{
        right: -80, top: "50%", transform: "translateY(-50%)",
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(140,20,20,0.14) 0%, transparent 65%)",
      }} />

      <div className="max-w-3xl" style={{ position: "relative", zIndex: 1 }}>
        <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#e03535" }}>
          About Me
        </p>
        <h2 className="font-bold mb-8" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          {ABOUT.intro}
        </h2>
        <div className="mb-10" style={{ fontSize: "clamp(1rem,1.25vw,1.2rem)", color: "rgba(240,236,232,0.6)", lineHeight: 1.9 }}>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* Highlights */}
        <div className="flex gap-4 flex-wrap">
          {ABOUT.highlights.map((h) => (
            <div key={h.label} className="rounded-xl px-5 py-4"
              style={{ background: "#1a1818", border: "1px solid rgba(255,255,255,0.08)", minWidth: 130 }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "rgba(240,236,232,0.4)" }}>
                {h.label}
              </p>
              <p className="font-bold text-sm" style={{ color: "#f0ece8", letterSpacing: "-0.01em" }}>{h.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
