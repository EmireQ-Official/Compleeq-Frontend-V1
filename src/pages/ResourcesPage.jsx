import styles from "./ResourcesPage.module.css";
import productBackground from "../assets/images/resources-product.png";
import insightsBackground from "../assets/images/resources-insights-background.png";

const Arrow = () => <span aria-hidden="true">→</span>;

function ChecklistPreview() {
  return <div className={styles.checklistPreview}>{["Company Information ✓", "Directors ✓", "Ownership Structure ✓", "Documents Needed"].map((item, index) => <div key={item} className={index === 3 ? styles.mutedRow : ""}><i /><span>{item}</span></div>)}</div>;
}

function RiskPreview() {
  return <div className={styles.riskPreview}>{[["Customer Risk", "72%"], ["Geographic Risk", "42%"], ["Ownership Risk", "83%"]].map(([label, width]) => <div key={label}><span>{label}</span><i><b style={{ width }} /></i></div>)}</div>;
}

function MonitoringPreview() {
  return <div className={styles.monitoringPreview}>{["Ownership ✓", "Directors ✓", "Licenses & Permits ✓", "Periodic Filings", "Regulatory Updates"].map((item, index) => <div key={item} className={index > 2 ? styles.mutedRow : ""}><i /><span>{item}</span></div>)}</div>;
}

const GUIDES = [
  ["A Practical Guide to KYB", "What to collect, what to verify, and how to connect business identity with ownership and risk.", ChecklistPreview],
  ["Building an AML Risk Framework", "A simple structure for combining customer, geographic, industry and ownership risk.", RiskPreview],
  ["Continuous Compliance Checklist", "A practical checklist for monitoring company changes, documents, deadlines and developments.", MonitoringPreview],
];

const ARTICLES = [
  ["AML & RISK", "How to think about risk beyond a single score", "6 min read · Aug 2026"],
  ["OWNERSHIP", "Why UBO monitoring matters after onboarding", "5 min read · Jul 2026"],
  ["REGULATORY", "Turning regulatory change into operational action", "7 min read · Jun 2026"],
];

export default function ResourcesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>COMPLEEQ RESOURCES</div>
            <h1>Compliance knowledge,<br />without the noise.</h1>
            <p>Explore practical guidance, regulatory insights, product documentation and technical resources designed to help teams understand compliance and act with greater clarity.</p>
            <a href="/solutions" className={styles.primaryButton}>Explore Financial Institution Solutions <Arrow /></a>
          </div>
          <div className={styles.heroArtwork}>
            <img src={productBackground} alt="" aria-hidden="true" />
            <article className={styles.featuredGuide}>
              <div className={styles.guideHeader}><i /><i /></div>
              <div className={styles.guideBody}>
                <span>FEATURED GUIDE</span>
                <h2>Building a Continuous Compliance Program</h2>
                <p>A practical framework for moving from periodic checks and disconnected spreadsheets to structured, ongoing compliance operations.</p>
                <small>Guide · 12 min read</small>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.guides}>
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrow}>GUIDES &amp; PLAYBOOKS</div>
          <h2>Built for the work behind compliance</h2>
          <p>Step-by-step resources for designing and operating better compliance processes.</p>
        </header>
        <div className={styles.guideGrid}>
          {GUIDES.map(([title, description, Preview]) => <article className={styles.guideCard} key={title}><div className={styles.guideVisual}><img src={productBackground} alt="" aria-hidden="true" /><Preview /></div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className={styles.insights} style={{ backgroundImage: `url(${insightsBackground})` }}>
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrow}>LATEST FROM COMPLEEQ</div>
          <h2>What compliance teams are thinking about now.</h2>
          <p>Practical perspectives on changing regulation, risk and compliance operations.</p>
        </header>
        <div className={styles.insightsBody}>
          <article className={styles.featuredArticle}>
            <div className={styles.articleIllustration} aria-hidden="true"><i /><i /><i /></div>
            <div className={styles.articleCopy}><span>COMPLIANCE OPERATIONS</span><h3>Why continuous compliance is replacing periodic review</h3><p>As companies, ownership structures and regulations change faster, static compliance snapshots become outdated quickly. Learn how teams are shifting to operational pipelines.</p><small>8 min read · September 2026</small></div>
          </article>
          <div className={styles.articleList}>{ARTICLES.map(([category, title, meta]) => <article key={title}><span>{category}</span><h3>{title}</h3><small>{meta}</small></article>)}</div>
        </div>
      </section>

      <section className={styles.trust}>
        <header className={styles.trustHeader}>
          <div className={styles.eyebrow}>PLATFORM TRUST</div>
          <h2>Understand how your compliance<br />data is protected</h2>
          <p>Explore the controls and infrastructure COMPLEEQ uses to support secure<br />enterprise compliance operations.</p>
        </header>
        <div className={styles.trustGrid}>
          <article className={styles.trustCopy}><h3>Access &amp; Identity</h3><p>Enforce enterprise identity policies with Single Sign-On (SSO), Multi-Factor Authentication, and Role-Based Access Controls.</p><span>✓ Control who can access what</span></article>
          <div className={styles.caseCard}>
            <div className={styles.caseTop}><b>CASE DETAILS: CMP-10842</b><em>UNDER REVIEW</em></div><h3>UBO Change Review</h3><p>Assigned: Compliance Officer</p><hr /><b>EVIDENCE FILES (7 ITEMS)</b><ul><li>✓ Share Register Amendment.pdf</li><li>✓ Corporate Resolution UAE.pdf</li><li>✓ Sarah Malik ID Verification.pdf</li></ul><div className={styles.pipeline}><span>Open</span><span>Review</span><span>Decision</span><span>Resolved</span></div>
          </div>
          <article className={styles.trustCopy}><h3>Data &amp;<br />Governance</h3><p>Maintain continuous compliance logs, strict retention rules, isolated database schemes, and localized data sovereignty strategies.</p><span>✓ Maintain control across the data lifecycle.</span></article>
        </div>
      </section>
    </main>
  );
}
