import styles from "./Banner.module.css";
import Link from "next/link";
import ArrowRight from "../ui/ArrowRight";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";

export default function Banner() {
  // ==== HOVER ANIAMTION ==== 
  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();
  const spanOneRef = useRef();
  const spanTwoRef = useRef();
  const [buttonOne, setButtonOne] = useState(null);
  const [buttonTwo, setButtonTwo] = useState(null);
  const dispatch = useDispatch();

  function onMouseEnterOne(e) {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = buttonOneRef.current;
    setButtonOne({
      x: pageX - offsetLeft + "px",
      y: pageY - offsetTop + "px",
    });
    dispatch(animationActions.hideCursor());
  }

  function onMouseEnterTwo(e) {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = buttonTwoRef.current;
    setButtonTwo({
      x: pageX - offsetLeft + "px",
      y: pageY - offsetTop + "px",
    });
    dispatch(animationActions.hideCursor());
  }

  function onMouseLeaveOne() {
    spanOneRef.current?.classList.add(styles.out);
    dispatch(animationActions.removeState());
  }

  function onMouseLeaveTwo() {
    spanTwoRef.current?.classList.add(styles.out);
    dispatch(animationActions.removeState());
  }

  useEffect(() => {
    const elementOne = buttonOneRef.current;
    elementOne.addEventListener("mouseenter", onMouseEnterOne);
    elementOne.addEventListener("mouseleave", onMouseLeaveOne);

    const elementTwo = buttonTwoRef.current;
    elementTwo.addEventListener("mouseenter", onMouseEnterTwo);
    elementTwo.addEventListener("mouseleave", onMouseLeaveTwo);

    return () => {
      elementOne.removeEventListener("mouseenter", onMouseEnterOne);
      elementTwo.removeEventListener("mouseenter", onMouseEnterTwo);
      elementOne.removeEventListener("mouseleave", onMouseLeaveOne);
      elementTwo.removeEventListener("mouseleave", onMouseLeaveTwo);
    };
  });

  // ===== HOVER ANIMATION ========

  return (
    <section className={styles.banner}>
      <div className={styles.banner__top}>
        <h1 className={styles.title}>
          <div className={styles.title__first}>Exceptional</div>
          <div className={styles.title__second}>Web</div>
          <div className={styles.title__third}>Experiences</div>
        </h1>

        <div className={styles.blank}>
          <nav className={styles.list}>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={styles.work}>
            Available for work at{" "}
            <a href="mailto:kgzinhein.my@gmail.com" alt="mail link">
              kgzinhein.my@gmail.com
            </a>
            .
          </div>
        </div>
      </div>

      <div className={styles.banner__bottom}>
        <div className={styles.banner__text}>
          <div className={styles.text__container}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem impedit explicabo consequuntur deserunt incidunt
              doloribus debitis ipsum quos molestias odio?
            </p>
            <a
              className={styles.button}
              href="#portfolio"
              alt="portfolio section"
              ref={buttonOneRef}
            >
              Go to Projects <ArrowRight />
              {buttonOne && (
                <span
                  onTransitionEnd={() => setButtonOne(null)}
                  ref={spanOneRef}
                  style={{ transformOrigin: buttonOne.x + " " + buttonOne.y }}
                  className={styles.button__overlay}
                />
              )}
            </a>
          </div>
          <div className={styles.text__container}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem impedit explicabo consequuntur deserunt incidunt
              doloribus debitis ipsum quos molestias odio?
            </p>
            <Link href="/blog" alt="blog">
              <a className={styles.button} ref={buttonTwoRef}>
                Blog <ArrowRight />
                {buttonTwo && (
                  <span
                    onTransitionEnd={() => setButtonTwo(null)}
                    ref={spanTwoRef}
                    style={{ transformOrigin: buttonTwo.x + " " + buttonTwo.y }}
                    className={styles.button__overlay}
                  />
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
