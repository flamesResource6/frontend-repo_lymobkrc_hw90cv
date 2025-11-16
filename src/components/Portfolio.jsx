export default function Portfolio() {
  const items = [
    { src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop', title: 'First Look' },
    { src: 'https://images.unsplash.com/photo-1517617823475-013756831d1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaXJzdCUyMExvb2t8ZW58MHwwfHx8MTc2MzMyODEzNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Ceremony' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop', title: 'Sunset Portraits' },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop', title: 'Details' },
    { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop', title: 'Reception' },
    { src: 'https://images.unsplash.com/photo-1517617823475-013756831d1f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaXJzdCUyMExvb2t8ZW58MHwwfHx8MTc2MzMyODEzNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Candid Moments' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-rose-50/50 to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Portfolio Highlights</h2>
          <p className="mt-3 text-gray-700/90">A glimpse into the quiet, heartfelt moments we love to capture.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <figure key={i} className="group overflow-hidden rounded-xl shadow-sm">
              <img src={item.src} alt={item.title} className="h-48 md:h-64 w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"/>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
