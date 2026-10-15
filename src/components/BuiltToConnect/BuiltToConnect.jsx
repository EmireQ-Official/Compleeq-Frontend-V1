import styles from "./BuiltToConnect.module.css";

const BuiltToConnect = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textureOverlay} aria-hidden="true"></div>

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true"></span>
            <span className={styles.eyebrowText}>BUILT TO CONNECT</span>
          </div>

          <h2 className={styles.heading}>
            COMPLEE
            <span className={styles.qLetter}>Q</span> fits into the way you
            already work
          </h2>

          <p className={styles.description}>
            <span className={styles.descLine}>
              Extend your capabilities with developer-first compliance APIs,
              structured team
            </span>
            <span className={styles.descLine}>
              permissions, and advanced global data standards.
            </span>
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.cardsGrid}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>API-First Infrastructure</h3>
            <p className={styles.cardSubtitle}>Direct, secure endpoints</p>

            <div className={styles.infoBox}>
              <span className={styles.infoLabel}>ACTIVE JURISDICTIONS</span>

              <div className={styles.jurisdictionRow}>
                <span className={styles.jurisdictionActive}>
                  United Arab Emirates (UAE)
                </span>
                <span className={styles.greenDot} aria-hidden="true"></span>
              </div>

              <div className={styles.jurisdictionRow}>
                <span className={styles.jurisdictionText}>
                  Saudi Arabia (KSA)
                </span>
                <span className={styles.syncedText}>Synced</span>
              </div>

              <div className={styles.jurisdictionRow}>
                <span className={styles.jurisdictionText}>India (IND)</span>
                <span className={styles.syncedText}>Synced</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Structured Team Access</h3>
            <p className={styles.cardSubtitle}>Role-based access permissions</p>

            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <span className={styles.infoLabel}>ACTIVE OBLIGATIONS</span>
                <span className={styles.totalText}>12 Total</span>
              </div>

              <div className={styles.tagsRow}>
                <span className={styles.tag}>Corporate Tax</span>
                <span className={styles.tag}>VAT Filing</span>
                <span className={styles.tag}>UBO Registry</span>
              </div>

              <div className={styles.tagsRow}>
                <span className={styles.tag}>Trade License</span>
                <span className={styles.tag}>Labour Law</span>
                <span className={styles.tag}>Audit Filing</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Enterprise Protection</h3>
            <p className={styles.cardSubtitle}>
              Certified global compliance safety
            </p>

            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <span className={styles.infoLabel}>UPCOMING DEADLINES</span>
                <span className={styles.attentionBadge}>1 ATTENTION</span>
              </div>

              <div className={styles.deadlineRow}>
                <span className={styles.deadlineTitleActive}>
                  Trade License Renewal
                </span>
                <span className={styles.deadlineTimeAlert}>In 12 Days</span>
              </div>

              <div className={styles.deadlineRow}>
                <span className={styles.deadlineTitle}>VAT Return Filing</span>
                <span className={styles.deadlineTime}>In 28 Days</span>
              </div>

              <div className={styles.deadlineRow}>
                <span className={styles.deadlineTitle}>UBO Update Filing</span>
                <span className={styles.deadlineTime}>In 34 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltToConnect;
