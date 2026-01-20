import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about}>
      <header className={styles.header}>
        <p className={styles.kicker}>{t("about.kicker")}</p>
        <h1>{t("about.heading")}</h1>
        {t("about.lede")
          .split("\n\n")
          .map((paragraph) => (
            <p key={paragraph} className={styles.lede}>
              {paragraph}
            </p>
          ))}
      </header>
      <div className={styles.columns}>
        <div>
          <h2>{t("about.whatIDo")}</h2>
          <ul>
            <li>{t("about.doOne")}</li>
            <li>{t("about.doTwo")}</li>
            <li>{t("about.doThree")}</li>
          </ul>
        </div>
        <div>
          <h2>{t("about.howIWork")}</h2>
          <ul>
            <li>{t("about.workOne")}</li>
            <li>{t("about.workTwo")}</li>
            <li>{t("about.workThree")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
