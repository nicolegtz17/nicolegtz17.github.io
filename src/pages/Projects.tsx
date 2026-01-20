import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";

type TagKey = "all" | "ai" | "slack" | "sre" | "data" | "web";
type ProjectKey = "slackStudio" | "opsAtlas" | "signalSync" | "pulseRoom";

const PROJECTS: { key: ProjectKey; tags: TagKey[] }[] = [
  {
    key: "slackStudio",
    tags: ["slack", "ai"],
  },
  {
    key: "opsAtlas",
    tags: ["ai", "sre"],
  },
  {
    key: "signalSync",
    tags: ["ai", "data"],
  },
  {
    key: "pulseRoom",
    tags: ["sre", "data"],
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const tags: { key: TagKey; label: string }[] = [
    { key: "all", label: t("projects.tags.all") },
    { key: "ai", label: t("projects.tags.ai") },
    { key: "slack", label: t("projects.tags.slack") },
    { key: "sre", label: t("projects.tags.sre") },
    { key: "data", label: t("projects.tags.data") },
    { key: "web", label: t("projects.tags.web") },
  ];
  const [activeTag, setActiveTag] = useState<TagKey>("all");
  const getList = (key: string) => t(key, { returnObjects: true }) as string[];

  const filtered = useMemo(() => {
    if (activeTag === "all") {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-project-card]")
    );
    if (!cards.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filtered.length]);

  return (
    <section className={styles.projects}>
      <header className={styles.header}>
        <p className={styles.kicker}>{t("projects.kicker")}</p>
        <h1>{t("projects.heading")}</h1>
        <p className={styles.lede}>{t("projects.lede")}</p>
      </header>

      <div
        className={styles.filters}
        role="group"
        aria-label={t("projects.filterLabel")}
      >
        {tags.map((tag) => (
          <button
            key={tag.key}
            type="button"
            className={tag.key === activeTag ? styles.activeTag : styles.tag}
            onClick={() => setActiveTag(tag.key)}
            aria-pressed={tag.key === activeTag}
          >
            {tag.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => (
          <article
            key={project.key}
            className={styles.card}
            data-project-card
          >
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.category}>
                  {t(`projects.items.${project.key}.category`)}
                </p>
                <h2>{t(`projects.items.${project.key}.title`)}</h2>
              </div>
              <div className={styles.tagRow}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.chip}>
                    {t(`projects.tags.${tag}`)}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{t("projects.labels.role")}</h3>
              <p>{t(`projects.items.${project.key}.role`)}</p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {t("projects.labels.deliverable")}
              </h3>
              <ul className={styles.list}>
                {getList(
                  `projects.items.${project.key}.deliverables`
                ).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.sectionGrid}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  {t("projects.labels.timeline")}
                </h3>
                <ul className={styles.list}>
                  {getList(`projects.items.${project.key}.timeline`).map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  {t("projects.labels.learnings")}
                </h3>
                <ul className={styles.list}>
                  {getList(`projects.items.${project.key}.learnings`).map(
                    (item) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
