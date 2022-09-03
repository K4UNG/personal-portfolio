import styles from "./Project.module.css";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";

export default function Project({ project }) {
  const { slug, number, image, title, lang } = project;
  const dispatch = useDispatch();

  return (
    <Link href={"/projects/" + slug}>
      <a
        className={styles.project}
        onMouseEnter={() => dispatch(animationActions.project(number))}
        onMouseLeave={() => dispatch(animationActions.removeState())}
      >
        <div className={styles.number}>{number}</div>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          width="300"
          height="200"
        />
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.lang}>{lang}</div>
          <div className={styles.desktop}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.number}>{number}</div>
            <div className={styles.lang}>{lang}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
