import styles from "../styles/404.module.css";
import { useRouter } from "next/router";

export default function NotFoundPage() {
  const router = useRouter();
  function clickHandler() {
    router.back();
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1>404 | Page Not Found!</h1>
        <p>Whoa, whoa! You&apos;re on the wrong path. Turn around.</p>
        <button onClick={clickHandler} className={styles.home}>
          Go Back
        </button>
        <img src="/images/bonk.png" alt="404 error" />
      </div>
    </div>
  );
}
