import styles from "./Portfolio.module.css";
import Projects from "./Projects";
import Achievements from "./Achievements";
import { motion, useScroll, useTransform } from "framer-motion";
import useSlideIn from "../../../hooks/use-slideIn";
import { useRef } from "react";

export default function Portfolio() {
  const title = useRef();
  const { height, scroll, width, top } = useSlideIn(title)
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [0, top-height, scroll], [0, 0, -1*scroll])

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div ref={title}>
        <motion.h2
          style={width >= 1100 ? {x} : {}}
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
