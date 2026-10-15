import { useState } from "react";
import { changePassword } from "../../../api/auth";
import { isValidPassword } from "../../../auth/validation";
import AccountLayout from "../../../components/auth/AccountLayout/AccountLayout";
import styles from "./ChangePasswordPage.module.css";

function EyeIcon({ hidden }) {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z"/><circle cx="10" cy="10" r="2.3"/>{hidden ? <path d="m4 4 12 12"/> : null}</svg>;
}

function PasswordInput({ label, hint, error, ...props }) {
  const [visible, setVisible] = useState(false);
  return <label className={styles.field}><span>{label}</span><div className={`${styles.inputWrap} ${error ? styles.inputError : ""}`}><input {...props} type={visible ? "text" : "password"}/><button type="button" onClick={() => setVisible((value) => !value)} aria-label={visible ? "Hide password" : "Show password"}><EyeIcon hidden={visible}/></button></div>{hint ? <small>{hint}</small> : null}{error ? <em role="alert">{error}</em> : null}</label>;
}

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess(false);
    if (!currentPassword) return setError("Enter your current password.");
    if (!isValidPassword(newPassword)) return setError("Password must be at least 8 characters and include letters and numbers.");
    if (newPassword !== confirmation) return setError("New password and confirmation do not match.");
    setLoading(true);
    try {
      await changePassword({ currentPassword, newPassword });
      setSuccess(true);
      setCurrentPassword(""); setNewPassword(""); setConfirmation("");
    } catch (requestError) {
      setError(requestError.status === 400 || requestError.status === 401 ? (requestError.message || "Current password is incorrect.") : "We couldn't update your password. Please try again.");
    } finally { setLoading(false); }
  }

  return <AccountLayout section="SECURITY" title="Security"><section className={styles.card}><h2>Change password</h2><p>Update the password used to access your COMPLEEQ account.</p><form onSubmit={handleSubmit} noValidate><PasswordInput label="Current password" placeholder="Enter current password" autoComplete="current-password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/><PasswordInput label="New password" placeholder="Enter new password" hint="At least 8 characters" autoComplete="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/><PasswordInput label="Confirm new password" placeholder="Confirm new password" autoComplete="new-password" value={confirmation} onChange={(e) => setConfirmation(e.target.value)}/>{error ? <div className={styles.error} role="alert">{error}</div> : null}{success ? <div className={styles.success} role="status">Password updated successfully.</div> : null}<button className={styles.submit} disabled={loading}>{loading ? "Updating…" : "Update password"}</button></form></section></AccountLayout>;
}
