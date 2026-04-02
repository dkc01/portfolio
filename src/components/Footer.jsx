import { SITE, FOOTER_LINKS } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap gap-4"
      style={{ padding: "2.5rem 5%", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <span className="font-black text-base tracking-wide">
        {SITE.name.toLowerCase().replace(" ", ".")}
      </span>

      <div className="flex gap-8 flex-wrap">
        {FOOTER_LINKS.map(({ label, href }) => (
          <a key={label} href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs font-semibold tracking-widest uppercase transition-colors"
            style={{ color: "rgba(240,236,232,0.45)" }}
            onMouseEnter={(e) => (e.target.style.color = "#f0ece8")}
            onMouseLeave={(e) => (e.target.style.color = "rgba(240,236,232,0.45)")}>
            {label}
          </a>
        ))}
      </div>

      <span className="text-xs" style={{ color: "rgba(240,236,232,0.28)" }}>
        © 2026 {SITE.name}. All rights reserved.
      </span>
    </footer>
  );
}
