import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="languages" className={styles.skills}>
      <div className={styles.langs}>
        <span className={styles.lang}>HTML</span>
        <span className={styles.lang + " " + styles.underline}>JAVASCRIPT</span>
        <span className={styles.lang}>CSS</span>

        <br className={styles.mobile} />

        <span className={styles.lang + " " + styles.underline}>REACT</span>
        <br className={styles.desktop} />
        <span className={styles.lang}>SCSS</span>
        <span className={styles.lang + " " + styles.underline}>TYPESCRIPT</span>

        <br className={styles.mobile} />

        <span className={styles.lang}>NEXTJS</span>
        <span className={styles.lang + " " + styles.underline}>PYTHON</span>
        <br className={styles.desktop}/>
        <span className={styles.lang}>DJANGO</span>

        <br className={styles.mobile} />

        <span className={styles.lang}>NODEJS</span>
        <span className={styles.lang}>GIT</span>
        <span className={styles.lang}>FIGMA</span>
      </div>

      <div className={styles.banner}>
        <Image
          src="/images/keyboard.png"
          alt="keyboard background"
          width="1440"
          height="500"
          className={styles.image}
        />
        <h2 className={styles.text}>Whatever technology needed</h2>
      </div>
    </section>
  );
}
