import footerBackground from "../../assets/images/footer-background.png";
import styles from "./Footer.module.css";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "KYC / KYB", href: "#" },
      { label: "Ownership & UBO", href: "#" },
      { label: "AML & Risk", href: "#" },
      { label: "Regulatory & Tax", href: "#" },
      { label: "Monitoring", href: "#" },
      { label: "AI Copilot", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Startups", href: "#" },
      { label: "Enterprises", href: "#" },
      { label: "Financial Institutions", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Professional Firms", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Insights Blog", href: "#" },
      { label: "Platform Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Sales", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security Overview", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src={footerBackground}
        alt=""
        className={styles.background}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <div className={styles.ctaCard}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Complete Compliance</span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingLine}>
              Know what applies. Know what changed.
            </span>
            <span className={styles.headingLine}>Know what to do next.</span>
          </h2>

          <p className={styles.description}>
            One continuously updated compliance picture across identity,
            <br className={styles.lineBreak} />
            ownership, risk, obligations, documents and workflows.
          </p>

          <div className={styles.actions}>
            <a href="/book-a-demo" className={styles.primaryButton}>
              Book a Demo
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
            <a href="/platform" className={styles.secondaryButton}>
              Explore the Platform
            </a>
          </div>
        </div>

        <div className={styles.footerMain}>
          <div className={styles.brand}>
            <a href="/" className={styles.brandLink} aria-label="Compleeq home">
              <span className={styles.brandMark} aria-hidden="true" />
              <span className={styles.brandName}>Compleeq</span>
            </a>
            <p className={styles.tagline}>
              Global compliance intelligence, built for modern high-growth
              businesses and financial institutions.
            </p>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className={styles.column}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.columnList}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.columnLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2026 COMPLEEQ / Emireq. All rights reserved.
          </p>
          <ul className={styles.legalList}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
