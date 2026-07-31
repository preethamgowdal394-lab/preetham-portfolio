import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [active, setActive] = useState("hero");

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">PG.</div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar; //navbar.jsx