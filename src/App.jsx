import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import LogosTicker from "./components/LogosTicker";
import Projects from "./components/HelpCards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Blog from "./components/Videos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#111010", color: "#f0ece8", fontFamily: "'Syne', sans-serif", minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <LogosTicker />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
