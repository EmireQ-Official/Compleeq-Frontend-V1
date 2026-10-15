import {
  clearSession,
  getAccessToken,
  getRefreshToken,
  saveAccount,
  saveTokens,
} from "../auth/tokenStorage";

const BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "/api/v1"
).replace(/\/$/, "");

/**
 * Normalised failure. The COMPLEEQ API returns APIError
 * { code, message, details, request_id } on every 4xx/5xx.
 */
export class ApiError extends Error {
  constructor({ status, code, message, details, requestId }) {
    super(message || "Something went wrong. Please try again.");
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.details = details;
    this.requestId = requestId;
  }

  /** 400/422 — the request was understood but the payload was rejected. */
  get isValidation() {
    return this.status === 400 || this.status === 422;
  }

  /** 404/410 — used by the verification/reset links once they expire. */
  get isExpired() {
    return this.status === 404 || this.status === 410;
  }

  get isRateLimited() {
    return this.status === 429;
  }

  /** Network failures and 5xx both land on the design's server-error state. */
  get isServer() {
    return this.status === 0 || this.status >= 500;
  }
}

async function parseBody(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

async function refreshAccessToken() {
  const refresh_token = getRefreshToken();
  if (!refresh_token) return false;

  const response = await fetch(`${BASE_URL}/accounts/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token }),
  });

  if (!response.ok) {
    clearSession();
    return false;
  }

  const body = await parseBody(response);
  const tokens = body?.tokens ?? body;
  if (!tokens?.access_token) {
    clearSession();
    return false;
  }
  saveTokens(tokens);
  if (body?.account) saveAccount(body.account);
  return true;
}

/**
 * @param {string} path     path below the API base, e.g. "/accounts/login/"
 * @param {object} options  { method, body, auth, retryOn401 }
 */
export async function request(path, options = {}) {
  const { method = "GET", body, auth = false, retryOn401 = true } = options;

  const headers = { Accept: "application/json" };
  if (body !== undefined) headers["Content-Type"] = "application/json";

  if (auth) {
    const token = getAccessToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    // DNS failure, offline, CORS rejection — treated as a server error.
    throw new ApiError({
      status: 0,
      code: "network_error",
      message: "We couldn't reach the server. Please try again.",
    });
  }

  if (response.status === 401 && auth && retryOn401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      return request(path, { ...options, retryOn401: false });
    }
  }

  const payload = await parseBody(response);

  if (!response.ok) {
    throw new ApiError({
      status: response.status,
      code: payload?.code,
      message: payload?.message,
      details: payload?.details,
      requestId: payload?.request_id,
    });
  }

  return payload;
}

export { BASE_URL };
