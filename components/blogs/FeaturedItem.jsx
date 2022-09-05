import styles from './FeaturedItem.module.css';
import Link from 'next/link';
import { urlFor } from '../../sanity';

export default function FeaturedItem({ blog }) {
    const { title, timeToRead, mainImage } = blog
    return <Link href={'/blog/'}>
        <a className={styles.featured}>
            <img className={styles.image} src={urlFor(mainImage)} alt={title} />
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.time}>{timeToRead}mins</div>
            </div>
        </a>
    </Link>
}