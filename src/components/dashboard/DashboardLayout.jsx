import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { clearSession } from "../../auth/tokenStorage";
import logo from "../../assets/images/compleeq-auth-logo.svg";
import styles from "./DashboardLayout.module.css";

const groups = [
  ["WORKSPACE", [["▦", "Overview", "/dashboard"]]],
  ["AI INTELLIGENCE", [["✣", "AI Analyst", "/dashboard/ai-analyst"], ["◉", "AI Copilot", "/dashboard/ai-copilot"]]],
  ["COMPLIANCE", [["□", "Calendar", "/dashboard/calendar"], ["▣", "Obligations", "/dashboard/obligations"], ["▤", "Regulatory Req.", "/dashboard/regulatory"], ["◇", "Corporate", "/dashboard/corporate"], ["▧", "Tax & Licenses", "/dashboard/licenses"]]],
  ["IDENTITY & RISK", [["♧", "KYC / KYB", "/dashboard/kyc"], ["◐", "AML & Sanctions", "/dashboard/aml"], ["▥", "Risk Scoring", "/dashboard/risk-scoring"]]],
  ["OWNERSHIP & OPS", [["⌘", "UBO Graph", "/dashboard/ubo"], ["♧", "Shareholders", "/dashboard/shareholders"], ["♙", "Tasks & Approvals", "/dashboard/tasks"], ["▤", "Reports", "/dashboard/reports"]]],
];

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const result = useMemo(() => {
    if (!query.trim()) return null;
    return groups.flatMap(([, items]) => items).find(([, label]) => label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const logout = () => {
    clearSession();
    navigate("/login");
  };

  return <div className={styles.shell}>
    <aside className={styles.sidebar}>
      <img className={styles.logo} src={logo} alt="Compleeq" />
      <nav>
        {groups.map(([group, items]) => <div className={styles.group} key={group}>
          <div className={styles.groupLabel}>{group}</div>
          {items.map(([icon, label, to]) => <NavLink key={to} to={to} end={to === "/dashboard"} className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ""}`}>
            <span className={styles.navIcon}>{icon}</span><span>{label}</span>
          </NavLink>)}
        </div>)}
      </nav>
    </aside>
    <div className={styles.workspace}>
      <header className={styles.topbar}>
        <div className={styles.searchWrap}>
          <span>⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search platform..." />
          {result && <button className={styles.searchResult} onClick={() => { navigate(result[2]); setQuery(""); }}>{result[1]}</button>}
        </div>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="Notifications" onClick={() => { setNotificationsOpen(!notificationsOpen); setProfileOpen(false); }}>♟<i /></button>
          <button className={styles.avatarButton} aria-label="Profile" onClick={() => { setProfileOpen(!profileOpen); setNotificationsOpen(false); }}><span>DA</span></button>
        </div>
        {notificationsOpen && <div className={styles.popover}>
          <div className={styles.popoverTitle}>Notifications <button onClick={() => setNotificationsOpen(false)}>×</button></div>
          <div className={styles.notice}><b>3 urgent obligations</b><span>Require review this week</span></div>
          <div className={styles.notice}><b>New sanctions match</b><span>Apex Global Holdings Ltd</span></div>
          <NavLink to="/dashboard/tasks">View all notifications</NavLink>
        </div>}
        {profileOpen && <div className={`${styles.popover} ${styles.profileMenu}`}>
          <div className={styles.profileIdentity}><span>DA</span><div><b>Demo Account</b><small>Compliance Admin</small></div></div>
          <NavLink to="/account">Account settings</NavLink>
          <button onClick={logout}>Sign out</button>
        </div>}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  </div>;
}
