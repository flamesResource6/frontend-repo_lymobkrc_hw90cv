import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-gray-700/80 hover:text-gray-900 transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-wide text-gray-800 text-lg">Luna & Lens</a>
        <nav className="hidden md:flex items-center gap-8">
          {navItem('#portfolio', 'Portfolio')}
          {navItem('#testimonials', 'Love Notes')}
          {navItem('#packages', 'Packages')}
          <a href="#inquire" className="inline-flex items-center rounded-full bg-rose-400/90 hover:bg-rose-400 text-white px-4 py-2 transition-colors">Inquire</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white/90 backdrop-blur">
          <div className="flex flex-col gap-3">
            {navItem('#portfolio', 'Portfolio')}
            {navItem('#testimonials', 'Love Notes')}
            {navItem('#packages', 'Packages')}
          </div>
          <a href="#inquire" onClick={() => setOpen(false)} className="block text-center rounded-full bg-rose-400/90 hover:bg-rose-400 text-white px-4 py-2 transition-colors">Inquire</a>
        </div>
      )}
    </header>
  )
}
