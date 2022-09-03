import Header from "../components/home/Hero/Header"
import Banner from "../components/home/Hero/Banner"
import Skills from "../components/home/Portfolio/Skills"
import Portfolio from "../components/home/Portfolio/Portfolio"
import About from "../components/home/About/About"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Portfolio />
        <About />
      </main>
    </div>
  )
}
