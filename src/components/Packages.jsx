export default function Packages() {
  const items = [
    { name: 'Essentials', price: '$1,800', desc: '4 hours coverage, 1 photographer, online gallery', tag: 'For intimate celebrations' },
    { name: 'Signature', price: '$3,200', desc: '8 hours coverage, 2 photographers, engagement session', tag: 'Most loved' },
    { name: 'Heirloom', price: '$4,800', desc: 'Full-day coverage, 2 photographers, album & prints', tag: 'Complete experience' },
  ]

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-amber-50/40 to-rose-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Services & Packages</h2>
          <p className="mt-3 text-gray-700/90">Simple, thoughtful options designed around your day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm">
              <div className="text-sm text-rose-500 font-medium">{p.tag}</div>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <div className="mt-6 text-3xl font-semibold text-gray-900">{p.price}</div>
              <a href="#inquire" className="mt-6 inline-flex items-center rounded-full bg-rose-400/90 hover:bg-rose-400 text-white px-5 py-2 transition-colors">Inquire</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
