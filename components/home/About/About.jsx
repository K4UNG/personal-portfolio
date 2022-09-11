import styles from "./About.module.css";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";
import { useState, useRef } from "react";
import ArrowDown from "../../ui/ArrowDown";
import Image from "next/image";
import useSlideIn from "../../../hooks/use-slideIn";
import { motion, useTransform, useScroll } from "framer-motion";

export default function About() {
  const dispatch = useDispatch();
  const [pos, setPos] = useState(null);
  const buttonRef = useRef();

  const title = useRef();
  const { height, scroll, width, top } = useSlideIn(title);
  const { scrollY } = useScroll();
  const x = useTransform(
    scrollY,
    [0, top - height, scroll],
    [0, 0, -0.8 * scroll]
  );

  function onMouseEnter(e) {
    dispatch(animationActions.hideCursor());
    const { pageX: x, pageY: y } = e;
    const { offsetLeft, offsetTop } = e.target;
    setPos({
      x: x - offsetLeft + "px",
      y: y - offsetTop + "px",
    });
  }

  const parentVariant = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariant = {
    initial: {
      opacity: 0,
    },
  };

  const whileInView = {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  };

  return (
    <section id="about" className={styles.about}>
      <div ref={title}>
        <motion.h2 style={width >= 1100 ? { x } : {}} className={styles.title}>
          About
        </motion.h2>
      </div>
      <div className={styles.container}>
        <div
          className={styles.image}
          onMouseEnter={() => dispatch(animationActions.message())}
          onMouseLeave={() => dispatch(animationActions.removeState())}
        >
          <Image
            src="/images/person.png"
            alt="Kaung Zin Hein"
            width="1400"
            height="1000"
          />
        </div>
        <motion.div
          variants={parentVariant}
          initial="initial"
          className={styles.content}
        >
          <motion.h3
            whileInView={whileInView}
            viewport={{ once: true }}
            variants={childVariant}
            className={styles.name}
          >
            I&apos;m Kaung Zin Hein
          </motion.h3>
          <motion.p
            whileInView={whileInView}
            viewport={{ once: true }}
            variants={childVariant}
            className={styles.text}
          >
            I&apos;m a self-taught junior{" "}
            <span className={styles.strong}>frontend</span> developer from{" "}
            <span className={styles.strong}>Myanmar</span>. I&apos;m currently
            expanding my knowledge into the world or backend and databases. I
            also have quite a lot of interest in{" "}
            <span className={styles.strong}>UI/UX</span> design.
          </motion.p>
          <motion.p
            whileInView={whileInView}
            viewport={{ once: true }}
            variants={childVariant}
            className={styles.text}
          >
            When I&apos;m not coding, you can probably find me playing{" "}
            <span className={styles.strong}>Rubik&apos;s cube</span>, listening
            to music or playing games. I love listening to{" "}
            <span className={styles.strong}>Soft pop, kpop</span> and piano. I
            also love watching Sci-fi, mystery movies.
          </motion.p>

          <a
            className={styles.button}
            onMouseEnter={(e) => {
              onMouseEnter(e);
            }}
            onMouseLeave={() => {
              dispatch(animationActions.removeState());
              buttonRef.current?.classList.add(styles.out);
            }}
            href="/resume.pdf"
            alt="cv downloader"
            download
          >
            Download CV <ArrowDown />
            {pos && (
              <span
                onTransitionEnd={() => setPos(null)}
                ref={buttonRef}
                style={{ transformOrigin: pos.x + " " + pos.y }}
                className={styles.button__overlay}
              />
            )}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
