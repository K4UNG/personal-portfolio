import styles from "./Comments.module.css";
import { useState, useRef } from "react";
import CommentList from "./CommentList";

export default function Comments({ comments, submitHandler }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const wrapper = useRef();

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>Comments</h2>
      <form className={styles.form} onSubmit={e => submitHandler(e, name, message)}>
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

      <CommentList
        comments={comments}
      />
    </div>
  );
}
