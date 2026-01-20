import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            NG
          </span>
          <div>
            <p className={styles.title}>{t("layout.title")}</p>
            <p className={styles.subtitle}>{t("layout.subtitle")}</p>
          </div>
        </div>
        <nav
          aria-label="Primary"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <NavLink to="/" end className={styles.link}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/projects" className={styles.link}>
            {t("nav.projects")}
          </NavLink>
          <NavLink to="/blog" className={styles.link}>
            {t("nav.blog")}
          </NavLink>
          <NavLink to="/resume" className={styles.link}>
            {t("nav.resume")}
          </NavLink>
        </nav>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
