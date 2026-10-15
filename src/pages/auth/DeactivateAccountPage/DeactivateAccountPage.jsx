import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deactivateAccount } from "../../../api/auth";
import { clearSession } from "../../../auth/tokenStorage";
import AccountLayout from "../../../components/auth/AccountLayout/AccountLayout";
import styles from "./DeactivateAccountPage.module.css";

export default function DeactivateAccountPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function confirmDeactivate() {
    setLoading(true); setError("");
    try { await deactivateAccount({ confirm: true }); clearSession(); setSuccess(true); }
    catch (requestError) { setError(requestError.message || "We couldn't deactivate your account. Please try again."); }
    finally { setLoading(false); }
  }

  return <AccountLayout section="ACCOUNT" title="Account"><section className={styles.card}><span>ACCOUNT MANAGEMENT</span><h2>Deactivate account</h2><p>Deactivate your COMPLEEQ account and prevent access to the application.</p><button type="button">Deactivate account</button></section><div className={styles.overlay}><div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="deactivate-title">{success ? <><div className={styles.successIcon}>✓</div><h2 id="deactivate-title">Account deactivated</h2><p>Your account has been deactivated and you have been signed out.</p><div className={styles.actions}><button className={styles.danger} onClick={() => navigate("/", { replace:true })}>Return home</button></div></> : <><div className={styles.titleRow}><span className={styles.warningIcon}>!</span><h2 id="deactivate-title">Deactivate account?</h2></div><p>Deactivating your account will prevent you from accessing COMPLEEQ.</p><p className={styles.muted}>You may lose access to your workspace and account features.</p>{error ? <div className={styles.error} role="alert">{error}</div> : null}<div className={styles.actions}><button className={styles.cancel} onClick={() => navigate("/account")} disabled={loading}>Cancel</button><button className={styles.danger} onClick={confirmDeactivate} disabled={loading}>{loading ? "Deactivating…" : "Deactivate account"}</button></div></>}</div></div></AccountLayout>;
}
