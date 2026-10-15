import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import {
  AuthHeading,
  PasswordField,
  PasswordHints,
  PrimaryButton,
  SecondaryLink,
} from "../../../components/auth/AuthForm/AuthForm";
import { resetPassword } from "../../../api/auth";
import { isValidPassword } from "../../../auth/validation";
import styles from "./ResetPasswordPage.module.css";

const HINTS = ["Min 8 characters", "Include letters & numbers"];

function isExpiredLinkError(error) {
  return (
    error.isExpired ||
    error.code === "expired" ||
    /expired|invalid (?:link|token)/i.test(error.message || "")
  );
}

/**
 * Figma 03 — Reset Password.
 * status: idle | loading | success | expired | serverError
 * Field-level problems (03-2 validation, 03-3 mismatch) stay in `fieldError`
 * so the form keeps its normal shape while showing the inline message.
 */
export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";

  // No token in the URL means the link is unusable — Figma 03-6.
  const [status, setStatus] = useState(token ? "idle" : "expired");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldError, setFieldError] = useState("");

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
    setStatus("loading");

    try {
      await resetPassword({ token, newPassword: password });
      setStatus("success");
    } catch (error) {
      if (isExpiredLinkError(error)) {
        setStatus("expired");
      } else if (error.isValidation) {
        setStatus("idle");
        setFieldError(error.message || "Password does not meet requirements.");
      } else {
        setStatus("serverError");
      }
    }
  }

  if (status === "success") {
    return (
      <AuthLayout>
        <AuthHeading
          eyebrow="Password updated"
          title="Password reset successfully"
          description="Your password has been updated."
        />
        <PrimaryButton type="button" onClick={() => navigate("/login")}>
          Log in
        </PrimaryButton>
      </AuthLayout>
    );
  }

  if (status === "expired") {
    return (
      <AuthLayout>
        <AuthHeading
          eyebrow="Link expired"
          title="Reset link expired"
          description="This password reset link is invalid or has expired."
        />
        <PrimaryButton
          type="button"
          onClick={() => navigate("/forgot-password")}
        >
          Request a new link
        </PrimaryButton>
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
        eyebrow="Account security"
        title="Create a new password"
        description="Choose a highly secure corporate password for your COMPLEEQ workspace access."
      />

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
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

        {isServerError ? (
          <p className={styles.serverError} role="alert">
            We couldn&apos;t reset your password. Please try again.
          </p>
        ) : null}

        <PrimaryButton
          loading={status === "loading"}
          loadingLabel="Resetting…"
        >
          {isServerError ? "Try again" : "Reset password"}
        </PrimaryButton>

        {isServerError ? null : (
          <SecondaryLink prefix="Nevermind, take me back?" to="/login">
            Sign In
          </SecondaryLink>
        )}
      </form>
    </AuthLayout>
  );
}
