import { useState } from "react";
import { NEWSLETTER } from "../data/siteData";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <section
      id="newsletter"
      style={{
        padding: "5rem 5%",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: "#e03535" }}
        >
          Newsletter
        </p>
        <h2
          className="font-black mb-4"
          style={{
            fontSize: "clamp(1.8rem,3vw,2.6rem)",
            letterSpacing: "-.02em",
          }}
        >
          Subscribe to{" "}
          <span style={{ color: "#e03535" }}>{NEWSLETTER.name}</span> 📧
        </h2>
        <p
          className="text-sm mb-2"
          style={{ color: "rgba(240,236,232,0.58)", lineHeight: 1.8 }}
        >
          {NEWSLETTER.description}
        </p>
        <p
          className="text-sm mb-8"
          style={{ color: "rgba(240,236,232,0.4)" }}
        >
          👉 Join {NEWSLETTER.readers} Readers
        </p>

        {subscribed ? (
          <p className="font-bold text-lg" style={{ color: "#22c55e" }}>
            Thank you! You're subscribed. ✓
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg px-4 py-3 text-sm outline-none"
              style={{
                background: "#1c1a1a",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#f0ece8",
              }}
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all"
              style={{
                background: "#e03535",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = ".85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
