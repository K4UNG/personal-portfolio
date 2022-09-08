import styles from "./Cursor.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";
import { urlFor } from "../../sanity";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Cursor() {
  const [x, setX] = useState(-100);
  const [y, setY] = useState(-100);
  const state = useSelector((state) => state.state);
  const text = useSelector((state) => state.text);
  const index = useSelector((state) => state.index);
  const dispatch = useDispatch();
  const router = useRouter()

  const messages = [
    "Handsome? Me? Oh Thank you!",
    "Stop! You're making me blush",
    "Yeah Yeah, I get that a lot",
    "Why you keep hovering over me la?",
    "Again??",
    "I can do this all day 💪",
  ];

  function routeChangeHandler() {
    dispatch(animationActions.resetIndex())
  }

  function onMouseMove(event) {
    const { clientX: x, clientY: y } = event;
    setX(x);
    setY(y);
  }

  useEffect(() => {
    function onMouseEnter() {
      dispatch(animationActions.removeState());
    }

    function onMouseLeave() {
      dispatch(animationActions.hideCursor());
    }

    router.events.on('routeChangeStart', routeChangeHandler)

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);

      router.events.off('routeChangeStart', routeChangeHandler)
    };
  }, [dispatch]);

  return (
    <div>
      <div
        style={{ top: y + "px", left: x + "px" }}
        className={`${styles.cursor} ${state === "hide" && styles.hidden} ${
          state === "expand" && styles.expand
        } ${state === "image" && styles.image} ${
          state === "message" && styles.message
        }`}
      >
        {state === "image" && (
          <Image
            src={urlFor(text).url()}
            alt="cursor image"
            width="200"
            height="100"
            objectFit="cover"
            layout="responsive"
          />
        )}
        {state === "expand" && <span className={styles.text}>{text}</span>}
        {state === "message" && (
          <div className={styles.text}>{messages[index % messages.length]}</div>
        )}
      </div>
    </div>
  );
}
