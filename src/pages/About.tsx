import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();
  const heroImageUrl = `${import.meta.env.BASE_URL}nicole.jpeg`;
  const carouselImages = [
    {
      src: `${import.meta.env.BASE_URL}city.png`,
      alt: t("about.carouselCityAlt"),
      caption: t("about.carouselCityCaption"),
    },
    {
      src: `${import.meta.env.BASE_URL}sea-view.png`,
      alt: t("about.carouselSeaAlt"),
      caption: t("about.carouselSeaCaption"),
    },
    {
      src: `${import.meta.env.BASE_URL}pickleball.png`,
      alt: t("about.carouselPickleAlt"),
      caption: t("about.carouselPickleCaption"),
    },
    {
      src: `${import.meta.env.BASE_URL}matcha.png`,
      alt: t("about.carouselMatchaAlt"),
      caption: t("about.carouselMatchaCaption"),
    },
    {
      src: `${import.meta.env.BASE_URL}sushi.png`,
      alt: t("about.carouselSushiAlt"),
      caption: t("about.carouselSushiCaption"),
    },
    {
      src: `${import.meta.env.BASE_URL}tacos.png`,
      alt: t("about.carouselTacosAlt"),
      caption: t("about.carouselTacosCaption"),
    },
  ];
  const delay = (value: string): CSSProperties =>
    ({
      "--delay": value,
    }) as CSSProperties;

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

      <section className={styles.section} style={delay("0.08s")}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>{t("about.funKicker")}</p>
          <h2>{t("about.funHeading")}</h2>
          <p className={styles.lede}>{t("about.funLede")}</p>
        </div>
        <ul className={styles.funList}>
          <li>{t("about.funOne")}</li>
          <li>{t("about.funTwo")}</li>
          <li>{t("about.funThree")}</li>
          <li>{t("about.funFour")}</li>
          <li>{t("about.funFive")}</li>
        </ul>
      </section>

      <section className={styles.sectionAlt} style={delay("0.16s")}>
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>{t("about.carouselKicker")}</p>
          <h2>{t("about.carouselHeading")}</h2>
          <p className={styles.lede}>{t("about.carouselLede")}</p>
        </div>
        <div className={styles.carousel} role="region" aria-label={t("about.carouselLabel")}>
          <div className={styles.carouselTrack}>
            {carouselImages.map((image) => (
              <figure key={image.src} className={styles.carouselCard}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} style={delay("0.24s")}>
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
    </div>
  );
};

export default About;
