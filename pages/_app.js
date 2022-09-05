import "../styles/globals.css";
import Cursor from "../components/ui/Cursor";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const [isTouch, setIsTouch] = useState();

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {!isTouch && <Cursor />}
    </Provider>
  );
}

export default MyApp;
