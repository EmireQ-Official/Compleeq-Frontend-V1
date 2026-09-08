import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>
            Global Compliance Intelligence
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine1}>Complete Compliance</span>
          <span className={styles.headlineLine2}>
            One Intelligent Platform.
          </span>
        </h1>

        <p className={styles.description}>
          Verify your business, understand ownership and risk, know what
          regulations apply,
          <br className={styles.lineBreak} />
          monitor what changes and turn compliance into action — from one
          intelligent platform.
        </p>

        <div className={styles.actions}>
          <a href="/book-a-demo" className={styles.primaryButton}>
            Book a Demo
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
          <a href="/platform" className={styles.secondaryButton}>
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
}
