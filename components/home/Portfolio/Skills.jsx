import styles from "./Skills.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const childVaraint = {
    initial: {
      opacity: 0,
      y: 10,
    },
  };

  const whileInView = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      once: true,
    },
  };

  return (
    <section id="languages" className={styles.skills}>
      <motion.div className={styles.langs} initial="initial">
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          HTML
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang + " " + styles.underline}
        >
          JAVASCRIPT
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          CSS
        </motion.span>

        <br className={styles.mobile} />

        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang + " " + styles.underline}
        >
          REACT
        </motion.span>
        <br className={styles.desktop} />
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          SCSS
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang + " " + styles.underline}
        >
          TYPESCRIPT
        </motion.span>

        <br className={styles.mobile} />

        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          NEXTJS
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang + " " + styles.underline}
        >
          PYTHON
        </motion.span>
        <br className={styles.desktop} />
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          DJANGO
        </motion.span>

        <br className={styles.mobile} />

        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          GIT
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          FIGMA
        </motion.span>
        <motion.span
          variants={childVaraint}
          whileInView={whileInView}
          viewport={{ once: true }}
          className={styles.lang}
        >
          PHOTOSHOP
        </motion.span>
      </motion.div>

      <div className={styles.banner}>
        <Image
          src="/images/keyboard.png"
          alt="keyboard background"
          width="1440"
          height="500"
          className={styles.image}
          loading="eager"
          priority={true}
        />
        <h2 className={styles.text}>Whatever technology needed</h2>
      </div>
    </section>
  );
}
