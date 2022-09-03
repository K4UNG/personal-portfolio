import styles from "./About.module.css";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";
import { useState, useRef } from "react";
import ArrowDown from "../../ui/ArrowDown";
import Image from 'next/image';

export default function About() {
  const dispatch = useDispatch();
  const [pos, setPos] = useState(null);
  const buttonRef = useRef();

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
    <div className={styles.about}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src='/images/person.jpg' alt='Kaung Zin Hein' width='500' height='900' />
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
            alt='cv downloader'
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
    </div>
  );
}
