import LayoutPortfolio from "./layout/view/LayoutPortfolio"
import About from "./pages/About/view/Hero"
import Achievements from "./pages/Achievements/view/Achievements"
import Contact from "./pages/Contact/view/Contact"
import AboutMe from "./pages/AboutMe/view/AboutMe"
import Technologies from "./pages/Technologies/view/Technologies"
import Projects from "./pages/Projects/view/Projects"

function App() {

  return (
    <LayoutPortfolio>
      <About />
      <Technologies />
      <Projects />
      <AboutMe />
      <Achievements />
      <Contact />
    </LayoutPortfolio>
  )
}

export default App
