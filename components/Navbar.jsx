import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-mark">K</div>
          <div className="brand-text">
            <span className="brand-name">KARTHIK V</span>
            <span className="brand-subtitle">Full Stack Developer</span>
          </div>
        </a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="hamburger" />
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <a
            href="https://github.com/karthikv2004"
            target="_blank"
            rel="noreferrer"
            className="btn-primary nav-cta"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
