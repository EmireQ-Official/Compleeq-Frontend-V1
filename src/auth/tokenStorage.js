const ACCESS_KEY = "compleeq.access_token";
const REFRESH_KEY = "compleeq.refresh_token";
const EXPIRY_KEY = "compleeq.token_expires_at";
const ACCOUNT_KEY = "compleeq.account";

function safeRead(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWrite(key, value) {
  try {
    if (value === null || value === undefined) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch {
    /* storage unavailable (private mode, blocked cookies) — stay in memory only */
  }
}

export function getAccessToken() {
  return safeRead(ACCESS_KEY);
}

export function getRefreshToken() {
  return safeRead(REFRESH_KEY);
}

/** Persists a TokenPair from AuthResponse. */
export function saveTokens(tokens) {
  if (!tokens) return;
  safeWrite(ACCESS_KEY, tokens.access_token ?? null);
  safeWrite(REFRESH_KEY, tokens.refresh_token ?? null);
  if (typeof tokens.expires_in === "number") {
    safeWrite(EXPIRY_KEY, String(Date.now() + tokens.expires_in * 1000));
  }
}

export function saveAccount(account) {
  safeWrite(ACCOUNT_KEY, account ? JSON.stringify(account) : null);
}

export function getAccount() {
  const raw = safeRead(ACCOUNT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSession() {
  [ACCESS_KEY, REFRESH_KEY, EXPIRY_KEY, ACCOUNT_KEY].forEach((key) =>
    safeWrite(key, null),
  );
}
