import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import { AuthHeading } from "../../../components/auth/AuthForm/AuthForm";
import { isValidEmail } from "../../../auth/validation";
import form from "../../../components/auth/AuthForm/AuthForm.module.css";
import styles from "./CreateAccountPage.module.css";

/**
 * Figma: "Create account".
 * Collects the work email only; the password step that RegisterRequest
 * requires lives on /signup/password.
 */
export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError("Enter a valid work email address.");
      return;
    }

    setError("");
    navigate("/signup/password", { state: { email: trimmed } });
  }

  return (
    <AuthLayout>
      <AuthHeading
        eyebrow="Get started"
        title="Start building your compliance workspace."
        description="Bring your company, compliance obligations, documents and monitoring into one connected workspace."
      />

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div
          className={`${styles.inlineField} ${error ? styles.inlineFieldError : ""}`}
        >
          <input
            type="email"
            name="email"
            className={styles.inlineInput}
            placeholder="What's your work email?"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label="Work email"
            aria-invalid={error ? "true" : undefined}
            autoComplete="email"
          />
          <button type="submit" className={styles.inlineButton}>
            Get started
          </button>
        </div>

        {error ? (
          <p className={form.fieldError} role="alert">
            {error}
          </p>
        ) : null}

        <p className={styles.signInRow}>
          Already have an account?{" "}
          <Link className={form.secondaryAction} to="/login">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
