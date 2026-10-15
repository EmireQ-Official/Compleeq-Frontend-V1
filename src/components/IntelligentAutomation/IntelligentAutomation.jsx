import styles from "./IntelligentAutomation.module.css";

const IntelligentAutomation = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true"></span>
            <span className={styles.eyebrowText}>EDITORIAL SPREAD</span>
          </div>

          <h2 className={styles.heading}>
            Intelligent automation, human control
          </h2>

          <p className={styles.description}>
            <span className={styles.descLine}>
              COMPLEEQ handles repetitive intelligence work while your
              compliance team
            </span>
            <span className={styles.descLine}>
              remains responsible for the decisions that matter.
            </span>
          </p>
        </div>

        {/* THREE COLUMN LAYOUT */}
        <div className={styles.grid}>
          {/* LEFT COLUMN */}
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>
              Nothing important
              <br />
              gets lost
            </h3>
            <p className={styles.columnText}>
              COMPLEEQ turns relevant changes, alerts and deadlines into
              structured action rather than leaving them in emails and
              spreadsheets.
            </p>

            <div className={styles.pillList}>
              <div className={styles.pill}>
                <span className={styles.pillCheck}>✓</span>
                <span>Every issue has an owner and status</span>
              </div>
              <div className={styles.pill}>
                <span className={styles.pillCheck}>✓</span>
                <span>Real-time notification integrations</span>
              </div>
            </div>
          </div>

          {/* CENTER CARD */}
          <div className={styles.cardWrapper}>
            <div className={styles.cardFrame}>
              <div className={styles.card}>
                <div className={styles.cardTopRow}>
                  <span className={styles.caseId}>CASE DETAILS: CMP-10842</span>
                  <span className={styles.underReviewBadge}>UNDER REVIEW</span>
                </div>

                <h4 className={styles.cardTitle}>UBO Change Review</h4>
                <p className={styles.cardSubtitle}>
                  Assigned: Compliance Officer
                </p>

                <div className={styles.cardDivider}></div>

                <span className={styles.evidenceLabel}>
                  EVIDENCE FILES (7 ITEMS)
                </span>

                <div className={styles.evidenceList}>
                  <div className={styles.evidenceItem}>
                    <span className={styles.evidenceCheck}>✓</span>
                    <span>Share Register Amendment.pdf</span>
                  </div>
                  <div className={styles.evidenceItem}>
                    <span className={styles.evidenceCheck}>✓</span>
                    <span>Corporate Resolution UAE.pdf</span>
                  </div>
                  <div className={styles.evidenceItem}>
                    <span className={styles.evidenceCheck}>✓</span>
                    <span>Sarah Malik ID Verification.pdf</span>
                  </div>
                </div>

                <div className={styles.stagesRow}>
                  <span className={styles.stagePill}>Open</span>
                  <span
                    className={`${styles.stagePill} ${styles.stagePillActive}`}
                  >
                    Review
                  </span>
                  <span className={styles.stagePill}>Decision</span>
                  <span className={styles.stagePill}>Resolved</span>
                </div>
              </div>
            </div>

            <div className={styles.cardShadow} aria-hidden="true"></div>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.column}>
            <h3 className={styles.columnHeading}>
              Your team stays
              <br />
              in control
            </h3>
            <p className={styles.columnText}>
              Automated workflows can collect information, trigger checks and
              organize work, while compliance professionals remain responsible
              for review and decisions.
            </p>

            <div className={styles.pillList}>
              <div className={styles.pill}>
                <span className={styles.pillCheck}>✓</span>
                <span>Every decision remains traceable</span>
              </div>
              <div className={styles.pill}>
                <span className={styles.pillCheck}>✓</span>
                <span>Immutable audit log with hashes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentAutomation;
