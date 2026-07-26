import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top info bar — contact + socials */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="top-info">
            <a href="#" className="top-link">
              <i className="fas fa-map-marker-alt"></i>
              <span>Digha, Aasiyana Road, PATNA-800011, BIHAR</span>
            </a>
            <a href="mailto:info@sxcpatna.edu.in" className="top-link">
              <i className="fas fa-envelope"></i>
              <span>info@sxcpatna.edu.in</span>
            </a>
          </div>

          <div className="top-social">
            <a href="https://www.facebook.com/sxcmtpatna/" aria-label="Facebook" className="social-btn">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@st.xavierscollegeofmgt.tec5556" aria-label="YouTube" className="social-btn">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/sxcmtpatnaofficial/" aria-label="Instagram" className="social-btn">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/school/st.-xavier's-college-of-management-&-technology/" aria-label="LinkedIn" className="social-btn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main brand bar */}
      <div className="mainbar">
        <div className="mainbar-inner">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://sxcpatna.edu.in/"
            className="brand-block"
          >
            <img
              src="https://sxcpatna.edu.in/wp-content/uploads/2023/04/Emblem-SXCMT-2-1427x1536.png"
              alt="College Logo"
              className="brand-logo"
            />
            <div className="brand-text">
              <p className="brand-name">St. Xavier&rsquo;s College of Management &amp; Technology</p>
              <p className="brand-tagline">NAAC Accredited with B++ Grade (1st Cycle) | AICTE Approved</p>
            </div>
          </a>

          {/* Accreditation logos — collapse behind toggle on small screens */}
          <button
            className={`accred-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle accreditation badges"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`accred-logos ${menuOpen ? "is-open" : ""}`}>
            <img
              src="https://sxcpatna.edu.in/wp-content/uploads/2023/04/Finolex-Academy-of-Management-and-Technology-Ratnagiri-2-750x410-2.png"
              alt="Finolex Academy Accreditation"
              className="accred-logo"
            />
            <img
              src="https://sxcpatna.edu.in/wp-content/uploads/2024/04/ISOcertified.png"
              alt="ISO 21001:2008 Certified"
              className="accred-logo"
            />
            <img
              src="https://sxcpatna.edu.in/wp-content/uploads/2024/05/iiclogo.png"
              alt="Institution's Innovation Council"
              className="accred-logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
