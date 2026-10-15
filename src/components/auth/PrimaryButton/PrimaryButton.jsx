import styles from "../AuthForm/AuthForm.module.css";

/**
 * PrimaryButton – a full-width button used across auth pages.
 *
 * Props:
 *   - `loading` (boolean): shows a loading label and disables the button.
 *   - `loadingLabel` (string): label shown while loading (default "Sending…").
 *   - `variant` ("primary" | "secondary" | "danger"): visual treatment.
 *   - all other button props are spread onto the underlying `<button>` element.
 */
export default function PrimaryButton({
  children,
  loading = false,
  loadingLabel = "Sending…",
  variant = "primary",
  ...buttonProps
}) {
  const variantClass =
    variant === "secondary"
      ? styles.secondaryButton
      : variant === "danger"
        ? styles.dangerButton
        : "";

  return (
    <button
      type="submit"
      {...buttonProps}
      className={`${styles.primaryButton} ${variantClass}`.trim()}
      disabled={loading || buttonProps.disabled}
      aria-busy={loading || undefined}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}
