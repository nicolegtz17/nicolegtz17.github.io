import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";

const Home = () => {
  const { t } = useTranslation();
  const portraitUrl = `${import.meta.env.BASE_URL}about-portrait.svg`;

  return (
    <div className={styles.home}>
      <section className={styles.aboutHero}>
        <div>
          <p className={styles.kicker}>{t("home.aboutKicker")}</p>
          <h1>{t("home.aboutHeading")}</h1>
          <p className={styles.lede}>{t("home.aboutLede")}</p>
          <div className={styles.ctaRow}>
            <Link to="/about" className={styles.primaryButton}>
              {t("home.ctaAbout")}
            </Link>
            <Link to="/resume" className={styles.secondaryButton}>
              {t("home.ctaResume")}
            </Link>
            <Link to="/projects" className={styles.secondaryButton}>
              {t("home.ctaProjects")}
            </Link>
          </div>
        </div>
        <div className={styles.imageStack} aria-label="Nicole portrait illustration">
          <div className={styles.imageCard}>
            <img src={portraitUrl} alt="Stylized lavender portrait illustration" />
          </div>
        </div>
      </section>

      <section className={styles.portfolio} id="portfolio">
        <header className={styles.portfolioHeader}>
          <p className={styles.kicker}>{t("home.portfolioKicker")}</p>
          <h2>{t("home.portfolioHeading")}</h2>
          <p className={styles.lede}>{t("home.portfolioLede")}</p>
        </header>
        {/* <div className={styles.cardGrid} aria-label="Highlights">
          <article className={styles.card}>
            <h3>AI Product Strategy</h3>
            <p>Workstreams that turn ML prototypes into reliable, measurable wins.</p>
          </article>
          <article className={styles.card}>
            <h3>Slack + Workflow Design</h3>
            <p>Automations that make teams feel fast without feeling chaotic.</p>
          </article>
          <article className={styles.card}>
            <h3>Web Experiences</h3>
            <p>Soft, minimal interfaces with accessible, responsive systems.</p>
          </article>
        </div> */}
        <Link to="/projects" className={styles.primaryButton}>
          {t("home.portfolioCta")}
        </Link>
      </section>

      <section className={styles.connect}>
        <div>
          <p className={styles.kicker}>{t("home.connectKicker")}</p>
          <h2>{t("home.connectHeading")}</h2>
          <p className={styles.lede}>{t("home.connectLede")}</p>
        </div>
        <div className={styles.connectActions}>
          <a href="mailto:nicolea.gtz@gmail.com" className={styles.primaryButton}>
            {t("home.connectEmail")}
          </a>
          <Link to="/resume" className={styles.secondaryButton}>
            {t("home.connectResume")}
          </Link>
          <a
            href="https://www.linkedin.com/in/nicoleagtz/"
            className={styles.secondaryButton}
            target="_blank"
            rel="noreferrer"
          >
            {t("home.connectLinkedIn")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
