import styles from "./PlatformHero.module.css";

const PlatformHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true"></span>
          <span className={styles.eyebrowText}>THE COMPLEEQ PLATFORM</span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Everything your compliance</span>
          <span className={styles.headlineLine}>team needs to stay in control</span>
        </h1>

        <p className={styles.description}>
          <span className={styles.descLine}>
            Manage entities, obligations, documents, cases, workflows and
          </span>
          <span className={styles.descLine}>
            reporting from one connected workspace built for continuous compliance.
          </span>
        </p>

        <div className={styles.ctaGroup}>
          <a href="/book-a-demo" className={styles.primaryCta}>
            Book a Demo <span className={styles.arrow}>&rarr;</span>
          </a>
          <a href="/platform" className={styles.secondaryCta}>
            Explore the Platform
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;