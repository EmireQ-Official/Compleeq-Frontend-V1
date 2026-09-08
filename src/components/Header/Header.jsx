import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Company", href: "#company" },
];

function Logo() {
  return (
    <a href="/" className={styles.logo} aria-label="Compleeq home">
      <svg
        className={styles.logoIcon}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M21.2 8.6a9.6 9.6 0 1 0 0 14.8"
          stroke="#1F4A43"
          strokeWidth="4.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="21.6" cy="16" r="3.3" fill="#8BC53F" />
      </svg>
      <span className={styles.logoText}>Compleeq</span>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const didMountRef = useRef(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Basic focus management (skip on initial mount)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (isMenuOpen) {
      if (firstMobileLinkRef.current) {
        firstMobileLinkRef.current.focus();
      }
    } else {
      if (toggleRef.current) {
        toggleRef.current.focus();
      }
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="/sign-in" className={styles.signIn}>
            Sign In
          </a>
          <a href="/book-a-demo" className={styles.cta}>
            Book a Demo
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerOpen : ""
          }`}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav aria-label="Mobile Primary">
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                  ref={index === 0 ? firstMobileLinkRef : null}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileActions}>
          <a
            href="/sign-in"
            className={styles.mobileSignIn}
            onClick={closeMenu}
          >
            Sign In
          </a>
          <a
            href="/book-a-demo"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            Book a Demo
            <span className={styles.ctaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
