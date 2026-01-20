import { useTranslation } from "react-i18next";
import styles from "./LanguageToggle.module.css";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className={styles.wrap} aria-label={t("language.label")}>
      <button
        type="button"
        className={i18n.language === "en" ? styles.active : styles.button}
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("language.english")}
      </button>
      <button
        type="button"
        className={i18n.language === "es" ? styles.active : styles.button}
        onClick={() => i18n.changeLanguage("es")}
      >
        {t("language.spanish")}
      </button>
    </div>
  );
};

export default LanguageToggle;
