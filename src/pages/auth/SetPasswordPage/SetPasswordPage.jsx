import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import {
  AuthHeading,
  PasswordField,
  PasswordHints,
  PrimaryButton,
  SecondaryLink,
} from "../../../components/auth/AuthForm/AuthForm";
import { register } from "../../../api/auth";
import { isValidPassword } from "../../../auth/validation";
import styles from "./SetPasswordPage.module.css";

const HINTS = ["Min 8 characters", "Include letters & numbers"];

/**
 * Second half of sign-up. The Figma "Create account" screen only collects an
 * email, but RegisterRequest requires a password, so this step reuses the
 * 03 Reset Password layout to complete the payload.
 *
 * status: idle | loading | serverError | conflict
 */
export default function SetPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [status, setStatus] = useState("idle");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  // Reached directly without an email — send the user back to step one.
  if (!email) return <Navigate to="/signup" replace />;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isValidPassword(password)) {
      setFieldError("Password does not meet requirements.");
      return;
    }
    if (password !== confirmPassword) {
      setFieldError("Passwords do not match.");
      return;
    }

    setFieldError("");
    setServerMessage("");
    setStatus("loading");

    try {
      await register({ email, password });
      navigate(`/verify-email?email=${encodeURIComponent(email)}`, {
        replace: true,
      });
    } catch (error) {
      if (error.status === 409) {
        setStatus("conflict");
        setServerMessage(
          error.message || "An account with this email already exists.",
        );
      } else if (error.isValidation) {
        setStatus("idle");
        setFieldError(error.message || "Password does not meet requirements.");
      } else {
        setStatus("serverError");
        setServerMessage("We couldn't create your account. Please try again.");
      }
    }
  }

  const isServerError = status === "serverError";
  const isConflict = status === "conflict";

  return (
    <AuthLayout>
      <AuthHeading
        eyebrow="Account security"
        title="Create your password"
        description="Choose a highly secure corporate password for your COMPLEEQ workspace access."
      />

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <p className={styles.emailNote}>
          Creating an account for <strong>{email}</strong>
        </p>

        <PasswordField
          label="New password"
          name="new-password"
          placeholder="••••••••••••"
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <PasswordField
          label="Confirm new password"
          name="confirm-password"
          placeholder="••••••••••••"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={fieldError || undefined}
        />

        <PasswordHints hints={HINTS} />

        {serverMessage ? (
          <p className={styles.serverError} role="alert">
            {serverMessage}
          </p>
        ) : null}

        <PrimaryButton
          loading={status === "loading"}
          loadingLabel="Creating account…"
        >
          {isServerError ? "Try again" : "Create account"}
        </PrimaryButton>

        {isServerError ? null : (
          <SecondaryLink
            prefix={isConflict ? "Already registered?" : "Nevermind, take me back?"}
            to="/login"
          >
            Sign In
          </SecondaryLink>
        )}
      </form>
    </AuthLayout>
  );
}
