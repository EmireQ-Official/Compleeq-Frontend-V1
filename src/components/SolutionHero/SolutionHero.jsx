import styles from "./SolutionHero.module.css";

const SolutionHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true"></span>
          <span className={styles.eyebrowText}>
            GLOBAL COMPLIANCE INTELLIGENCE
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>
            Compliance looks different
          </span>
          <span className={styles.headlineLine}>for every business</span>
        </h1>

        <p className={styles.description}>
          <span className={styles.descLine}>
            Whether you're building your first compliance function or managing
            risk across complex entities and
          </span>
          <span className={styles.descLine}>
            jurisdictions, COMPLEEQ adapts to the way your organization
            operates.
          </span>
        </p>

        <div className={styles.ctaGroup}>
          <a href="/find-your-solution" className={styles.primaryCta}>
            Find your solution <span className={styles.arrow}>&rarr;</span>
          </a>
          <a href="/book-a-demo" className={styles.secondaryCta}>
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
