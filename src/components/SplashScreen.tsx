import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

const COLS = 16;
const ROWS = 9;

const dots = Array.from({ length: COLS * ROWS }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const cx = (COLS - 1) / 2;
  const cy = (ROWS - 1) / 2;
  const dist = Math.sqrt((col - cx) ** 2 + (row - cy) ** 2);
  return { id: i, delay: `${(dist * 0.068).toFixed(2)}s` };
});

const SplashScreen = () => {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGone(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (gone) return null;

  return (
    <div className={styles.splash} aria-hidden="true">
      <div className={styles.dotGrid}>
        {dots.map((dot) => (
          <span
            key={dot.id}
            className={styles.dot}
            style={{ "--delay": dot.delay } as CSSProperties}
          />
        ))}
      </div>

      <div className={styles.vline} />
      <div className={styles.hline} />

      <div className={styles.center}>
        <div className={styles.scanLine} />
        <p className={styles.label}>Portfolio</p>
        <h1 className={styles.name}>Nicole Gutierrez</h1>
        <div className={styles.bar} />
      </div>
    </div>
  );
};

export default SplashScreen;
