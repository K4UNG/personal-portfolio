import Header from "../components/home/Header"
import Banner from "../components/home/Banner"
import Skills from "../components/home/Skills"
import Portfolio from "../components/home/Portfolio"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Portfolio />
      </main>
    </div>
  )
}
