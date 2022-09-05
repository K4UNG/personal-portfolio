import styles from "./FeaturedBlogs.module.css";
import FeaturedItem from "./FeaturedItem";
import HomeButton from '../ui/HomeButton'

const blogs = [
  {
    title: "some title",
    image: "/images/keyboard.png",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
  },
  {
    title: "another title",
    image: "/images/person.jpg",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
  },
  {
    title: "another long title",
    image: "/images/keyboard.png",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
  },
  {
    title: "very very long one title",
    image: "/images/person.jpg",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
  },
];

export default function FeaturedBlogs() {
  return (
    <div className={styles.featured}>
      <div className={styles.head}>
        <HomeButton />
      </div>
      <h1 className={styles.title}>Featured Posts</h1>
      <div className={styles.wrapper}>
        {blogs
          .filter((b) => b.isFeatured)
          .map((blog) => (
            <FeaturedItem key={Math.random()} blog={blog} />
          ))}
      </div>
    </div>
  );
}
