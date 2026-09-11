import styles from "./UnifiedIntelligence.module.css";

export default function UnifiedIntelligence() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span className={styles.eyebrowText}>Unified Intelligence</span>
            </div>

            <h2 className={styles.heading}>
              <span className={styles.headingLine}>From complexity,</span>
              <span className={styles.headingLine}>to complete clarity.</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.description}>
              COMPLEEQ connects the information businesses usually manage across
              disconnected systems, mapping real-time operational status
              instantly.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* CARD 1 — Understand every entity */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Understand every entity</h3>
            <p className={styles.cardText}>
              Bring KYC, KYB, directors, shareholders and UBO information into
              one single, unified company profile.
            </p>

            <div className={`${styles.widget} ${styles.widgetGreen}`}>
              <div className={styles.widgetHeader}>
                <span className={styles.widgetTitle}>Atlas Corp Ltd.</span>
                <span className={styles.secureLabel}>Secure</span>
              </div>
              <ul className={styles.checkList}>
                <li>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  Registration &amp; KYC Verified
                </li>
                <li>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  Ultimate Beneficial Owners Identified
                </li>
                <li>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  Directors Background Screened
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2 — See risk in context */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>See risk in context</h3>
            <p className={styles.cardText}>
              Understand AML, sanctions, PEP and adverse-media risk together
              instead of manually checking separate databases.
            </p>

            <div className={`${styles.widget} ${styles.widgetDark}`}>
              <div className={styles.widgetHeader}>
                <span className={styles.radarLabel}>
                  <span className={styles.radarDot} aria-hidden="true" />
                  Risk Radar Active
                </span>
              </div>
              <ul className={styles.riskList}>
                <li>
                  <span className={styles.riskKey}>AML Risk Rating</span>
                  <span className={styles.riskValueGreen}>Low Risk</span>
                </li>
                <li>
                  <span className={styles.riskKey}>Sanctions List</span>
                  <span className={styles.riskValueGreen}>Passed</span>
                </li>
                <li>
                  <span className={styles.riskKey}>PEP / Adverse Media</span>
                  <span className={styles.riskValueMuted}>No Matches</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 3 — Turn change into action */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Turn change into action</h3>
            <p className={styles.cardText}>
              When something changes, automatically generate alerts, tasks,
              cases and recommended regulatory next steps.
            </p>

            <div className={`${styles.widget} ${styles.widgetLight}`}>
              <div className={styles.widgetHeader}>
                <span className={styles.widgetTitle}>Trigger Event</span>
                <span className={styles.uboBadge}>UBO Change</span>
              </div>
              <ul className={styles.arrowList}>
                <li>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  Automatically Flag Entity Profile
                </li>
                <li>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  Recalculate Combined Risk Rating
                </li>
                <li>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                  Generate EDD Case with evidence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
