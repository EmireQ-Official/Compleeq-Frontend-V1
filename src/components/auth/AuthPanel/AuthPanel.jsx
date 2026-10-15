import styles from "./AuthPanel.module.css";

const CHIPS = ["Multi-Entity Global Compliance", "Client & Portfolio Compliance"];

/**
 * The dark right-hand panel (Figma: Frame 2147224495).
 * Decorative and identical on every screen in the canvas — 01-6 carries
 * alternate status cards but they are hidden layers and do not render.
 */
export default function AuthPanel() {
  return (
    <aside className={styles.panel} aria-hidden="true">
      <div className={styles.stack}>
        <div className={styles.cardWrap}>
          <div className={styles.ghostCard} />

          <div className={styles.primaryCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardLabel}>WORKSPACE INITIALIZATION</span>
              <span className={styles.statusDot} />
            </div>

            <p className={styles.prompt}>What would you like to manage first?</p>

            <div className={styles.chips}>
              {CHIPS.map((chip) => (
                <div key={chip} className={styles.chip}>
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.secondaryCard}>
          <span className={styles.assistantLabel}>ASSISTANT</span>

          <p className={styles.assistantBody}>
            Great choice. We will help you create your first compliance
            workspace for Atlas Corp Ltd.
          </p>

          <div className={styles.meta}>
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

          <div className={styles.footer}>
            <span className={styles.footerText}>Workspace setup ready</span>
            <span className={styles.ctaMini}>Continue</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
