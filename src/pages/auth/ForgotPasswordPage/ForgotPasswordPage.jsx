import { useState } from "react";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import {
  AuthHeading,
  PrimaryButton,
  SecondaryLink,
  TextField,
} from "../../../components/auth/AuthForm/AuthForm";
import { forgotPassword } from "../../../api/auth";
import { isValidEmail } from "../../../auth/validation";
import styles from "./ForgotPasswordPage.module.css";

/**
 * Figma 02 — Forgot Password.
 * status: idle | loading | sent | serverError
 * 02-2 (invalid email) and 02-3 (empty field) are the same shape with
 * different copy, so they live in `fieldError`.
 */
export default function ForgotPasswordPage() {
  const [status, setStatus] = useState("idle");
  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setFieldError("Email is required.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setFieldError("Enter a valid work email address.");
      return;
    }

    setFieldError("");
    setStatus("loading");

    try {
      await forgotPassword({ email: trimmed });
      setStatus("sent");
    } catch (error) {
      if (error.isValidation) {
        setStatus("idle");
        setFieldError(error.message || "Enter a valid work email address.");
      } else if (error.isRateLimited) {
        setStatus("idle");
        setFieldError(
          error.message || "Too many attempts. Please wait a moment and retry.",
        );
      } else {
        setStatus("serverError");
      }
    }
  }

  if (status === "sent") {
    return (
      <AuthLayout>
        <AuthHeading
          eyebrow="Email sent"
          title="Check your email"
          description="Instructions to reset your password have been sent to your email. Please check your inbox and follow the link to create a new password."
        />
        <SecondaryLink to="/login" plain>
          Back to Login
        </SecondaryLink>
      </AuthLayout>
    );
  }

  const isServerError = status === "serverError";

  return (
    <AuthLayout>
      <AuthHeading
        eyebrow="Password recovery"
        title="Forgot your password?"
        description="Enter the email associated with your COMPLEEQ account and we'll send you instructions to reset your password."
      />

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <TextField
          label="Work email"
          type="email"
          name="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={fieldError || undefined}
        />

        {isServerError ? (
          <p className={styles.serverError} role="alert">
            We couldn&apos;t send the reset instructions. Please try again.
          </p>
        ) : null}

        <PrimaryButton loading={status === "loading"} loadingLabel="Sending…">
          {isServerError ? "Try again" : "Send reset link"}
        </PrimaryButton>

        {isServerError || fieldError ? null : (
          <SecondaryLink prefix="Remember your credentials?" to="/login">
            Back to Sign in
          </SecondaryLink>
        )}
      </form>
    </AuthLayout>
  );
}
