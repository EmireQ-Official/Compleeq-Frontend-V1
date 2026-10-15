import { NavLink } from "react-router-dom";
import styles from "./AccountLayout.module.css";

const NAV_ITEMS = [
  { label: "Profile", to: "/account/profile" },
  { label: "Security", to: "/account/change-password" },
  { label: "Account", to: "/account" },
];

export default function AccountLayout({ section, title, children }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <a className={styles.brand} href="/on-boarding" aria-label="Compleeq workspace">
          <span className={styles.brandMark} aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.5-2.7 8-7 10-4.3-2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
          </span>
          <span>COMPLEEQ</span>
        </a>
        <nav aria-label="Account settings">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/account"}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className={styles.main}>
        <header className={styles.heading}>
          <span>{section}</span>
          <h1>{title}</h1>
        </header>
        {children}
      </main>
    </div>
  );
}
