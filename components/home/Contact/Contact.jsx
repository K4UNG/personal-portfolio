import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { animationActions } from "../../../store/animationSlice";
import Image from "next/image";
import ArrowTopRight from "../../ui/ArrowTopRight";
import emailjs from "@emailjs/browser";
import Social from "./Social";

export default function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

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

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const {
      name: { value: name },
      email: { value: email },
      message: { value: message },
    } = formRef.current;

    if (name.trim().length === 0) {
      setError("Name can't be empty.");
      setLoading(false);
      return;
    } else if (email.trim().length === 0) {
      setError("Email can't be empty.");
      setLoading(false);
      return;
    } else if (!validateEmail(email)) {
      setError("Invalid email!");
      setLoading(false);
      return;
    } else if (message.trim().length === 0) {
      setError("Message can't be empty.");
      setLoading(false);
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        "template_4ma2kkr",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("Successfully sent!");
        setLoading(false);
        formRef.current.reset()
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.image}>
        <Image
          src="/images/letter.jpg"
          alt="letter box"
          className={styles.image}
          height="800"
          width="700"
        />
        <div className={styles.overlay} />
        <h2 className={styles.title}>
          Get in Touch <br />
          <ArrowTopRight />
          <Social />
        </h2>
      </div>
      <div className={styles.form}>
        <form noValidate ref={formRef} onSubmit={submitHandler}>
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input
              onFocus={focusHandler}
              onBlur={blurHandler}
              id="name"
              type="text"
              name="name"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              onFocus={focusHandler}
              onBlur={blurHandler}
              id="email"
              type="email"
              name="email"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="message">Message</label>
            <textarea
              onFocus={focusHandler}
              onBlur={blurHandler}
              rows="5"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button
            onMouseEnter={() => dispatch(animationActions.hideCursor())}
            onMouseLeave={() => dispatch(animationActions.removeState())}
            className={`${styles.button} ${loading && styles.loading}`}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
