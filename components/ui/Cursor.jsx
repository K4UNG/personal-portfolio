import styles from "./Cursor.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { animationActions } from "../../store/animationSlice";
import { urlFor } from "../../sanity";

export default function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const state = useSelector((state) => state.state);
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

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

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dispatch]);

  return (
    <div>
      <div
        style={{ top: y + "px", left: x + "px" }}
        className={`${styles.cursor} ${state === "hide" && styles.hidden} ${
          state === "expand" && styles.expand
        } ${state === "image" && styles.image}`}
      >
        {state === "image" && <img src={urlFor(text)} alt='cursor image' />}
        {state === "expand" && <span className={styles.text}>{text}</span>}
      </div>
    </div>
  );
}
