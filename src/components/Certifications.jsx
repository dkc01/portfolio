import { CERTIFICATIONS } from "../data/siteData";

const ISSUER_COLORS = {
  Coursera: { bg: "rgba(0,86,210,0.12)", text: "#60a5fa", border: "rgba(0,86,210,0.25)" },
  Udemy:    { bg: "rgba(163,38,210,0.12)", text: "#c084fc", border: "rgba(163,38,210,0.25)" },
  default:  { bg: "rgba(224,53,53,0.12)", text: "#e03535", border: "rgba(224,53,53,0.25)" },
};

function CertIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" stroke="#e03535" strokeWidth="1.8" fill="rgba(224,53,53,0.08)" />
      <polyline points="8,14 12,18 20,10" stroke="#e03535" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Credentials
        </p>
        <h2 className="font-bold mb-12" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Certifications
        </h2>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {CERTIFICATIONS.map((cert, i) => {
            const colors = ISSUER_COLORS[cert.issuer] || ISSUER_COLORS.default;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-5 transition-all"
                style={{ background: "#1a1818", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(224,53,53,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <CertIcon />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold" style={{ fontSize: "1.05rem", letterSpacing: "-.01em" }}>
                      {cert.title}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,236,232,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {cert.date}
                    </span>
                  </div>

                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                    {cert.issuer}
                  </span>

                  <p className="text-sm mb-4" style={{ color: "rgba(240,236,232,0.55)", lineHeight: 1.7 }}>
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(224,53,53,0.1)", color: "rgba(224,53,53,0.85)", border: "1px solid rgba(224,53,53,0.2)" }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.verifyUrl && (
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold flex-shrink-0 transition-all"
                        style={{ color: "rgba(240,236,232,0.45)", textDecoration: "none" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e03535")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,236,232,0.45)")}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                        </svg>
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
