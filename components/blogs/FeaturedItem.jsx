import styles from "./FeaturedItem.module.css";
import Link from "next/link";
import { urlFor } from "../../sanity";
import { animationActions } from "../../store/animationSlice";
import { useDispatch } from "react-redux";

export default function FeaturedItem({ blog }) {
  const { title, timeToRead, mainImage, slug } = blog;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <Link href={"/blog/"+slug.current}>
        <a
          onMouseEnter={() => dispatch(animationActions.image(mainImage))}
          onMouseLeave={() => dispatch(animationActions.removeState())}
          className={styles.featured}
        >
          <img className={styles.image} src={urlFor(mainImage)} alt={title} />
          <div className={styles.text}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.time}>{timeToRead}mins</div>
          </div>
        </a>
      </Link>
    </div>
  );
}
