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
    [0, 0, -.8 * scroll]
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

  return (
    <section id="about" className={styles.about}>
      <div ref={title}>
        <motion.h2 style={width >= 1100 ? { x } : {}} className={styles.title}>
          About
        </motion.h2>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/images/person.jpg"
            alt="Kaung Zin Hein"
            width="500"
            height="900"
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>I'm Kaung Zin Hein</h3>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            maiores amet voluptates necessitatibus soluta accusantium!
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            maiores amet voluptates necessitatibus soluta accusantium!
          </p>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            maiores amet voluptates necessitatibus soluta accusantium!
          </p>

          <a
            className={styles.button}
            onMouseEnter={(e) => {
              onMouseEnter(e);
            }}
            onMouseLeave={() => {
              dispatch(animationActions.removeState());
              buttonRef.current?.classList.add(styles.out);
            }}
            href="/images/keyboard.png"
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
        </div>
      </div>
    </section>
  );
}
