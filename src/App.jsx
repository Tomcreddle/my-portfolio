import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}