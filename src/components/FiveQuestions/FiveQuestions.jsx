import styles from "./FiveQuestions.module.css";

function QuestionCard({ number, title, description, variant, wide, children }) {
  const cardClasses = [
    styles.card,
    variant === "dark" ? styles.cardDark : styles.cardLight,
    wide ? styles.cardWide : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses}>
      <span className={styles.cardNumber}>{number}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.widget}>{children}</div>
    </div>
  );
}

export default function FiveQuestions() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>The Compleeq Framework</span>
        </div>

        <h2 className={styles.heading}>
          <span className={styles.headingLine}>Five questions.</span>
          <span className={styles.headingLine}>
            One complete compliance picture
          </span>
        </h2>

        <p className={styles.description}>
          COMPLEEQ continuously connects identity, ownership, risk, obligations
          and action so
          <br className={styles.lineBreak} />
          businesses always understand their current compliance position.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.row}>
          <QuestionCard
            number="01"
            title="Who Are You?"
            description="Verify your identity, business, and corporate information with confidence."
            variant="light"
          >
            <div className={styles.widgetRow}>
              <span className={styles.widgetTitle}>Atlas Corp Ltd.</span>
              <span className={styles.badge}>Business Verified</span>
            </div>
            <ul className={styles.widgetList}>
              <li>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                Registration: Active
              </li>
              <li>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                Directors: 3 Verified
              </li>
            </ul>
          </QuestionCard>

          <QuestionCard
            number="02"
            title="Who Owns You?"
            description="Understand ownership structures, shareholders, and ultimate beneficial owners."
            variant="light"
          >
            <div className={styles.widgetRow}>
              <span className={styles.widgetTitle}>Atlas Holdings</span>
              <span className={styles.widgetLine} aria-hidden="true" />
              <span className={styles.widgetTitle}>Sarah Malik (UBO)</span>
            </div>
            <p className={styles.widgetSubtext}>Shareholding: 72% control</p>
          </QuestionCard>

          <QuestionCard
            number="03"
            title="What Risk Do You Have?"
            description="Assess AML, sanctions, PEP, adverse media, and other compliance risks."
            variant="dark"
            wide
          >
            <div className={styles.widgetRow}>
              <span className={styles.widgetLabel}>Overall Risk</span>
              <span className={styles.riskLabel}>Low Risk</span>
            </div>
            <div className={styles.progressBar}>
              <span
                className={`${styles.progressSegment} ${styles.progressFilled}`}
              />
              <span className={styles.progressSegment} />
              <span className={styles.progressSegment} />
            </div>
          </QuestionCard>
        </div>

        <div className={styles.row}>
          <QuestionCard
            number="04"
            title="What Rules Apply to You?"
            description="Identify tax, regulatory, licensing, and corporate obligations relevant to your entity profile."
            variant="dark"
          >
            <div className={styles.widgetRow}>
              <span className={styles.widgetTitle}>12 Active Obligations</span>
              <span className={styles.widgetMeta}>Region: UAE</span>
            </div>
            <ul className={styles.obligationList}>
              <li>
                <span>Corporate Tax Filing</span>
                <span className={styles.dueDate}>Due 18 Sep</span>
              </li>
              <li>
                <span>Trade License Renewal</span>
                <span className={styles.dueDate}>Due 31 Aug</span>
              </li>
            </ul>
          </QuestionCard>

          <QuestionCard
            number="05"
            title="What Needs to Happen?"
            description="Stay ahead with continuous automated compliance workflows and event-triggered alerting."
            variant="light"
          >
            <div className={styles.widgetRow}>
              <span className={styles.widgetLabel}>Recommended Workflow</span>
              <span className={styles.livePill}>Monitoring Live</span>
            </div>
            <p className={styles.workflowText}>
              Ownership Change Detected → Recalculate UBO → Reassess Risk
            </p>
          </QuestionCard>
        </div>
      </div>
    </section>
  );
}
