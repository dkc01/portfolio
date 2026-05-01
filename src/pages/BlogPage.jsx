import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { NINETY_DAYS } from "../data/siteData";

const CATEGORY_COLORS = {
  "Data Structures": { bg: "rgba(224,53,53,0.12)", text: "#e03535", border: "rgba(224,53,53,0.25)" },
  "Algorithms": { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  "Practice": { bg: "rgba(34,197,94,0.12)", text: "#22c55e", border: "rgba(34,197,94,0.25)" },
  "System Design": { bg: "rgba(168,85,247,0.12)", text: "#a855f7", border: "rgba(168,85,247,0.25)" },
};

const STATUS_COLORS = {
  completed: "#22c55e",
  "in-progress": "#fbbf24",
  "not-started": "rgba(255,255,255,0.1)",
};

export default function BlogPage() {
  const completedDays = NINETY_DAYS.filter(d => d.status === "completed").length;
  const progress = (completedDays / NINETY_DAYS.length) * 100;

  return (
    <div style={{ background: "#111010", color: "#f0ece8", fontFamily: "'Syne', sans-serif", minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1, padding: "6rem 5% 2rem" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <Link to="/" style={{ color: "#e03535", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem", width: "fit-content", marginBottom: "2rem" }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
              ← Back to Home
            </Link>
            
            <h1 style={{ fontSize: "clamp(2.4rem,3.5vw,3.5rem)", letterSpacing: "-0.03em", fontWeight: "bold", marginBottom: "1rem" }}>
              90 Days of<span style={{ color: "#e03535" }}> CS Learning</span>
            </h1>
            
            <p style={{ fontSize: "1rem", color: "rgba(240,236,232,0.6)", lineHeight: 1.6, maxWidth: 600 }}>
              A structured journey through computer science fundamentals, algorithms, and system design. Track my learning progress day by day.
            </p>
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "rgba(240,236,232,0.7)" }}>Progress</span>
              <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "#e03535" }}>{completedDays} / {NINETY_DAYS.length} days</span>
            </div>
            <div style={{ height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ height: "100%", background: "#e03535", width: `${progress}%`, transition: "width 0.3s ease" }} />
            </div>
          </div>

          {/* Days Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1rem" }}>
            {NINETY_DAYS.map((day) => {
              const colors = CATEGORY_COLORS[day.category] || CATEGORY_COLORS["Data Structures"];
              const statusColor = STATUS_COLORS[day.status];
              
              return (
                <Link key={day.day} to={`/blog/day-${day.day}`}
                  style={{ textDecoration: "none" }}>
                  <div style={{
                    padding: "1rem",
                    borderRadius: "1rem",
                    background: "#1a1818",
                    border: `2px solid ${statusColor}`,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.text;
                    e.currentTarget.style.background = colors.bg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = statusColor;
                    e.currentTarget.style.background = "#1a1818";
                  }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: "600", color: colors.text, textTransform: "uppercase", marginBottom: "0.5rem" }}>
                      Day {day.day}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "600", color: "#f0ece8", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                      {day.topic}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(240,236,232,0.5)", textTransform: "capitalize" }}>
                      {day.status.replace("-", " ")}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ marginTop: "3rem", padding: "2rem", background: "rgba(255,255,255,0.03)", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "1rem", color: "#f0ece8" }}>Categories</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              {Object.entries(CATEGORY_COLORS).map(([category, colors]) => (
                <div key={category} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: colors.text }} />
                  <span style={{ fontSize: "0.9rem", color: "rgba(240,236,232,0.7)" }}>{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
