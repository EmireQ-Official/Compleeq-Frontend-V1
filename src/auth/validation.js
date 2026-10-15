const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(String(value || "").trim());
}

/** Mirrors the two hints the Figma prints under the password fields. */
export function isValidPassword(value) {
  const password = String(value || "");
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
}

/** a••••@company.com — the masked form shown on the verification screens. */
export function maskEmail(email) {
  const value = String(email || "").trim();
  const at = value.indexOf("@");
  if (at < 1) return value;
  const local = value.slice(0, at);
  const domain = value.slice(at);
  const visible = local.slice(0, 1);
  const masked = "•".repeat(Math.max(local.length - 1, 1));
  return `${visible}${masked}${domain}`;
}
