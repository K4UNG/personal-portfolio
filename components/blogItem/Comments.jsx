import styles from "./Comments.module.css";
import { useState, useRef } from "react";
import CommentList from "./CommentList";

export default function Comments({ comments, id }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const wrapper = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState();

  async function submitHandler(e) {
    e.preventDefault();
    setError(false);
    const res = await fetch("/api/post-comment", {
      method: "POST",
      body: JSON.stringify({
        name,
        message,
        _id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      setError(true);
      return
    }

    setSuccess(true);
  }

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>Comments</h2>
      {success ? (
        <div className={styles.success}>
          <h3>Submitted!</h3>
          <p>Your comment will appear once it's been approved.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={submitHandler}>
          {error && <div className={styles.error}>Something went wrong!</div>}
          <label htmlFor="name">Comment as</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Name"
          />
          <div
            style={{ height: name ? wrapper.current.clientHeight : 0 }}
            className={styles.message}
          >
            <div ref={wrapper} className={styles.wrapper}>
              <label htmlFor="comment">Message</label>
              <br />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Enter your message"
                tabIndex={name ? 0 : -1}
              ></textarea>
              <br />
              <button tabIndex={name ? 0 : -1} className={styles.button}>
                Post
              </button>
            </div>
          </div>
        </form>
      )}

      <CommentList comments={comments} />
    </div>
  );
}
