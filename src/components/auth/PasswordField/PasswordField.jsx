import { useId, useState } from "react";
import styles from "../AuthForm/AuthForm.module.css";

/**
 * PasswordField – input with a trailing eye icon to toggle visibility.
 * Mirrors the implementation in `src/components/auth/AuthForm/AuthForm.jsx`.
 */
export default function PasswordField({ label, error, id, ...inputProps }) {
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
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
        >
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
            {visible ? (
              <path
                d="M3 3L15 15"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            ) : null}
          </svg>
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
