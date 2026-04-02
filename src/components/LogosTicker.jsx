import { TECH_STACK } from "../data/siteData";

export default function LogosTicker() {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "2.8rem 5%" }}>
      <p className="text-center mb-8 text-sm" style={{ color: "rgba(240,236,232,0.55)", letterSpacing: ".01em" }}>
        Technologies I work with
      </p>

      <div className="overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to right,#111010,transparent)", zIndex: 2 }} />
        <div className="absolute inset-y-0 right-0 w-20 pointer-events-none"
          style={{ background: "linear-gradient(to left,#111010,transparent)", zIndex: 2 }} />

        <div className="flex gap-8 items-center animate-scroll" style={{ width: "max-content" }}>
          {TECH_STACK.map((tech, i) => (
            <span key={i}
              className="font-bold text-sm whitespace-nowrap px-4 py-1.5 rounded-full"
              style={{ color: "rgba(240,236,232,0.75)", border: "1px solid rgba(255,255,255,0.09)" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
