import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0"><Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-gray-600/80 text-xs mb-3">Wedding Photography</p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-tight">Timeless stories, softly told</h1>
          <p className="mt-4 text-lg text-gray-700/90">Gentle, luminous imagery that feels like your day—honest, romantic, and effortlessly elegant.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#inquire" className="inline-flex items-center rounded-full bg-rose-400/90 hover:bg-rose-400 text-white px-6 py-3 transition-colors shadow-sm">Inquire Now</a>
            <a href="#portfolio" className="inline-flex items-center rounded-full bg-white/70 hover:bg-white text-gray-700 px-6 py-3 transition-colors shadow-sm">View Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
