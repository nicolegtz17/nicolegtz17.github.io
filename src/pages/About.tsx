import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();
  const heroImageUrl = `${import.meta.env.BASE_URL}nicole.jpeg`;

  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>{t("about.kicker")}</p>
          <h1>{t("about.heading")}</h1>
          {t("about.lede")
            .split("\n\n")
            .map((paragraph) => (
              <p key={paragraph} className={styles.lede}>
                {paragraph}
              </p>
            ))}
          <div className={styles.ctaRow}>
            <Link to="/resume" className={styles.primaryButton}>
              {t("about.ctaResume")}
            </Link>
            <Link to="/projects" className={styles.secondaryButton}>
              {t("about.ctaProjects")}
            </Link>
          </div>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.heroImage}>
            <img src={heroImageUrl} alt={t("about.heroImageAlt")} />
          </div>
          <div className={styles.heroCard}>
            <p className={styles.heroCardTitle}>{t("about.heroCardTitle")}</p>
            <ul className={styles.heroBadges}>
              <li>{t("about.heroBadgeOne")}</li>
              <li>{t("about.heroBadgeTwo")}</li>
              <li>{t("about.heroBadgeThree")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
