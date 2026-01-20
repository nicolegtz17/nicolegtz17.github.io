import { useTranslation } from "react-i18next";
import styles from "./Resume.module.css";

const Resume = () => {
  const { t } = useTranslation();
  const resumeFile = "Nicole Gutierrez Resume 2026.pdf";
  const resumeUrl = `${import.meta.env.BASE_URL}${encodeURI(resumeFile)}`;

  return (
    <section className={styles.resume}>
      <header className={styles.header}>
        <p className={styles.kicker}>{t("resume.kicker")}</p>
        <h1>{t("resume.heading")}</h1>
        <p className={styles.lede}>{t("resume.lede")}</p>
        <a className={styles.download} href={resumeUrl} download={resumeFile}>
          {t("resume.download")}
        </a>
      </header>

      <div className={styles.viewer}>
        <iframe title="Resume PDF" src={resumeUrl} className={styles.frame} />
      </div>
    </section>
  );
};

export default Resume;
