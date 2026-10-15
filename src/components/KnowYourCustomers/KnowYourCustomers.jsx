import styles from "./KnowYourCustomers.module.css";
import onboardingBackground from "../../assets/images/companyBackground.png";

const KnowYourCustomers = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true"></span>
            <span className={styles.eyebrowText}>
              FOR FINANCIAL INSTITUTIONS
            </span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingLine}>Know your customers,</span>
            <span className={styles.headingLine}>Keep knowing them.</span>
          </h2>

          <p className={styles.description}>
            Go beyond onboarding by connecting KYC, KYB, UBO, AML, sanctions,
            PEP screening and ongoing monitoring in one continuous compliance
            process.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>ONBOARD ONCE</h4>
              <p className={styles.featureText}>
                Create a trusted, robust entity profile with zero manual
                duplication.
              </p>
            </div>

            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>MONITOR CONTINUOUSLY</h4>
              <p className={styles.featureText}>
                Receive automated alerts the instant risk or corporate ownership
                shifts.
              </p>
            </div>

            <div className={styles.featureItem}>
              <h4 className={styles.featureTitle}>REVIEW WITH CONTEXT</h4>
              <p className={styles.featureText}>
                Keep decision records, compliance logs, and verification
                evidence strictly connected.
              </p>
            </div>
          </div>

          <a
            href="/solutions/financial-institutions"
            className={styles.ctaButton}
          >
            Explore Financial Institution Solutions{" "}
            <span className={styles.arrow}>&rarr;</span>
          </a>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.visual}>
          <img
            src={onboardingBackground}
            alt=""
            className={styles.backgroundImage}
          />

          <div className={styles.onboardingCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Onboarding File</h3>
              <span className={styles.approvedBadge}>APPROVED</span>
            </div>

            <div className={styles.entityBox}>
              <h4 className={styles.entityName}>Nova Capital Ltd.</h4>
              <div className={styles.tagsRow}>
                <span className={styles.tag}>KYC Complete</span>
                <span className={styles.tag}>KYB Complete</span>
                <span className={styles.tag}>UBO Identified</span>
                <span className={styles.tag}>Sanctions Clear</span>
                <span className={styles.tag}>PEP Clear</span>
              </div>
              <div className={styles.tagsRow}>
                <span className={styles.tag}>AML Risk Low</span>
              </div>
            </div>

            <span className={styles.monitoringLabel}>
              ONGOING MONITORING MODULE
            </span>

            <div className={styles.monitoringList}>
              <div className={styles.monitoringRow}>
                <span className={styles.monitoringName}>
                  Ownership Structure
                </span>
                <span className={styles.liveStatus}>
                  <span className={styles.liveDot} aria-hidden="true"></span>
                  Live
                </span>
              </div>
              <div className={styles.monitoringRow}>
                <span className={styles.monitoringName}>
                  Sanctions Database Scan
                </span>
                <span className={styles.liveStatus}>
                  <span className={styles.liveDot} aria-hidden="true"></span>
                  Live
                </span>
              </div>
              <div className={styles.monitoringRow}>
                <span className={styles.monitoringName}>
                  PEP List Monitoring
                </span>
                <span className={styles.liveStatus}>
                  <span className={styles.liveDot} aria-hidden="true"></span>
                  Live
                </span>
              </div>
              <div className={styles.monitoringRow}>
                <span className={styles.monitoringName}>
                  Corporate Register Integrity
                </span>
                <span className={styles.liveStatus}>
                  <span className={styles.liveDot} aria-hidden="true"></span>
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourCustomers;
