import styles from "./BlogItem.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";
import { urlFor } from "../../sanity";

export default function BlogItem({ blog }) {
  const { title, mainImage, overview, slug, timeToRead } = blog;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <Link href={"/blog/"+slug.current} alt={title}>
        <a
          onMouseEnter={() =>
            dispatch(animationActions.project(timeToRead + "mins"))
          }
          onMouseLeave={() => dispatch(animationActions.removeState())}
          className={styles.blog}
        >
          <div className={styles.image}>
            <img src={urlFor(mainImage)} alt={title} />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.overview}>{overview}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
