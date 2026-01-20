import { useTranslation } from "react-i18next";
import styles from "./BlogLinks.module.css";

const BlogLinks = () => {
  const { t } = useTranslation();
  const workspaceUrl = `${import.meta.env.BASE_URL}about-workspace.svg`;
  const posts = [
    { key: "one" },
    { key: "two" },
    { key: "three" },
  ];
  const links = [
    {
      topicKey: "ai",
      items: ["one", "two", "three"],
    },
    {
      topicKey: "sre",
      items: ["one", "two", "three"],
    },
    {
      topicKey: "web",
      items: ["one", "two", "three"],
    },
  ];

  return (
    <section className={styles.blog}>
      <header className={styles.header}>
        <p className={styles.kicker}>{t("blog.kicker")}</p>
        <h1>{t("blog.heading")}</h1>
        <p className={styles.lede}>{t("blog.lede")}</p>
      </header>

      <div className={styles.columns}>
        <div>
          <h2>{t("blog.postsHeading")}</h2>
          <div className={styles.postGrid}>
            {posts.map((post) => (
              <article key={post.key} className={styles.postCard}>
                <p className={styles.postDate}>{t(`blog.posts.${post.key}.date`)}</p>
                <h3>{t(`blog.posts.${post.key}.title`)}</h3>
                <p>{t(`blog.posts.${post.key}.excerpt`)}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.workspaceCard}>
            <img src={workspaceUrl} alt="Workspace illustration in lavender tones" />
          </div>
          <h2>{t("blog.linksHeading")}</h2>
          <div className={styles.linkGroups}>
            {links.map((group) => (
              <section key={group.topicKey} className={styles.linkGroup}>
                <h3>{t(`blog.groups.${group.topicKey}`)}</h3>
                <ul>
                  {group.items.map((itemKey) => (
                    <li key={itemKey}>
                      <a href="#">
                        {t(`blog.groups.${group.topicKey}Links.${itemKey}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLinks;
