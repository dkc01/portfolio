import { SITE } from "../data/siteData";

const SOCIAL_BUTTONS = [
  {
    label: "Email",
    href: "mailto:divaskc6@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/divaskc",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/dkc01",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const ABOUT_BULLETS = [
  "CS student at Ramapo College minoring in Data Science, focused on building intelligent systems with machine learning and data analytics.",
  "Currently working as an Institutional Research Intern — analyzing enrollment, retention, and graduation data across 10+ academic departments.",
  "Building full-stack AI products around RAG, semantic search, and embedding pipelines, with hands-on experience shipping to production.",
  "Seeking internships and early-career opportunities in ML, data analytics, or software engineering to build impactful AI-driven products.",
];

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Background glows */}
      <div className="absolute pointer-events-none" style={{
        top: "5%", right: "10%", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(160,28,28,0.16) 0%, transparent 65%)", zIndex: 0,
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "10%", left: "-5%", width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(140,20,20,0.1) 0%, transparent 65%)", zIndex: 0,
      }} />

      {/* Main content — fills remaining height, vertically centers */}
      <div className="relative flex-1 grid items-center"
        style={{
          gridTemplateColumns: "1fr 1.1fr",
          padding: "140px 5% 40px 10%",
          gap: "3rem",
          zIndex: 1,
        }}>

        {/* LEFT: name + info — bottom-aligned within column */}
        <div className="flex flex-col justify-end fade-up" style={{ paddingBottom: "2rem" }}>
          <h1 className="font-bold leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem,5vw,5.5rem)", letterSpacing: "-0.02em", fontFamily: "'Space Mono', monospace" }}>
            Divas{" "}
            <span style={{ color: "#e03535" }}>KC</span>
          </h1>

          <p className="mb-5"
            style={{ fontSize: "clamp(0.95rem,1.4vw,1.25rem)", color: "#e03535", lineHeight: 1.9, maxWidth: 520, fontFamily: "'Space Mono', monospace", fontWeight: 400 }}>
            CS Student @ Ramapo&nbsp;|&nbsp;ML &amp; Data Engineer&nbsp;|<br />
            Research Intern&nbsp;|&nbsp;Full-Stack AI Builder
          </p>

          <div className="flex items-center gap-2 mb-8"
            style={{ color: "rgba(240,236,232,0.45)", fontSize: "0.85rem", fontFamily: "'Space Mono', monospace" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Mahwah, NJ
          </div>

          <div className="flex gap-3 flex-wrap">
            {SOCIAL_BUTTONS.map(({ label, href, icon }) => (
              <a key={label} href={href}
                download={label === "Resume" ? "resume.pdf" : undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(240,236,232,0.7)",
                  minWidth: 68,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(224,53,53,0.5)";
                  e.currentTarget.style.color = "#f0ece8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(240,236,232,0.7)";
                }}>
                {icon}
                <span className="text-xs font-semibold">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: about card */}
        <div className="flex items-center justify-center">
          <div className="rounded-2xl p-7 w-full"
            style={{
              background: "rgba(20,18,18,0.9)",
              border: "1px solid rgba(224,53,53,0.22)",
              boxShadow: "0 0 50px rgba(160,28,28,0.1)",
              backdropFilter: "blur(8px)",
            }}>
            {/* Headshot */}
            <div className="flex justify-center mb-6">
              <div style={{
                width: 110, height: 110, borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(200,50,50,0.5)",
                boxShadow: "0 0 0 5px rgba(160,28,28,0.1)",
                background: "#1a0e0e",
              }}>
                <img src="/Gemini_Generated_Image_ofe19tofe19tofe1.png" alt="Divas KC"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-4">
              {ABOUT_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3"
                  style={{ fontSize: "1rem", color: "rgba(240,236,232,0.7)", lineHeight: 1.75 }}>
                  <span style={{ color: "#e03535", flexShrink: 0, marginTop: "4px", fontSize: "8px" }}>●</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll Down indicator */}
      <div className="flex flex-col items-center gap-2 pb-8" style={{ zIndex: 1 }}>
        <span className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(240,236,232,0.35)" }}>Scroll Down</span>
        <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}
          style={{ color: "rgba(240,236,232,0.35)", animation: "fadeUp 1.5s ease infinite alternate" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
