import styles from "./Achievements.module.css";
import { motion } from "framer-motion";

export default function Achievements() {
  const parentVariant = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <div className={styles.achievements}>
      <h3 className={styles.title}>Achievements</h3>
      <motion.div
        variants={parentVariant}
        viewport={{ once: true }}
        whileInView="animate"
        initial="initial"
        className={styles.wrapper}
      >
        <motion.p variants={childVariant} className={styles.text}>
          Has done over <span className={styles.strong}>30+</span> projects
          including real-world projects and challenges
        </motion.p>
        <motion.p variants={childVariant} className={styles.text}>
          <span className={styles.strong}>Volunteered</span> at Tee Htwin, a
          non-profit organization, as a{" "}
          <span className={styles.strong}>web developer</span>
        </motion.p>
        <motion.p variants={childVariant} className={styles.text}>
          Has taught and helped a handful amount of people with their stuides in{" "}
          <span className={styles.strong}>coding</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
