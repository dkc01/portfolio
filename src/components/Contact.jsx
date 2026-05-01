import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { SITE } from "../data/siteData";

const INPUT_STYLE = {
  background: "#1a1818",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#f0ece8",
  borderRadius: 10,
  padding: "0.85rem 1rem",
  fontSize: "0.9rem",
  width: "100%",
  outline: "none",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: SITE.email,
        }
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: "5rem 5%", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#e03535" }}>
          Get In Touch
        </p>
        <h2 className="font-bold mb-3" style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-.03em" }}>
          Contact
        </h2>
        <p className="mb-10 text-sm" style={{ color: "rgba(240,236,232,0.45)", lineHeight: 1.7 }}>
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 1.4fr", alignItems: "start" }}>

          {/* LEFT — Contact Info */}
          <div className="rounded-2xl p-7 flex flex-col gap-6"
            style={{ background: "#141212", border: "1px solid rgba(255,255,255,0.08)" }}>

            <h3 className="font-bold" style={{ fontSize: "1.25rem", letterSpacing: "-.02em", fontFamily: "'Space Mono', monospace" }}>
              Contact Information
            </h3>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: "rgba(224,53,53,0.12)", border: "1px solid rgba(224,53,53,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "rgba(240,236,232,0.4)" }}>Email</p>
                  <p className="text-sm font-medium" style={{ color: "#f0ece8" }}>{SITE.email}</p>
                </div>
              </div>

              {/* Name */}
              <div className="flex items-start gap-3">
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: "rgba(224,53,53,0.12)", border: "1px solid rgba(224,53,53,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "rgba(240,236,232,0.4)" }}>Name</p>
                  <p className="text-sm font-medium" style={{ color: "#f0ece8" }}>{SITE.name}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: "rgba(224,53,53,0.12)", border: "1px solid rgba(224,53,53,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e03535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "rgba(240,236,232,0.4)" }}>Location</p>
                  <p className="text-sm font-medium" style={{ color: "#f0ece8" }}>Mahwah, NJ (Open to relocate)</p>
                </div>
              </div>
            </div>

            {/* Terminal opportunity box */}
            <div className="rounded-xl p-4"
              style={{ background: "#0e0e0e", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Space Mono', monospace" }}>
              <p className="text-sm" style={{ color: "rgba(240,236,232,0.65)", lineHeight: 1.8 }}>
                <span style={{ color: "#e03535" }}>&gt; </span>
                Currently open to ML Engineer, Data Analytics, and Software Engineering internships.
              </p>
            </div>
          </div>

          {/* RIGHT — Form */}
          {sent ? (
            <div className="rounded-2xl p-10 flex flex-col items-center justify-center gap-4 text-center"
              style={{ background: "#141212", border: "1px solid rgba(34,197,94,0.3)" }}>
              <p className="font-bold text-lg" style={{ color: "#22c55e" }}>Message sent! ✓</p>
              <p className="text-sm" style={{ color: "rgba(240,236,232,0.5)" }}>I'll get back to you soon.</p>
              <button onClick={() => setSent(false)}
                className="text-xs font-semibold px-4 py-2 rounded-lg transition-colors mt-2"
                style={{ background: "rgba(255,255,255,0.1)", color: "#f0ece8" }}
                onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.15)")}
                onMouseLeave={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-7 flex flex-col gap-5"
              style={{ background: "#141212", border: "1px solid rgba(255,255,255,0.08)" }}>

              {error && (
                <div className="p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                  <p className="text-sm" style={{ color: "#ef4444" }}>{error}</p>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "rgba(240,236,232,0.55)" }}>Name</label>
                <input name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} required style={INPUT_STYLE}
                  disabled={loading}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(224,53,53,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "rgba(240,236,232,0.55)" }}>Email</label>
                <input name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required style={INPUT_STYLE}
                  disabled={loading}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(224,53,53,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: "rgba(240,236,232,0.55)" }}>Message</label>
                <textarea name="message" placeholder="Your message..."
                  value={form.message} onChange={handleChange} required rows={5} disabled={loading}
                  style={{ ...INPUT_STYLE, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(224,53,53,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                style={{ background: loading ? "#c02a2a" : "#e03535", color: "#fff", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.opacity = ".85")}
                onMouseLeave={(e) => !loading && (e.currentTarget.style.opacity = "1")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
