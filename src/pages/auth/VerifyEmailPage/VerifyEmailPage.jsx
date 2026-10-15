import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import {
  AuthHeading,
  EmailChip,
  InlineMessage,
  PrimaryButton,
  SecondaryLink,
} from "../../../components/auth/AuthForm/AuthForm";
import { resendVerification, verifyEmail } from "../../../api/auth";
import { maskEmail } from "../../../auth/validation";
import styles from "./VerifyEmailPage.module.css";

/**
 * Figma 01 — Email Verification, all six states.
 * status: pending (01-1) | resending (01-2) | resent (01-3) | resendFailed (01-4)
 *       | verifying | verified (01-5) | expired (01-6)
 *
 * Arriving with ?token= runs the verification immediately; arriving without
 * one (straight after sign-up) shows the pending/resend screen.
 */
export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  const [status, setStatus] = useState(token ? "verifying" : "pending");

  useEffect(() => {
    if (!token) return;

    let cancelled = false;
    (async () => {
      try {
        await verifyEmail({ token });
        if (!cancelled) setStatus("verified");
      } catch (error) {
        if (cancelled) return;
        const invalidLink =
          error.status === 400 ||
          error.status === 404 ||
          error.status === 409 ||
          error.status === 410;
        setStatus(invalidLink ? "expired" : "verificationFailed");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  async function handleResend() {
    if (!email) {
      setStatus("resendFailed");
      return;
    }

    setStatus("resending");
    try {
      await resendVerification({ email });
      setStatus("resent");
    } catch {
      setStatus("resendFailed");
    }
  }

  async function handleRetryVerification() {
    setStatus("verifying");
    try {
      await verifyEmail({ token });
      setStatus("verified");
    } catch (error) {
      const invalidLink =
        error.status === 400 ||
        error.status === 404 ||
        error.status === 409 ||
        error.status === 410;
      setStatus(invalidLink ? "expired" : "verificationFailed");
    }
  }

  if (status === "verifying") {
    return (
      <AuthLayout supportNote>
        <AuthHeading
          eyebrow="Verify account"
          title="Verifying your email"
          description="Hold on while we confirm your verification link."
        />
        <PrimaryButton loading loadingLabel="Verifying…">
          Verifying…
        </PrimaryButton>
      </AuthLayout>
    );
  }

  if (status === "verified") {
    const destination = `/login?verified=1${
      email ? `&email=${encodeURIComponent(email)}` : ""
    }`;
    return (
      <AuthLayout supportNote>
        <AuthHeading
          eyebrow="Account verified"
          title="Email verified"
          description="Your email has been successfully verified."
        />
        <PrimaryButton type="button" onClick={() => navigate(destination)}>
          Continue to sign in
        </PrimaryButton>
        <SecondaryLink prefix="Wrong email address?" to="/signup">
          Sign up with another email
        </SecondaryLink>
      </AuthLayout>
    );
  }

  if (status === "verificationFailed") {
    return (
      <AuthLayout supportNote>
        <AuthHeading
          eyebrow="Verification unavailable"
          title="We couldn't verify your email"
          description="The service is temporarily unavailable. Please try the link again."
        />
        <PrimaryButton type="button" onClick={handleRetryVerification}>
          Try again
        </PrimaryButton>
        <SecondaryLink to="/login" plain>
          Back to Login
        </SecondaryLink>
      </AuthLayout>
    );
  }

  if (status === "expired") {
    return (
      <AuthLayout supportNote>
        <AuthHeading
          eyebrow="Link expired"
          title="Verification link expired"
          description="This verification link is no longer valid."
        />
        <div className={styles.stack}>
          {email ? (
            <>
              <EmailChip email={maskEmail(email)} />
              <PrimaryButton type="button" onClick={handleResend}>
                Send new verification link
              </PrimaryButton>
            </>
          ) : (
            <PrimaryButton type="button" onClick={() => navigate("/login")}>
              Back to sign in
            </PrimaryButton>
          )}
          <SecondaryLink to="/login" plain>
            Back to Login
          </SecondaryLink>
        </div>
      </AuthLayout>
    );
  }

  const isResending = status === "resending";
  const isResent = status === "resent";
  const isResendFailed = status === "resendFailed";

  return (
    <AuthLayout supportNote>
      <AuthHeading
        eyebrow="Verify account"
        title="Verify your email"
        description="We've sent a verification link to your email address. Check your inbox and click the link to activate your COMPLEEQ account."
      />

      <div className={styles.stack}>
        <EmailChip email={maskEmail(email) || "your email address"} />

        <PrimaryButton
          type="button"
          onClick={handleResend}
          loading={isResending}
          loadingLabel="Sending…"
          disabled={!email}
        >
          Resend verification email
        </PrimaryButton>

        {!email ? (
          <InlineMessage tone="error">
            We need your email address to resend the verification link.
          </InlineMessage>
        ) : null}

        {isResent ? (
          <InlineMessage tone="success">
            Verification email sent — Check your inbox for a new verification
            link.
          </InlineMessage>
        ) : null}

        {isResendFailed ? (
          <InlineMessage tone="error">
            We couldn&apos;t resend the verification email. Please try again.
          </InlineMessage>
        ) : null}

        {isResent || isResendFailed || !email ? null : (
          <SecondaryLink prefix="Wrong email address?" to="/signup">
            Sign up with another email
          </SecondaryLink>
        )}
      </div>
    </AuthLayout>
  );
}
