import { EXPERIENCE } from "../data/siteData";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Work History
        </p>
        <h2 className="font-bold mb-12" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(224,53,53,0.6), rgba(224,53,53,0.05))" }} />

          <div className="flex flex-col gap-10 pl-10">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 flex-shrink-0"
                  style={{ background: "#111010", borderColor: "#e03535", marginLeft: "-6px" }} />

                <div className="rounded-2xl p-6 transition-all"
                  style={{ background: "#1a1818", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(224,53,53,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>

                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="font-bold text-base mb-0.5" style={{ letterSpacing: "-.01em" }}>{job.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: "#e03535" }}>
                        {job.company}
                        <span className="font-normal ml-2" style={{ color: "rgba(240,236,232,0.4)" }}>
                          · {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,236,232,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {job.period}
                    </span>
                  </div>

                  <ul className="text-sm mb-4 flex flex-col gap-1.5"
                    style={{ fontSize: "0.95rem", color: "rgba(240,236,232,0.6)", lineHeight: 1.8 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span style={{ color: "#e03535", flexShrink: 0, marginTop: "2px" }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(224,53,53,0.1)", color: "rgba(224,53,53,0.9)", border: "1px solid rgba(224,53,53,0.2)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
