import styles from "./Portfolio.module.css";
import Projects from "./Projects";
import Achievements from "./Achievements";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>Portfolio</h2>
      <Projects />
      <Achievements />
    </section>
  );
}
