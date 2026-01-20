import { useTranslation } from "react-i18next";
import styles from "./BlogLinks.module.css";

const BlogLinks = () => {
  const { t } = useTranslation();
  const workspaceUrl = `${import.meta.env.BASE_URL}about-workspace.svg`;
  const posts = [
    {
      id: "adaptive-reasoning",
      title: "Teaching Models When to Think: Adaptive Reasoning with Q-Learning",
      date: "Jun 2025",
      readTime: "8 min read",
      tag: "Research note",
      url: "https://arxiv.org/pdf/2506.21734",
      excerpt:
        "What if a model could decide when it's done thinking - just like we do? ACT meets Q-learning to make reasoning steps dynamic, efficient, and inspectable.",
      cta: "Scroll into the post",
    },
    {
      id: "sas-mas",
      title: "Why not both? Single-Agent + Multi-Agent Systems",
      date: "May 2025",
      readTime: "7 min read",
      tag: "Research note",
      url: "https://arxiv.org/pdf/2505.18286",
      excerpt:
        "A modern empirical take on when solo agents win, when teams help, and how hybrid routing gives the best of both worlds.",
      cta: "Jump to the agent showdown",
    },
  ];

  return (
    <section className={styles.blog}>
      <header className={styles.header}>
        <p className={styles.kicker}>{t("blog.kicker")}</p>
        <h1>{t("blog.heading")}</h1>
        <p className={styles.lede}>{t("blog.lede")}</p>
      </header>

      <div className={styles.featured}>
        <div>
          <h2>{t("blog.postsHeading")}</h2>
          <div className={styles.cardStack}>
            {posts.map((post) => (
              <a key={post.id} href={`#${post.id}`} className={styles.postCardLink}>
                <article className={styles.postCard}>
                  <p className={styles.postDate}>
                    {post.date} - {post.readTime} - {post.tag}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className={styles.postCta}>{post.cta}</span>
                </article>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.workspaceCard}>
          <img src={workspaceUrl} alt="Workspace illustration in lavender tones" />
        </div>
      </div>

      <article className={styles.postBody} id={posts[0].id}>
        <div className={styles.postHero}>
          <div>
            <p className={styles.postMeta}>
              {posts[0].date} - {posts[0].readTime} - {posts[0].tag}
            </p>
            <h2>{posts[0].title}</h2>
            <p className={styles.postIntro}>
              Most neural networks don't think - they execute a fixed number of
              steps and stop, whether the problem is trivial or painfully complex.
              This paper flips that idea on its head. Instead of asking "How many
              layers should we use?" it asks "How much thinking does this
              problem actually need?" And then it lets the model decide.
            </p>
            <div className={styles.postActions}>
              <a
                href={posts[0].url}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryLink}
              >
                Read the paper
              </a>
              <a href="#key-takeaways" className={styles.secondaryLink}>
                Jump to takeaways
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={workspaceUrl} alt="Abstract workspace illustration" />
          </div>
        </div>

        <div className={styles.storyFlow}>
          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>01</div>
            <div>
              <h3>🚦 A model that knows when to stop</h3>
              <p>
                At the heart of this system is Adaptive Computation Time (ACT)
                powered by Q-learning. Each reasoning step is a hop where the model
                asks itself:
              </p>
              <div className={styles.callout}>
                <p>Should I stop and answer now - or think one step deeper?</p>
              </div>
              <p>
                A small Q-head predicts the value of halting vs continuing based on
                the current hidden state. To avoid early laziness, the model uses
                stochastic exploration by occasionally forcing extra hops.
              </p>
              <ul className={styles.resultList}>
                <li>Simple inputs &gt; fewer steps</li>
                <li>Hard inputs &gt; deeper reasoning</li>
                <li>Compute savings with minimal accuracy loss</li>
              </ul>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>02</div>
            <div>
              <h3>🧩 One brain, many thoughts (HRM-style)</h3>
              <p>
                Instead of stacking deeper and deeper layers, one shared reasoning
                block is reused at every step. The Q-learning controller decides
                whether to keep looping or exit.
              </p>
              <ul className={styles.bulletList}>
                <li>The same circuitry gets reused over time.</li>
                <li>Each hop adapts slightly.</li>
                <li>Reasoning emerges from iteration, not depth.</li>
              </ul>
              <p>
                It&apos;s efficient, modular, and surprisingly biological.
              </p>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>03</div>
            <div>
              <h3>🛠️ Training without the usual RL headaches</h3>
              <p>
                Classic deep Q-learning is unstable - replay buffers, target
                networks, constant tuning. This model avoids all that but stays
                stable by design.
              </p>
              <ul className={styles.bulletList}>
                <li>AdamW keeps parameters bounded.</li>
                <li>RMSNorm stabilizes activations post-update.</li>
                <li>Deep supervision gives each hop its own loss signal.</li>
                <li>Hidden states are detached between hops.</li>
              </ul>
              <p>
                The loss balances two goals: produce the correct output and learn
                when to stop reasoning.
              </p>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>04</div>
            <div>
              <h3>♾️ Why this is a big deal: Turing-completeness</h3>
              <p>
                Most transformers have fixed depth, can't do unbounded reasoning,
                and aren't Turing-complete. This model is - because it can loop
                indefinitely (within memory limits), adaptively choose how many
                steps to take, and reuse computation recursively.
              </p>
              <p>
                That&apos;s a huge shift: from predicting tokens to running algorithms.
              </p>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>05</div>
            <div>
              <h3>🌱 So... is this the future of reasoning models?</h3>
              <p>
                As models scale, brute-forcing depth becomes too expensive, too
                inefficient, and too brittle. Adaptive reasoning gives us compute
                efficiency, interpretability, better scaling at inference time,
                and a path toward truly algorithmic models.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.takeaways} id="key-takeaways">
          <h3>🧠 Final thought</h3>
          <p>
            This isn't just an optimization trick. It's a philosophical shift:
            models that decide how much effort to spend, systems that reuse
            cognition instead of bloating it, and reasoning that scales with
            problem complexity, not architecture size. If today's models are
            calculators, this feels like the first step toward deliberate
            thinkers. And yeah - that's very exciting. ✨
          </p>
          <a
            href={posts[0].url}
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryLink}
          >
            Full paper on arXiv
          </a>
        </div>
      </article>

      <article className={`${styles.postBody} ${styles.postBodyAlt}`} id={posts[1].id}>
        <div className={styles.postHero}>
          <div>
            <p className={styles.postMeta}>
              {posts[1].date} - {posts[1].readTime} - {posts[1].tag}
            </p>
            <h2>Why not both? Single-Agent + Multi-Agent Systems</h2>
            <p className={styles.postIntro}>
              Should we use one capable agent or a team of specialists? This paper
              puts both through a real, empirical stress test across 15 task types
              and 9 frameworks - and comes away with a very practical answer:
              choose both, but route intelligently.
            </p>
            <div className={styles.postActions}>
              <a
                href={posts[1].url}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryLink}
              >
                Read the paper
              </a>
              <a href="#agent-takeaways" className={styles.secondaryLink}>
                Jump to takeaways
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src={workspaceUrl} alt="Abstract workspace illustration" />
          </div>
        </div>

        <div className={styles.storyFlow}>
          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>01</div>
            <div>
              <h3>🎯 The core premise</h3>
              <p>
                There are two paradigms for agentic systems: Single-Agent Systems
                (one LLM with tools + memory) and Multi-Agent Systems (role-based
                collaborators like planner, developer, reviewer). MAS promises
                better coordination, but also adds complexity and cost.
              </p>
              <div className={styles.callout}>
                <p>More agents can mean more chatter, more latency, more spend.</p>
              </div>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>02</div>
            <div>
              <h3>🧠 What they did</h3>
              <p>
                The authors ran a large study: 15 popular task types across coding,
                math reasoning, planning, finance, and more. They tested 9
                frameworks with both proprietary and open-source models, comparing
                SAS vs MAS head-to-head.
              </p>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>03</div>
            <div>
              <h3>📊 Key findings</h3>
              <ul className={styles.resultList}>
                <li>MAS isn't always better on simpler tasks.</li>
                <li>Stronger LLMs reduce MAS's advantage.</li>
                <li>MAS costs more in tokens, latency, and coordination.</li>
              </ul>
              <p>
                In short: the best single agents are closing the gap fast, and the
                overhead of teamwork can erase the gains.
              </p>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>04</div>
            <div>
              <h3>🕵️‍♂️ Why MAS sometimes fails</h3>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Node-level defect:</strong> one hard subtask bottlenecks the team.
                </li>
                <li>
                  <strong>Edge-level defect:</strong> too much peer input overwhelms reasoning.
                </li>
                <li>
                  <strong>Path-level defect:</strong> errors propagate through chains.
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.storyStep}>
            <div className={styles.stepBadge}>05</div>
            <div>
              <h3>🧩 A better middle ground</h3>
              <p>
                The authors propose a hybrid routing approach: start with SAS, then
                cascade into MAS only when needed. It boosts accuracy by +1.1% to
                +12% while cutting costs by 20-80% depending on configuration.
              </p>
              <ul className={styles.bulletList}>
                <li>Route tasks to SAS by default.</li>
                <li>Spin up MAS only for tough cases.</li>
                <li>Diagnose failures causally to improve handoffs.</li>
              </ul>
            </div>
          </section>
        </div>

        <div className={styles.takeaways} id="agent-takeaways">
          <h3>✨ Final take</h3>
          <p>
            Teamwork isn't always better - but intelligent collaboration is. If
            you're building agentic systems, default to a strong solo agent, then
            invite specialists only when the task demands it. The data says you'll
            ship faster and spend less.
          </p>
          <a
            href={posts[1].url}
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryLink}
          >
            Full paper on arXiv
          </a>
        </div>
      </article>
    </section>
  );
};

export default BlogLinks;
