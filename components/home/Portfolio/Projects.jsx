import styles from "./Projects.module.css";
import Project from "./Project";

const projects = [
  {
    number: "01",
    title: "Khanner Blog",
    lang: "Django",
    image: "/images/keyboard.png",
    slug: "khanner-blog",
  },
  {
    number: "02",
    title: "CookingBud",
    lang: "React",
    image: "/images/keyboard.png",
    slug: "cookingbud",
  },
  {
    number: "03",
    title: "Khanner Blog",
    lang: "Django",
    image: "/images/keyboard.png",
    slug: "khanner-blog",
  },
  {
    number: "04",
    title: "CookingBud",
    lang: "React",
    image: "/images/keyboard.png",
    slug: "cookingbud",
  },
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h3 className={styles.title}>Featured Projects</h3>
      <div className={styles.wrapper}>
        {projects.map((p) => (
          <Project project={p} key={p.number} />
        ))}
        <div className={styles.cover}>
          <div>
            <div className={styles.inner} />
          </div>
        </div>
        <div className={styles.cover}>
          <div>
            <div className={styles.inner} />
          </div>
        </div>
      </div>
    </div>
  );
}
