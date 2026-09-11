import styles from "./ComplianceStandard.module.css";

export default function ComplianceStandard() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>
            The New Compliance Standard
          </span>
        </div>

        <h2 className={styles.heading}>
          <span className={styles.headingLine}>Compliance has changed.</span>
          <span className={styles.headingLine}>Has your stack?</span>
        </h2>

        <p className={styles.description}>
          Modern businesses cannot depend on one-time checks and disconnected
          tools. Compliance
          <br className={styles.lineBreak} />
          now requires continuous visibility across identity, ownership, risk,
          obligations and change.
        </p>
      </div>

      <div className={styles.grid}>
        {/* CARD 1 — IDENTITY */}
        <div className={styles.column}>
          <div className={styles.imageCard}>
            <div className={styles.stack}>
              <span className={`${styles.badge} ${styles.badgeVerified}`}>
                Verified
              </span>

              <div className={styles.panel}>
                <span className={styles.panelLabel}>KYC/KYB System</span>
                <h3 className={styles.panelTitle}>Atlas Corp Ltd.</h3>
                <ul className={styles.checkList}>
                  <li>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    Registration verified
                  </li>
                  <li>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    3 directors verified
                  </li>
                  <li>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    Corporate documents verified
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className={styles.cardHeading}>Identity</h3>
          <p className={styles.cardText}>Know who you're dealing with.</p>
        </div>

        {/* CARD 2 — OWNERSHIP + UBO */}
        <div className={styles.column}>
          <div className={styles.imageCard}>
            <div className={styles.panelOnly}>
              <span className={styles.panelLabel}>UBO Map</span>
              <ul className={styles.percentList}>
                <li>
                  <span>Atlas Holdings</span>
                  <span className={styles.percentValue}>72%</span>
                </li>
                <li>
                  <span>Atlas Ventures</span>
                  <span className={styles.percentValue}>18%</span>
                </li>
                <li>
                  <span>Other Investors</span>
                  <span className={styles.percentValue}>10%</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className={styles.cardHeading}>Ownership + UBO</h3>
          <p className={styles.cardText}>
            See who ultimately owns and controls the business.
          </p>
        </div>

        {/* CARD 3 — MONITORING + ACTION */}
        <div className={styles.column}>
          <div className={styles.imageCard}>
            <span className={`${styles.badge} ${styles.badgeAction}`}>
              1 Actions Req
            </span>

            <div className={styles.panelBottom}>
              <span className={styles.panelLabel}>Intelligence Feed</span>
              <h3 className={styles.panelTitle}>
                3 compliance changes detected
              </h3>
              <ul className={styles.bulletList}>
                <li>License expires in 12 days</li>
                <li>Ownership structure update</li>
                <li>New regulatory requirement</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.cardHeading}>Monitoring + Action</h3>
          <p className={styles.cardText}>
            Know what changed and what needs attention.
          </p>
        </div>
      </div>
    </section>
  );
}
