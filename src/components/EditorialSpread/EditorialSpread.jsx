import styles from "./EditorialSpread.module.css";

function WarningIcon() {
  return (
    <svg
      className={styles.warningIcon}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 1.15L13.25 12.2H.75L7 1.15Z" fill="#E24C4A" />
    </svg>
  );
}

export default function EditorialSpread() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={styles.eyebrowText}>Editorial Spread</span>
          </div>

          <h2 className={styles.heading}>
            Intelligent automation, human control
          </h2>

          <p className={styles.description}>
            COMPLEEQ handles repetitive intelligence work while your compliance
            team
            <br className={styles.lineBreak} />
            remains responsible for the decisions that matter.
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.side}>
            <h3 className={styles.sideTitle}>
              A human reviews
              <br />
              what matters
            </h3>
            <p className={styles.sideText}>
              COMPLEEQ analyzes entity data, documents, ownership structures,
              risk signals and regulatory changes, helping compliance
              professionals understand what requires attention.
            </p>
            <div className={styles.chip}>
              <span className={styles.chipCheck} aria-hidden="true">
                ✓
              </span>
              Evidence stays attached to every alert
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardKicker}>Compleeq Profile</span>
              <span className={styles.cardMeta}>Dossier #921</span>
            </div>

            <div className={styles.profilePanel}>
              <p className={styles.profileName}>Atlas Corp Ltd.</p>
              <div className={styles.healthRow}>
                <span className={styles.healthLabel}>Health Status</span>
                <span className={styles.healthValue}>92%</span>
              </div>
            </div>

            <div className={styles.reviewBlock}>
              <p className={styles.reviewTitle}>
                <WarningIcon />
                Review Required
              </p>
              <p className={styles.reviewText}>
                Ownership change registered on UAE Federal registry requires
                manual validation.
              </p>
            </div>

            <hr className={styles.divider} />

            <p className={styles.evidence}>
              <span className={styles.evidenceDot} aria-hidden="true" />
              Evidence Attached: Corporate Registry PDF
            </p>
          </div>

          <div className={styles.side}>
            <h3 className={styles.sideTitle}>
              Your team makes
              <br />
              the final call
            </h3>
            <p className={styles.sideText}>
              AI can identify, summarize, prioritize and recommend. Final
              regulated decisions remain with the appropriate compliance
              professional.
            </p>
            <div className={styles.chip}>
              <span className={styles.chipCheck} aria-hidden="true">
                ✓
              </span>
              Human review stays in control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
