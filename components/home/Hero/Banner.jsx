import styles from "./Banner.module.css";
import Link from "next/link";
import ArrowRight from "../../ui/ArrowRight";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";

export default function Banner() {
  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();
  const spanOneRef = useRef();
  const spanTwoRef = useRef();
  const [pos, setPos] = useState(null);
  const dispatch = useDispatch();

  function onMouseEnter(e, ref) {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = ref.current;
    setPos({
      x: pageX - offsetLeft + "px",
      y: pageY - offsetTop + "px",
      ref: ref,
    });
    dispatch(animationActions.hideCursor());
  }

  function onMouseLeave(ref) {
    ref.current?.classList.add(styles.out);
    dispatch(animationActions.removeState());
  }

  return (
    <section id="home" className={styles.banner}>
      <div className={styles.banner__top}>
        <h1 className={styles.title}>
          <div className={styles.title__first}>Exceptional</div>
          <div className={styles.title__second}>Web</div>
          <div className={styles.title__third}>Experiences</div>
        </h1>

        <div className={styles.blank}>
          <nav className={styles.list}>
            <ul>
              <li>
                <a href="#home" alt="scroll to home">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" alt="scroll to protfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" alt="scroll to about">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" alt="scroll to contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.work}>
        Available for work at{" "}
        <a href="mailto:kgzinhein.my@gmail.com" alt="mail link">
          kgzinhein.my@gmail.com
        </a>
        .
      </div>

      <div className={styles.banner__bottom}>
        <p className={styles.strong}>
          An individual with passion for creative development
        </p>
        <div className={styles.banner__text}>
          <div className={styles.text__container}>
            <p className={styles.text}>
              A passionate self-taght developer from a third-world country,
              looking for opportunities to deliver best possible services and
              values.
            </p>
            <a
              className={styles.button}
              href="#portfolio"
              alt="portfolio section"
              onMouseEnter={(e) => onMouseEnter(e, buttonOneRef)}
              onMouseLeave={() => onMouseLeave(spanOneRef)}
              ref={buttonOneRef}
            >
              Go to Projects <ArrowRight />
              {pos && pos.ref === buttonOneRef && (
                <span
                  onTransitionEnd={() => setPos(null)}
                  ref={spanOneRef}
                  style={{ transformOrigin: pos.x + " " + pos.y }}
                  className={styles.button__overlay}
                />
              )}
            </a>
          </div>
          <div className={styles.text__container}>
            <p className={styles.text}>
              Fancy some web-related knowledge? Or simply just interested in my
              personal life? Check out my blog where I post all kinds of things.
            </p>
            <Link href="/blog" alt="blog">
              <a
                className={styles.button}
                onMouseEnter={(e) => onMouseEnter(e, buttonTwoRef)}
                onMouseLeave={() => onMouseLeave(spanTwoRef)}
                ref={buttonTwoRef}
              >
                Blog <ArrowRight />
                {pos && pos.ref === buttonTwoRef && (
                  <span
                    onTransitionEnd={() => setPos(null)}
                    ref={spanTwoRef}
                    style={{ transformOrigin: pos.x + " " + pos.y }}
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
