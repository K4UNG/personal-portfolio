import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <div className={styles.achievements}>
      <h3 className={styles.title}>Achievements</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          Has done over <span className={styles.strong}>30+</span> projects
          including challenges and real-world projects
        </p>
        <p className={styles.text}>
          <span className={styles.strong}>Volunteered</span> at Tee Htwin, a
          non-profit organization, as a{" "}
          <span className={styles.strong}>web developer</span>
        </p>
        <p className={styles.text}>
          Created a facebook page where I share{" "}
          <span className={styles.strong}>valuable</span> web-related knowledges
        </p>
      </div>
    </div>
  );
}
