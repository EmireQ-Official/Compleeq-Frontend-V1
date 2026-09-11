import React from "react";
import styles from "./CompanyRecord.module.css";
import companyBackground from "../../assets/images/companyBackground.png";

const CompanyRecord = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true"></span>
            <span className={styles.eyebrowText}>
              THE SINGLE SOURCE OF TRUTH
            </span>
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingLine}>Everything you know</span>
            <span className={styles.headingLine}>about a company,</span>
            <span className={styles.headingLine}>In one place</span>
          </h2>

          <p className={styles.description}>
            <span className={styles.descLine}>
              Track entity structures, key people, ownership paths, verified
            </span>
            <span className={styles.descLine}>
              documents, calculated risk scores, and compliance obligations
            </span>
            <span className={styles.descLine}>
              linked inside a unified active record.
            </span>
          </p>

          <ul className={styles.benefitList}>
            <li className={styles.benefitItem}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>One company record</strong> — No duplicate compliance
                files.
              </span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Always current</strong> — Updates flow into the same
                profile.
              </span>
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>Connected context</strong> — People, ownership, risk and
                obligations stay linked.
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.visual}>
          <img
            src={companyBackground}
            alt=""
            className={styles.backgroundImage}
          />

          <div className={styles.companyCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleRow}>
                <h3 className={styles.cardTitle}>Atlas Corp Ltd</h3>
                <span className={styles.statusBadge}>ACTIVE</span>
              </div>
              <button className={styles.menuDots} aria-label="More options">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <p className={styles.cardMeta}>
              United Kingdom • Private Company • Last updated 4m ago
            </p>

            <nav className={styles.tabs} aria-label="Company record sections">
              <span className={`${styles.tab} ${styles.tabActive}`}>
                Overview
              </span>
              <span className={styles.tab}>People</span>
              <span className={styles.tab}>Ownership</span>
              <span className={styles.tab}>Risk</span>
              <span className={styles.tab}>Obligations</span>
              <span className={styles.tab}>Documents</span>
              <span className={styles.tab}>Activity</span>
            </nav>

            <div className={styles.tabsDivider}></div>

            <div className={styles.detailsGrid}>
              <div className={styles.detailsCol}>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>
                    REGISTRATION NUMBER
                  </span>
                  <span className={styles.detailValue}>10984732</span>
                </div>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>
                    DATE OF INCORPORATION
                  </span>
                  <span className={styles.detailValue}>14 May 2018</span>
                </div>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>
                    PRIMARY JURISDICTION
                  </span>
                  <span className={styles.detailValue}>United Kingdom</span>
                </div>
              </div>

              <div className={styles.detailsCol}>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>COMPLIANCE STATUS</span>
                  <span className={styles.statusLine}>✓ KYC Complete</span>
                  <span className={styles.statusLine}>
                    ✓ Ownership Map Complete
                  </span>
                  <span className={styles.statusLine}>✓ Risk Reviewed</span>
                </div>
                <div className={styles.detailBlock}>
                  <span className={styles.detailLabel}>CONNECTED PEOPLE</span>
                  <span className={styles.detailValue}>
                    3 Directors • 4 Shareholders • 1 UBO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyRecord;
