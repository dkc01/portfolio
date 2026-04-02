import { BLOG_POSTS } from "../data/siteData";

const CATEGORY_COLORS = {
  "AI/ML":    { bg: "rgba(224,53,53,0.12)",  text: "#e03535",  border: "rgba(224,53,53,0.25)" },
  "Web Dev":  { bg: "rgba(59,130,246,0.12)", text: "#60a5fa",  border: "rgba(59,130,246,0.25)" },
  "default":  { bg: "rgba(255,255,255,0.06)", text: "rgba(240,236,232,0.6)", border: "rgba(255,255,255,0.12)" },
};

export default function Blog() {
  return (
    <section id="blog" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Writing
        </p>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="font-bold" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
            Blog Posts
          </h2>
          <a href="#"
            className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(240,236,232,0.6)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}>
            All Posts →
          </a>
        </div>

        {/* Coming soon placeholder */}
        <div className="rounded-2xl flex flex-col items-center justify-center gap-4"
          style={{ background: "#141212", border: "1px solid rgba(255,255,255,0.07)", padding: "5rem 2rem", textAlign: "center" }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(224,53,53,0.1)", border: "1px solid rgba(224,53,53,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e03535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <p className="font-bold" style={{ fontSize: "1.15rem", color: "#f0ece8" }}>Coming Soon</p>
          <p style={{ fontSize: "0.9rem", color: "rgba(240,236,232,0.4)", maxWidth: 380, lineHeight: 1.7 }}>
            I'm currently working on articles about RAG pipelines, Next.js API design, and semantic search. Check back soon.
          </p>
        </div>

        {/* Blog cards — hidden until posts are ready
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          {BLOG_POSTS.map((post) => {
            const colors = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.default;
            const isComingSoon = post.date === "Coming Soon";
            return (
              <a key={post.slug} href="#"
                className="rounded-2xl flex flex-col transition-all cursor-pointer"
                style={{ background: "#1a1818", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden", opacity: isComingSoon ? 0.65 : 1 }}
                onMouseEnter={(e) => !isComingSoon && (e.currentTarget.style.borderColor = "rgba(224,53,53,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}>
                <div style={{ height: 4, background: isComingSoon ? "rgba(255,255,255,0.1)" : "#e03535" }} />
                <div style={{ padding: "1.6rem 1.5rem 1.8rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(240,236,232,0.35)" }}>{post.date}</span>
                  </div>
                  <h4 className="font-bold" style={{ fontSize: "1rem", lineHeight: 1.35, letterSpacing: "-.01em" }}>
                    {post.title}
                  </h4>
                  <p className="text-sm flex-1" style={{ color: "rgba(240,236,232,0.55)", lineHeight: 1.75 }}>
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded"
                        style={{ background: "rgba(255,255,255,0.05)", color: "rgba(240,236,232,0.4)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        */}
      </div>
    </section>
  );
}
