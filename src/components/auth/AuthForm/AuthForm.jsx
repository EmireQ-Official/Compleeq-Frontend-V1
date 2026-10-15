import { forwardRef, useId, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";

/** Small rule + uppercase label above every H1 (Figma: eyebrow-container). */
export function Eyebrow({ children }) {
  return (
    <span className={styles.eyebrow}>
      <span className={styles.eyebrowRule} />
      {children}
    </span>
  );
}

/** Eyebrow + H1 + supporting paragraph, at the Figma's 16px gap. */
export function AuthHeading({ eyebrow, title, description }) {
  return (
    <header className={styles.heading}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className={styles.title}>{title}</h1>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}

/** Labelled text input. `error` switches the border and prints the message. */
export const TextField = forwardRef(function TextField(
  { label, error, id, ...inputProps },
  ref,
) {
  const generatedId = useId();
  const fieldId = id || generatedId;

  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.label} htmlFor={fieldId}>
          {label}
        </label>
      ) : null}
      <div className={`${styles.inputShell} ${error ? styles.inputError : ""}`}>
        <input
          {...inputProps}
          id={fieldId}
          ref={ref}
          className={styles.input}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
        />
      </div>
      {error ? (
        <p className={styles.fieldError} id={`${fieldId}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
});

/** Password input with the Figma's trailing eye toggle. */
export function PasswordField({ label, error, id, ...inputProps }) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.field}>
      {label ? (
        <label className={styles.label} htmlFor={fieldId}>
          {label}
        </label>
      ) : null}
      <div className={`${styles.inputShell} ${error ? styles.inputError : ""}`}>
        <input
          {...inputProps}
          id={fieldId}
          type={visible ? "text" : "password"}
          className={styles.input}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${fieldId}-error` : undefined}
        />
        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          <EyeIcon off={visible} />
        </button>
      </div>
      {error ? (
        <p className={styles.fieldError} id={`${fieldId}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function EyeIcon({ off }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.5 9S4.5 3.75 9 3.75 16.5 9 16.5 9 13.5 14.25 9 14.25 1.5 9 1.5 9Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.2" />
      {off ? (
        <path
          d="M3 3L15 15"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}

/** Dotted requirement hints under the password fields. */
export function PasswordHints({ hints }) {
  return (
    <div className={styles.hints}>
      {hints.map((hint) => (
        <span key={hint} className={styles.hint}>
          <span className={styles.hintDot} />
          {hint}
        </span>
      ))}
    </div>
  );
}

/** Full-width primary action. Shows `loadingLabel` and blocks input while busy. */
export function PrimaryButton({
  children,
  loading = false,
  loadingLabel = "Sending…",
  ...buttonProps
}) {
  return (
    <button
      type="submit"
      {...buttonProps}
      className={styles.primaryButton}
      disabled={loading || buttonProps.disabled}
      aria-busy={loading || undefined}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}

/**
 * The single secondary link under the button (Figma shows exactly one).
 * `plain` renders it as muted body text — the form the expired-link and
 * check-your-email screens use for "Back to Login".
 */
export function SecondaryLink({ prefix, to, children, plain = false }) {
  return (
    <p className={styles.secondary}>
      {prefix ? <span>{prefix} </span> : null}
      <Link
        className={plain ? styles.secondaryPlain : styles.secondaryAction}
        to={to}
      >
        {children}
      </Link>
    </p>
  );
}

/**
 * Inline feedback banner. In the Figma this replaces the secondary link row
 * rather than stacking below it, so pages render one or the other.
 */
export function InlineMessage({ tone = "success", children }) {
  const toneClass = tone === "error" ? styles.messageError : styles.messageSuccess;
  return (
    <p className={`${styles.message} ${toneClass}`} role="status">
      <span className={styles.messageMark}>{tone === "error" ? "✗" : "✓"}</span>
      {children}
    </p>
  );
}

/** Masked address chip with the `Pending` badge (Figma: 01 Email Verification). */
export function EmailChip({ email, badge = "Pending" }) {
  return (
    <div className={styles.emailChip}>
      <span className={styles.emailChipLeft}>
        <MailIcon />
        <span className={styles.emailText}>{email}</span>
      </span>
      {badge ? <span className={styles.badge}>{badge}</span> : null}
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="3"
        width="13"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m2 4.5 6 4 6-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
