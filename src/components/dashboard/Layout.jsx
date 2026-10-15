// Layout component for Dashboard pages
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    {/* Sidebar could be added here in the future */}
    <main className={styles.main}>{children}</main>
  </div>
);

export default Layout;
