import styles from "./ProjectItem.module.css";
import Image from "next/image";
import ArrowTopRight from "../ui/ArrowTopRight";
import BackButton from "../ui/BackButton";

export default function Project({ project }) {
  const { title, slug, text1, text2, text3, text4, live, repo } = project;
  return (
    <div className={styles.project}>
      <div className={styles.banner}>
        <Image
          src={`/images/${slug}/banner.png`}
          alt="keyboard"
          width="1200"
          height="600"
        />
        <BackButton />
      </div>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.links}>
            <a
              className={styles.link}
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              See it live <ArrowTopRight />
            </a>
            {repo && <a
              className={styles.link}
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo <ArrowTopRight />
            </a>}
          </div>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.body}>
            <p>
              {text1}
            </p>

            <Image
              src={`/images/${slug}/preview.png`}
              alt="keyboard"
              width="700"
              height="400"
            />

            <p>
              {text2}
            </p>
            <p>
              {text3}
            </p>

            <Image
              src={`/images/${slug}/design.png`}
              alt="keyboard"
              width="700"
              height="400"
            />

            <p>
              {text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
