import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import styles from "./ThemeToggle.module.css";

type ThemeMode = "light" | "dark";

const THEME_KEY = "theme";

const ThemeToggle = () => {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("theme-light", theme === "light");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const label = theme === "light" ? t("theme.switchToDark") : t("theme.switchToLight");

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={label}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className={styles.icon} aria-hidden="true">
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
      <span className={styles.text}>
        {theme === "light" ? t("theme.dark") : t("theme.light")}
      </span>
    </button>
  );
};

export default ThemeToggle;
