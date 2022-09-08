import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function Header() {
  const parentVariant = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariant = {
    initial: {
      y: 20,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5
      },
    },
  };

  return (
    <motion.header className={styles.header} variants={parentVariant} animate="animate" initial="initial">
      <div className={styles.tags}>
        <motion.span variants={childVariant}>Kaung Zin Hein</motion.span>
      </div>
      <div className={styles.tags}>
        <motion.span variants={childVariant}>Mandalay, Myanmar</motion.span>
      </div>
      <div className={styles.tags}>
        <motion.span variants={childVariant}>Frontend</motion.span>
      </div>
      <div className={styles.tags}>
        <motion.span variants={childVariant}>UI/UX</motion.span>
      </div>
    </motion.header>
  );
}
