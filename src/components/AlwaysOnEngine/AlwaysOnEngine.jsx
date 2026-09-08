import { useState } from "react";
import dashboardImage from "../../assets/images/atlas-corp-dashboard.png";
import styles from "./AlwaysOnEngine.module.css";

const TABS = ["Verify", "Risk", "Obligations", "Monitor", "Act"];
const DEFAULT_TAB = "Monitor";

export default function AlwaysOnEngine() {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  return (
    <section className={styles.alwaysOnEngine}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>Continuous Compliance</span>
        </div>

        <h2 className={styles.heading}>
          <span className={styles.headingText}>
            Your always-on compliance engine
          </span>
          <span className={styles.toggle} aria-hidden="true">
            <span className={styles.toggleKnob} />
          </span>
        </h2>

        <p className={styles.description}>
          One system that verifies, understands risk, tracks obligations,
          monitors
          <br className={styles.lineBreak} />
          changes and keeps compliance moving.
        </p>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <div
            className={styles.tabs}
            role="group"
            aria-label="Compliance lifecycle stages"
          >
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  className={
                    isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab
                  }
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <h3 className={styles.panelHeading}>
            Know what changed before it becomes a problem
          </h3>

          <p className={styles.panelDescription}>
            COMPLEEQ continuously monitors your company, ownership, documents,
            risk
            <br className={styles.lineBreak} />
            and regulatory obligations.
          </p>

          <button type="button" className={styles.panelButton}>
            Explore Monitoring
          </button>

          <div className={styles.dashboardWrapper}>
            <img
              src={dashboardImage}
              alt="Compleeq compliance verification dashboard showing Atlas Corp Ltd. entity verification overview, including company status, directors checked, documents reviewed, verification score, KYB verification pipeline, business identity, directors audit, documentation and outcome"
              className={styles.dashboardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
