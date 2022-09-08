import styles from "./BlogItem.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";
import { urlFor } from "../../sanity";
import Image from "next/image";

export default function BlogItem({ blog }) {
  const { title, mainImage, overview, slug, timeToRead } = blog;
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <Link href={"/blog/" + slug.current} alt={title}>
        <a
          onMouseEnter={() =>
            dispatch(animationActions.project(timeToRead + "mins"))
          }
          onMouseLeave={() => dispatch(animationActions.removeState())}
          className={styles.blog}
        >
          <div className={styles.image}>
            <Image
              src={urlFor(mainImage).url()}
              alt={title}
              width="200"
              height="150"
              layout="responsive"
              priority={true}
              objectFit='cover'
            />
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
