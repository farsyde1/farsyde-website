import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Competencies from './components/Competencies'
import Expertise from './components/Expertise'
import Differentiators from './components/Differentiators'
import CorporateData from './components/CorporateData'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Competencies />
        <Expertise />
        <Differentiators />
        <CorporateData />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App