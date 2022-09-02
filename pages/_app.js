import "../styles/globals.css";
import Cursor from "../components/ui/Cursor";
import { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  const [isTouch, setIsTouch] = useState();

  useEffect(() => {
    setIsTouch(isTouchDevice())
  }, [])

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {!isTouch && <Cursor />}
    </Provider>
  );
}

export default MyApp;
