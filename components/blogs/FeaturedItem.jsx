import styles from './FeaturedItem.module.css';
import Link from 'next/link';

export default function FeaturedItem({ blog }) {
    const { title, image, timeToRead } = blog
    return <Link href={'/blog/'}>
        <a className={styles.featured}>
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.text}>
                <div className={styles.title}>{title}</div>
                <div className={styles.time}>{timeToRead}mins</div>
            </div>
        </a>
    </Link>
}