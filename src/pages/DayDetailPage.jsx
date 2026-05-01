import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import Footer from "../components/Footer";
import { NINETY_DAYS } from "../data/siteData";

const CATEGORY_COLORS = {
  "Data Structures": { bg: "rgba(224,53,53,0.12)", text: "#e03535", border: "rgba(224,53,53,0.25)" },
  "Algorithms": { bg: "rgba(59,130,246,0.12)", text: "#60a5fa", border: "rgba(59,130,246,0.25)" },
  "Practice": { bg: "rgba(34,197,94,0.12)", text: "#22c55e", border: "rgba(34,197,94,0.25)" },
  "System Design": { bg: "rgba(168,85,247,0.12)", text: "#a855f7", border: "rgba(168,85,247,0.25)" },
};

export default function DayDetailPage() {
  const { dayNum } = useParams();
  const dayNumber = parseInt(dayNum?.replace("day-", ""));
  const day = NINETY_DAYS.find(d => d.day === dayNumber);

  if (!day) {
    return (
      <div style={{ background: "#111010", color: "#f0ece8", fontFamily: "'Syne', sans-serif", minHeight: "100vh", position: "relative" }}>
        <ParticleBackground />
        <Navbar />
        <main style={{ position: "relative", zIndex: 1, padding: "6rem 5%" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Day not found</h1>
            <Link to="/90days" style={{ color: "#e03535", textDecoration: "none" }}>← Back to 90 Days</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const colors = CATEGORY_COLORS[day.category];
  const previousDay = day.day > 1 ? day.day - 1 : null;
  const nextDay = day.day < NINETY_DAYS.length ? day.day + 1 : null;

  return (
    <div style={{ background: "#111010", color: "#f0ece8", fontFamily: "'Syne', sans-serif", minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1, padding: "6rem 5% 2rem" }}>
        <div className="max-w-3xl mx-auto">
          {/* Navigation */}
          <Link to="/blog" style={{ color: "#e03535", textDecoration: "none", fontSize: "0.9rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem", width: "fit-content", marginBottom: "2rem" }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
            ← Back to Blog
          </Link>

          {/* Header */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", color: colors.text, background: colors.bg, padding: "0.35rem 0.75rem", borderRadius: "0.5rem" }}>
                {day.category}
              </span>
              <span style={{ fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", color: "rgba(240,236,232,0.5)" }}>
                Week {day.week}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "bold", marginBottom: "0.5rem", color: "#f0ece8" }}>
              Day {day.day}: {day.topic}
            </h1>

            <p style={{ fontSize: "0.9rem", color: "rgba(240,236,232,0.6)" }}>
              {new Date(day.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Content Card */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${colors.border}`,
            borderRadius: "1.5rem",
            padding: "2rem",
            marginBottom: "2rem"
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#f0ece8" }}>Overview</h2>
              <p style={{ color: "rgba(240,236,232,0.7)", lineHeight: 1.8 }}>
                {day.topic} is a key concept in {day.category}. In this day, you'll explore the fundamental principles and practical applications of this topic.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#f0ece8" }}>Learning Goals</h2>
              <ul style={{ color: "rgba(240,236,232,0.7)", lineHeight: 2, paddingLeft: "1.5rem" }}>
                <li>Understand the core concepts of {day.topic}</li>
                <li>Implement practical examples and solutions</li>
                <li>Practice with coding problems and challenges</li>
                <li>Document learnings and insights</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "#f0ece8" }}>Status</h2>
              <div style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: colors.bg,
                color: colors.text,
                fontWeight: "600",
                textTransform: "capitalize"
              }}>
                {day.status.replace("-", " ")}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            {previousDay ? (
              <Link to={`/blog/day-${previousDay}`}
                style={{
                  flex: 1,
                  padding: "1rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  color: "#f0ece8",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}>
                ← Day {previousDay}
              </Link>
            ) : (
              <div style={{ flex: 1 }} />
            )}

            {nextDay ? (
              <Link to={`/blog/day-${nextDay}`}
                style={{
                  flex: 1,
                  padding: "1rem",
                  background: "rgba(224,53,53,0.1)",
                  border: "1px solid rgba(224,53,53,0.3)",
                  borderRadius: "0.75rem",
                  color: "#e03535",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(224,53,53,0.5)";
                  e.currentTarget.style.background = "rgba(224,53,53,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(224,53,53,0.3)";
                  e.currentTarget.style.background = "rgba(224,53,53,0.1)";
                }}>
                Day {nextDay} →
              </Link>
            ) : (
              <div style={{ flex: 1 }} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
