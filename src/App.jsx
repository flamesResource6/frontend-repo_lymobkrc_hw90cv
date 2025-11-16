import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Packages from './components/Packages'
import LeadCapture from './components/LeadCapture'

function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
        <p>© {new Date().getFullYear()} Luna & Lens — Wedding Photography</p>
        <div className="flex items-center gap-6">
          <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
          <a href="#packages" className="hover:text-gray-900">Packages</a>
          <a href="#inquire" className="hover:text-gray-900">Inquire</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50/40 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <Packages />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  )
}

export default App
