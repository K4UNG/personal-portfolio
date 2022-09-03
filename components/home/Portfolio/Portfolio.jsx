import styles from "./Portfolio.module.css";
import Projects from "./Projects";
import Achievements from "./Achievements";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const { scrollY } = useScroll();
  const title = useRef();
  const [height, setHeight] = useState();
  const [scroll, setScroll] = useState();
  const [width, setWidth] = useState();

  scrollY.onChange(() => setScroll(scrollY.current));

  function resizeHandler() {
    setHeight(title.current.offsetTop);
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, []);

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
