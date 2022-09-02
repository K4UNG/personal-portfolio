import styles from "./Cursor.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Cursor() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const state = useSelector(state => state.state)

  function onMouseMove(event) {
    const { pageX: x, pageY: y } = event;
    setX(x);
    setY(y);
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div>
        <div
          style={{ top: y + "px", left: x + "px" }}
          className={`${styles.cursor} ${state === 'hide' && styles.hidden}`}
        ></div>
    </div>
  );
}
