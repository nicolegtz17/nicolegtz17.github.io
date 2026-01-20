import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist yet.</p>
      <Link to="/" className={styles.homeLink}>
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
