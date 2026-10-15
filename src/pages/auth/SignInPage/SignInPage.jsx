import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout/AuthLayout";
import {
  AuthHeading,
  InlineMessage,
  PasswordField,
  PrimaryButton,
  SecondaryLink,
  TextField,
} from "../../../components/auth/AuthForm/AuthForm";
import { login } from "../../../api/auth";
import { isValidEmail } from "../../../auth/validation";
import form from "../../../components/auth/AuthForm/AuthForm.module.css";
import styles from "./SignInPage.module.css";

/**
 * Not present in the Figma canvas — authored in the same design language as
 * 02/03 because five screens link to it and POST /accounts/login/ exists.
 *
 * status: idle | loading | invalid | unverified | serverError
 */
export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const verified = searchParams.get("verified") === "1";

  const [status, setStatus] = useState("idle");
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");

  const requestedPath = location.state?.from?.pathname;

  const destination =
    requestedPath &&
    requestedPath !== "/login" &&
    requestedPath !== "/on-boarding"
      ? requestedPath
      : "/dashboard";

  async function handleSubmit(event) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setEmailError("Email is required.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setEmailError("Enter a valid work email address.");
      return;
    }
    if (!password) {
      setEmailError("");
      setMessage("Enter your password.");
      return;
    }

    setEmailError("");
    setMessage("");
    setStatus("loading");

    try {
      console.log("Login started");

      await login({ email: trimmed, password });

      console.log("Login successful");
      console.log("Navigating to:", destination);

      navigate(destination, { replace: true });
    } catch (error) {
      console.error("Login failed:", {
        status: error.status,
        code: error.code,
        message: error.message,
      });

      if (error.status === 401 || error.status === 400) {
        setStatus("invalid");
        setMessage(error.message || "Incorrect email or password.");
      } else if (error.status === 403) {
        setStatus("unverified");
        setMessage(
          error.message || "Verify your email address before signing in.",
        );
      } else if (error.isRateLimited) {
        setStatus("invalid");
        setMessage(
          error.message || "Too many attempts. Please wait a moment and retry.",
        );
      } else {
        setStatus("serverError");
        setMessage("We couldn't sign you in. Please try again.");
      }
    }
  }

  const isServerError = status === "serverError";

  return (
    <AuthLayout>
      <AuthHeading
        eyebrow="Welcome back"
        title="Sign in to COMPLEEQ"
        description="Access your compliance workspace, obligations and monitoring in one place."
      />

      {verified ? (
        <InlineMessage tone="success">
          Email verified. Sign in to continue to COMPLEEQ.
        </InlineMessage>
      ) : null}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <TextField
          label="Work email"
          type="email"
          name="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={emailError || undefined}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="••••••••••••"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <p className={styles.forgotRow}>
          <Link className={form.secondaryAction} to="/forgot-password">
            Forgot your password?
          </Link>
        </p>

        {message ? (
          <p className={styles.error} role="alert">
            {message}
          </p>
        ) : null}

        {status === "unverified" ? (
          <p className={styles.forgotRow}>
            <Link
              className={form.secondaryAction}
              to={`/verify-email?email=${encodeURIComponent(email.trim())}`}
            >
              Resend verification email
            </Link>
          </p>
        ) : null}

        <PrimaryButton
          loading={status === "loading"}
          loadingLabel="Signing in…"
        >
          {isServerError ? "Try again" : "Sign in"}
        </PrimaryButton>

        <SecondaryLink prefix="New to COMPLEEQ?" to="/signup">
          Create an account
        </SecondaryLink>
      </form>
    </AuthLayout>
  );
}
