import { request } from "./client";
import { clearSession, saveAccount, saveTokens } from "../auth/tokenStorage";

/** POST /accounts/register/ — RegisterRequest { email, password, first_name?, last_name? } */
export function register({ email, password, firstName, lastName }) {
  return request("/accounts/register/", {
    method: "POST",
    body: {
      email,
      password,
      ...(firstName ? { first_name: firstName } : {}),
      ...(lastName ? { last_name: lastName } : {}),
    },
  });
}

/** POST /accounts/login/ — returns AuthResponse { account, tokens }. */
export async function login({ email, password }) {
  const data = await request("/accounts/login/", {
    method: "POST",
    body: { email, password },
  });
  if (data?.tokens) saveTokens(data.tokens);
  if (data?.account) saveAccount(data.account);
  return data;
}

/** POST /accounts/verify-email/ — VerifyEmailRequest { token } */
export async function verifyEmail({ token }) {
  const account = await request("/accounts/verify-email/", {
    method: "POST",
    body: { token },
  });
  if (account) saveAccount(account);
  return account;
}

/** POST /accounts/resend-verification/ — ResendVerificationRequest { email } */
export function resendVerification({ email }) {
  return request("/accounts/resend-verification/", {
    method: "POST",
    body: { email },
  });
}

/** POST /accounts/password/forgot/ — PasswordForgotRequest { email } */
export function forgotPassword({ email }) {
  return request("/accounts/password/forgot/", {
    method: "POST",
    body: { email },
  });
}

/** POST /accounts/password/reset/ — PasswordResetRequest { token, new_password } */
export function resetPassword({ token, newPassword }) {
  return request("/accounts/password/reset/", {
    method: "POST",
    body: { token, new_password: newPassword },
  });
}

/** POST /accounts/password/change/ — authenticated. */
export function changePassword({ currentPassword, newPassword }) {
  return request("/accounts/password/change/", {
    method: "POST",
    auth: true,
    body: { current_password: currentPassword, new_password: newPassword },
  });
}

/** GET /accounts/me/ — authenticated. */
export async function getMe() {
  const account = await request("/accounts/me/", { auth: true });
  if (account) saveAccount(account);
  return account;
}

/** POST /accounts/logout/ — authenticated. Clears local session regardless of outcome. */
export async function logout() {
  try {
    await request("/accounts/logout/", { method: "POST", auth: true });
  } finally {
    clearSession();
  }
}

/** POST /accounts/deactivate/ — authenticated. */
export function deactivateAccount({ confirm = true } = {}) {
  return request("/accounts/deactivate/", {
    method: "POST",
    auth: true,
    body: { confirm },
  });
}
