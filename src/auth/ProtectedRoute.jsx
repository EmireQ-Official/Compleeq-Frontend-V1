import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getMe } from "../api/auth";
import { clearSession, getAccessToken } from "./tokenStorage";

/**
 * ProtectedRoute – renders child routes only when the user is authenticated.
 *
 * Authentication check is a simple token‑presence validation using
 * `getAccessToken()`. If a token exists we assume the user is logged in.
 * For a more robust app you would replace this with a proper auth context
 * or hook that validates token expiry, refreshes it, etc.
 */
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const hasToken = Boolean(getAccessToken());
  const [status, setStatus] = useState(hasToken ? "checking" : "unauthenticated");

  useEffect(() => {
    if (!hasToken) return undefined;
    let cancelled = false;
    getMe()
      .then(() => { if (!cancelled) setStatus("authenticated"); })
      .catch(() => {
        clearSession();
        if (!cancelled) setStatus("unauthenticated");
      });
    return () => { cancelled = true; };
  }, [hasToken]);

  // If not authenticated, redirect to the login page, preserving the
  // attempted location so we can send the user back after a successful login.
  if (status === "unauthenticated") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (status === "checking") {
    return <div role="status" aria-live="polite" style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "Inter, system-ui, sans-serif", color: "#638a75" }}>Loading your account…</div>;
  }

  // Authenticated – render the nested route element(s).
  return children ?? <Outlet />;
};

export default ProtectedRoute;
