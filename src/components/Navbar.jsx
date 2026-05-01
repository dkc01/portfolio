import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "../data/siteData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home, just scroll
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavLink = ({ label, href }) => {
    if (href.startsWith("/")) {
      // Use React Router Link for page routes
      return (
        <Link key={label} to={href}
          className="nav-link text-xs font-semibold tracking-widest uppercase"
          onClick={() => setMenuOpen(false)}>
          {label}
        </Link>
      );
    }
    // Use anchor for section links
    return (
      <a key={label} href={href} onClick={(e) => handleNav(e, href)}
        className="nav-link text-xs font-semibold tracking-widest uppercase">
        {label}
      </a>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ padding: "1rem 5%" }}>
      <div className="flex items-center justify-between rounded-2xl px-6 py-3"
        style={{
          background: "rgba(17,16,16,0.85)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
        }}>
        {/* Logo — code style */}
        <Link to="/" onClick={() => setMenuOpen(false)}
          className="font-bold text-sm"
          style={{ color: "#e03535", fontFamily: "monospace", letterSpacing: "0.04em" }}>
          &lt;DK /&gt;
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 transition-all"
            style={{ background: "#f0ece8", transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-0.5 transition-all"
            style={{ background: "#f0ece8", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all"
            style={{ background: "#f0ece8", transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 rounded-2xl p-6 flex flex-col gap-5"
          style={{ background: "#1c1a1a", border: "1px solid rgba(255,255,255,0.09)" }}>
          {NAV_LINKS.map((link) => renderNavLink(link))}
        </div>
      )}
    </nav>
  );
}
