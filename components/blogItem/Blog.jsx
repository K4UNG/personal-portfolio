import styles from "./Blog.module.css";
import BackButton from "../ui/BackButton";
import { urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";
import Comments from "./Comments";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import py from "react-syntax-highlighter/dist/cjs/languages/prism/python";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("python", py);
SyntaxHighlighter.registerLanguage("css", css);

export default function Blog({ blog }) {
  const { mainImage, title, body, publishedAt, comments, _id } = blog;
  const date = new Date(publishedAt);
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.progress}
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <div className={styles.banner}>
        <Image
          className={styles.image}
          src={urlFor(mainImage).url()}
          alt={title}
          priority={true}
          layout="fill"
          objectFit="cover"
        />
        <BackButton page="/blog" />
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
                  // return <img src={urlFor(value)} alt={title} />;
                  const url = urlFor(value).url();
                  return (
                    <Image
                      src={url}
                      alt={title}
                      width="1200"
                      height="600"
                      objectFit="cover"
                    />
                  );
                },
                callToAction: ({ value }) => (
                  <a href={value.url}>{value.text}</a>
                ),
                code({ value }) {
                  return (
                    <SyntaxHighlighter
                      style={atomDark}
                      language={value.language}
                    >
                      {value.code}
                    </SyntaxHighlighter>
                  );
                },
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
