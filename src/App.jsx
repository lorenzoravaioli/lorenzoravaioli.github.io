import './index.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import ColorPalette from './components/ColorPalette.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="container">
      <Hero />
      <About />
      <ColorPalette />
      <Footer />
    </div>
  )
}

export default App