import styles from "./Contact.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";
import Image from 'next/image';
import ArrowTopRight from '../../ui/ArrowTopRight';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  function focusHandler(e) {
    const el = e.target.previousElementSibling;
    el.classList.add(styles.focus);
  }

  function blurHandler(e) {
    if (e.target.value) return;
    const el = e.target.previousElementSibling;
    el.classList.remove(styles.focus);
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.image}>
        <Image src="/images/letter.jpg" className={styles.image} height='800' width='700' />
        <div className={styles.overlay} />
        <h2 className={styles.title}>Get in Touch <br/><ArrowTopRight /></h2>
      </div>
      <div className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onFocus={focusHandler}
              onBlur={blurHandler}
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onFocus={focusHandler}
              onBlur={blurHandler}
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              onFocus={focusHandler}
              onBlur={blurHandler}
              rows="5"
              id="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onMouseEnter={() => dispatch(animationActions.hideCursor())}
            onMouseLeave={() => dispatch(animationActions.removeState())}
            className={styles.button}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
