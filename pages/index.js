import Header from "../components/home/Hero/Header";
import Banner from "../components/home/Hero/Banner";
import Skills from "../components/home/Portfolio/Skills";
import Portfolio from "../components/home/Portfolio/Portfolio";
import About from "../components/home/About/About";
import Contact from "../components/home/Contact/Contact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { animationActions } from "../store/animationSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(animationActions.removeState());
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}
