import { Link } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import logo from "../../../assets/images/compleeq-auth-logo.svg";
import AuthPanel from "../AuthPanel/AuthPanel";
import { AuthHeading } from "../AuthForm/AuthForm";

/**
 * The split shell every authentication screen shares (Figma: Body 1536x730).
 * Left: white column with logo, centred content and legal footer.
 * Right: dark product panel.
 */
export default function AuthLayout({
  children,
  supportNote = null,
  title,
  description,
}) {
  return (
    <div className={styles.body}>
      <section className={styles.left}>
        <div className={styles.column}>
          <Link to="/" className={styles.logoLink} aria-label="Compleeq home">
            <img src={logo} alt="Compleeq" className={styles.logo} />
          </Link>

          <div className={styles.content}>
            {title ? (
              <AuthHeading title={title} description={description} />
            ) : null}
            {children}
          </div>

          <div className={styles.footer}>
            {supportNote ? (
              <p className={styles.legal}>
                Didn&apos;t receive the email? Check your spam folder or contact{" "}
                <a className={styles.legalLink} href="mailto:support@compleeq.io">
                  support@compleeq.io
                </a>
                .
              </p>
            ) : null}
            <p className={styles.legal}>
              By continuing, you agree to COMPLEEQ{" "}
              <a className={styles.legalLink} href="/terms">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className={styles.legalLink} href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <AuthPanel />
    </div>
  );
}
