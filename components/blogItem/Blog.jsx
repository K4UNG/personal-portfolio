import styles from "./Blog.module.css";
import BackButton from "../ui/BackButton";
import { urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import Comments from "./Comments";

export default function Blog({ blog }) {
  const { mainImage, title, body, publishedAt, comments, _id } = blog;
  const date = new Date(publishedAt);

  return (
    <div>
      <div className={styles.banner}>
        <BackButton />
        <img className={styles.image} src={urlFor(mainImage)} alt={title} />
        <div className={styles.date}>
          {date.toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{title}</h1>
        <article className={styles.content}>
          <PortableText
            value={body}
            components={{
              types: {
                image: ({ value }) => {
                  return <img src={urlFor(value)} alt={title} />;
                },
                callToAction: ({ value }) => (
                  <a href={value.url}>{value.text}</a>
                ),
              },
              marks: {
                link: ({ children, value }) => {
                  return (
                    <a href={value.href} target="_blank" rel="noreferrer">
                      {children}
                    </a>
                  );
                },
              },
            }}
          />
        </article>
      </div>

      <Comments comments={comments} id={_id} />
    </div>
  );
}
