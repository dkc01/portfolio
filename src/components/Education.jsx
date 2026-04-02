import { EDUCATION } from "../data/siteData";

export default function Education() {
  return (
    <section id="education" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Background
        </p>
        <h2 className="font-bold mb-12" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Education
        </h2>

        {EDUCATION.map((edu, i) => (
          <div key={i} className="rounded-2xl p-8"
            style={{ background: "#141212", border: "1px solid rgba(224,53,53,0.2)", boxShadow: "0 0 40px rgba(160,28,28,0.07)" }}>

            {/* Top row */}
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <h3 className="font-bold mb-1" style={{ fontSize: "1.35rem", letterSpacing: "-.02em" }}>
                  {edu.school}
                </h3>
                <p style={{ color: "#e03535", fontWeight: 600, fontSize: "0.95rem" }}>
                  {edu.degree}
                </p>
                <p style={{ color: "rgba(240,236,232,0.45)", fontSize: "0.85rem", marginTop: "2px" }}>
                  {edu.minor}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                  style={{ background: "rgba(224,53,53,0.12)", color: "#e03535", border: "1px solid rgba(224,53,53,0.25)" }}>
                  {edu.period}
                </span>
                <span className="text-xs" style={{ color: "rgba(240,236,232,0.4)" }}>
                  {edu.location}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "1.25rem 0" }} />

            {/* Highlights + Coursework */}
            <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 2fr" }}>
              {/* Highlights */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(240,236,232,0.35)" }}>Highlights</p>
                <ul className="flex flex-col gap-2">
                  {edu.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2"
                      style={{ fontSize: "0.9rem", color: "rgba(240,236,232,0.75)", lineHeight: 1.6 }}>
                      <span style={{ color: "#e03535", fontSize: "7px", marginTop: "7px", flexShrink: 0 }}>●</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coursework */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(240,236,232,0.35)" }}>Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <span key={c} className="text-xs px-3 py-1.5 rounded-lg font-medium"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,236,232,0.65)", border: "1px solid rgba(255,255,255,0.09)" }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
