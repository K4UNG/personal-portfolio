import styles from "./Banner.module.css";
import Link from "next/link";
import ArrowRight from "../ui/ArrowRight";

export default function Banner() {
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
            >
              Go to Projects <ArrowRight />
              {false && <span className={styles.button__overlay}/>}
            </a>
          </div>
          <div className={styles.text__container}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem impedit explicabo consequuntur deserunt incidunt
              doloribus debitis ipsum quos molestias odio?
            </p>
            <Link href="/blog" alt="blog">
              <a className={styles.button}>
                Blog <ArrowRight />
                {false && <span className={styles.button__overlay}/>}
            </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
