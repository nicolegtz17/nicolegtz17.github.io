import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";

type TagKey = "all" | "ai" | "slack" | "sre" | "data" | "web";

const PROJECTS = [
  {
    key: "signalSync",
    tags: ["ai", "data"] as TagKey[],
  },
  {
    key: "pulseRoom",
    tags: ["sre", "data"] as TagKey[],
  },
  {
    key: "slackStudio",
    tags: ["slack", "web"] as TagKey[],
  },
  {
    key: "violetLines",
    tags: ["web"] as TagKey[],
  },
  {
    key: "opsAtlas",
    tags: ["ai", "sre"] as TagKey[],
  },
  {
    key: "datasetOrchard",
    tags: ["data"] as TagKey[],
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

  const filtered = useMemo(() => {
    if (activeTag === "all") {
      return PROJECTS;
    }
    return PROJECTS.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

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
          <article key={project.key} className={styles.card}>
            <h2>{t(`projects.items.${project.key}.title`)}</h2>
            <p>{t(`projects.items.${project.key}.body`)}</p>
            <div className={styles.tagRow}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.chip}>
                  {t(`projects.tags.${tag}`)}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
