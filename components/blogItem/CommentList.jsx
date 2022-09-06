import styles from "./CommentList.module.css";

export default function CommentList({ comments }) {
  return (
    <ul className={styles.list}>
      {comments.map((comment) => {
        const date = new Date(comment._updatedAt);
        return (
          <li className={styles.comment} key={Math.random()}>
            <p className={styles.message}>{comment.message}</p>
            <div className={styles.info}>
              <div className={styles.date}>
                {date.toLocaleString("en-GB", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                }).replace(new RegExp('/', 'g'), '-')}
              </div>
              <div className={styles.name}>-{comment.name}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
