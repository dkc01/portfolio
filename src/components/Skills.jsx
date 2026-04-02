import { SKILLS } from "../data/siteData";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          What I Work With
        </p>
        <h2 className="font-bold mb-12" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Technical Skills
        </h2>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {SKILLS.map(({ category, accent, skills }) => (
            <div key={category} className="rounded-2xl p-6"
              style={{ background: "#141212", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${accent}44`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>

              {/* Title + accent bar */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold text-sm tracking-wide" style={{ color: "#f0ece8", whiteSpace: "nowrap" }}>
                  {category}
                </span>
                <div className="flex-1" style={{ height: 2, borderRadius: 2, background: accent, opacity: 0.7 }} />
              </div>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-lg"
                    style={{
                      background: `${accent}12`,
                      color: "rgba(240,236,232,0.75)",
                      border: `1px solid ${accent}30`,
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
