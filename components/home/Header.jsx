import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.tags}>Kaung Zin Hein</div>
      <div className={styles.tags}>Mandalay, Myanmar</div>
      <div className={styles.tags}>Frontend</div>
      <div className={styles.tags}>UI/UX</div>
    </header>
  );
}
