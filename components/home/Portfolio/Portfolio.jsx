import styles from "./Portfolio.module.css";
import Projects from "./Projects";
import Achievements from "./Achievements";
import { motion } from "framer-motion";
import useSlideIn from "../../../hooks/use-slideIn";
import { useRef } from "react";

export default function Portfolio() {
  const title = useRef();
  const { height, scroll, width } = useSlideIn(title)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div ref={title}>
        <motion.h2
          style={width >= '1100' ? { x: height - scroll } : {}}
          transition={{ type: "spring", stiffness: 1 }}
          className={styles.title}
        >
          Portfolio
        </motion.h2>
      </div>
      <Projects />
      <Achievements />
    </section>
  );
}
