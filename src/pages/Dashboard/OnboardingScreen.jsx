import styles from "./OnboardingScreen.module.css";

export default function OnboardingScreen() {
  return (
    <div className={styles.body}>
      {/* ---------- LEFT: white form panel (1:21) ---------- */}
      <div className={styles.leftContainer}>
        <div className={styles.leftAlign}>
          <div className={styles.leftColumn}>
            {/* Logo (1:24) — empty frame in Figma, 112.7 × 23 */}
            <div className={styles.logo} />

            {/* Link - Voiceflow home (1:48) — empty frame, 480 × 45 */}
            <div className={styles.homeLink} />

            {/* Container:align (1:49) — flexible centered slot for form content */}
            <div className={styles.formSlot} />

            {/* Legal_Terms (1:66) */}
            <p className={styles.legalTerms}>
              By continuing, you agree to COMPLEEQ{" "}
              <a
                className={styles.legalLink}
                href="https://example.com/terms"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className={styles.legalLink}
                href="https://example.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* ---------- RIGHT: dark showcase panel (1:67) ---------- */}
      <div className={styles.rightPanel}>
        {/* Container (1:68) — decorative ghost card behind the primary panel */}
        <div className={styles.ghostCard} />

        {/* Interactive_Panel_Primary (1:69) */}
        <div className={styles.panelPrimary}>
          <div className={styles.panelHeader}>
            <span className={styles.panelLabel}>WORKSPACE INITIALIZATION</span>
            <span className={styles.statusDot} />
          </div>

          <p className={styles.panelPrompt}>
            What would you like to manage first?
          </p>

          <div className={styles.chipsContainer}>
            <div className={styles.chip} />
            <div className={styles.chip} />
          </div>
        </div>

        {/* Interactive_Panel_Secondary (1:79) */}
        <div className={styles.panelSecondary}>
          <span className={styles.responseTitle}>ASSISTANT</span>

          <p className={styles.responseCard}>
            Great choice. We will help you create your first compliance
            workspace for Atlas Corp Ltd.
          </p>

          <div className={styles.metaContext}>
            <p className={styles.metaRow}>
              <span className={styles.metaKey}>Company: </span>Atlas Corp Ltd.
            </p>
            <p className={styles.metaRow}>
              <span className={styles.metaKey}>Jurisdiction: </span>United
              Kingdom (UK)
            </p>
            <p className={styles.metaRow}>
              <span className={styles.metaKey}>Primary Goal: </span>Stay
              compliant as we grow
            </p>
          </div>

          <div className={styles.stateFooter}>
            <span className={styles.stateText}>Workspace setup ready</span>
            {/* CTA_Mini (1:88) — 77 × 27, no text layer in the design */}
            <div className={styles.ctaMini} />
          </div>
        </div>
      </div>
    </div>
  );
}
