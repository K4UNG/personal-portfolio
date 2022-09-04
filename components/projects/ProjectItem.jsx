import styles from "./ProjectItem.module.css";
import Image from "next/image";
import ArrowTopRight from "../ui/ArrowTopRight";
import BackButton from "../ui/BackButton";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.banner}>
        <Image
          src="/images/keyboard.png"
          alt="keyboard"
          width="1200"
          height="400"
        />
        <BackButton />
      </div>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.links}>
            <a
              className={styles.link}
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              See it live <ArrowTopRight />
            </a>
            <a
              className={styles.link}
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              Repo <ArrowTopRight />
            </a>
          </div>
          <h1 className={styles.title}>Khanner Blog</h1>

          <div className={styles.body}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              nesciunt vitae nostrum fugiat. Itaque iste libero officiis neque
              expedita fugit, necessitatibus aliquid quo quae recusandae?
            </p>

            <Image
              src="/images/keyboard.png"
              alt="keyboard"
              width="1200"
              height="400"
            />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              nesciunt vitae nostrum fugiat. Itaque iste libero officiis neque
              expedita fugit, necessitatibus aliquid quo quae recusandae?
            </p>

            <Image
              src="/images/keyboard.png"
              alt="keyboard"
              width="1200"
              height="400"
            />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              nesciunt vitae nostrum fugiat. Itaque iste libero officiis neque
              expedita fugit, necessitatibus aliquid quo quae recusandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
