import BlogItem from "./BlogItem";
import styles from "./BlogList.module.css";

const blogs = [
  {
    title: "some title",
    image: "/images/keyboard.png",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
    overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, corrupti."
  },
  {
    title: "another title",
    image: "/images/person.jpg",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
    overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, corrupti."
  },
  {
    title: "another long title",
    image: "/images/keyboard.png",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
    overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, corrupti."
  },
  {
    title: "very very long one title",
    image: "/images/person.jpg",
    alug: "some-title",
    timeToRead: 13,
    isFeatured: true,
    overview: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, corrupti."
  },
];

export default function BlogList({ blogs }) {
  return (
    <div className={styles.list}>
      <h2 className={styles.title}>All posts</h2>
      <div className={styles.wrapper}>
        {blogs.map((b) => (
          <BlogItem key={b._id} blog={b} />
        ))}
      </div>
    </div>
  );
}
