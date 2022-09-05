import styles from "./BlogItem.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";

export default function BlogItem({ blog }) {
  const { title, image, overview, slug, timeToRead } = blog;
  const dispatch = useDispatch();
  return (
    <Link href={"/blog"} alt={title}>
      <a
        onMouseEnter={() =>
          dispatch(animationActions.project(timeToRead + "mins"))
        }
        onMouseLeave={() => dispatch(animationActions.removeState())}
        className={styles.blog}
      >
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.overview}>{overview}</p>
        </div>
      </a>
    </Link>
  );
}
