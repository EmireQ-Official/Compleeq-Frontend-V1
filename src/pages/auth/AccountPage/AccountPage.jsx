import { useNavigate } from "react-router-dom";
import AccountLayout from "../../../components/auth/AccountLayout/AccountLayout";
import styles from "./AccountPage.module.css";

export default function AccountPage() {
  const navigate = useNavigate();
  return (
    <AccountLayout section="ACCOUNT" title="Account">
      <section className={styles.card}>
        <span>ACCOUNT MANAGEMENT</span>
        <h2>Deactivate account</h2>
        <p>Deactivate your COMPLEEQ account and prevent access to the application.</p>
        <button type="button" onClick={() => navigate("/account/deactivate")}>Deactivate account</button>
      </section>
    </AccountLayout>
  );
}
