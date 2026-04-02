import { PROJECTS } from "../data/siteData";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Featured Work
        </p>
        <h2 className="font-bold mb-12" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Things I've Built
        </h2>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {PROJECTS.map((project) => (
            <div key={project.id}
              className="rounded-2xl flex flex-col overflow-hidden transition-all"
              style={{ background: "#141212", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(224,53,53,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>

              {/* Image / preview area */}
              <div className="relative" style={{
                height: 180,
                background: "linear-gradient(160deg, #181a22 0%, #0e0f15 60%, #111010 100%)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {project.image && (
                  <img src={project.image} alt={project.title}
                    style={{ height: "100px", width: "auto", objectFit: "contain" }} />
                )}
                {/* Category badge + year */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(240,236,232,0.75)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold" style={{ color: "rgba(240,236,232,0.45)" }}>
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold" style={{ fontSize: "1.25rem", letterSpacing: "-.02em", lineHeight: 1.2 }}>
                    {project.title}
                  </h3>
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-semibold flex-shrink-0 transition-colors"
                      style={{ color: "rgba(240,236,232,0.45)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ece8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,232,0.45)")}>
                      View
                    </a>
                  )}
                </div>

                {/* Subtitle */}
                <p className="text-sm mb-4" style={{ color: "rgba(240,236,232,0.4)" }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm mb-5 flex-1" style={{ color: "rgba(240,236,232,0.6)", lineHeight: 1.75 }}>
                  {project.description}
                </p>

                {/* Stats boxes */}
                <div className="grid gap-2 mb-4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                  {project.stats.map((s) => (
                    <div key={s.label} className="rounded-xl p-3 flex flex-col gap-1"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(240,236,232,0.35)", fontSize: "0.62rem" }}>
                        {s.label}
                      </span>
                      <span className="font-bold text-xs leading-tight" style={{ color: "#f0ece8" }}>
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-lg font-medium"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,236,232,0.55)", border: "1px solid rgba(255,255,255,0.09)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
