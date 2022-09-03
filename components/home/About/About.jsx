import styles from "./About.module.css";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";
import { useState, useRef } from "react";

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
        <div className={styles.image}></div>
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

          <button
            className={styles.button}
            onMouseEnter={(e) => {
              onMouseEnter(e);
            }}
            onMouseLeave={() => {
              dispatch(animationActions.removeState());
              buttonRef?.current.classList.add(styles.out);
            }}
          >
            Download CV
            {pos && (
              <span
                onTransitionEnd={() => setPos(null)}
                ref={buttonRef}
                style={{ transformOrigin: pos.x + " " + pos.y }}
                className={styles.button__overlay}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
