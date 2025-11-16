export default function Testimonials() {
  const quotes = [
    {
      quote: 'Every photo feels like a memory we can step back into. Soft, honest, and so us.',
      name: 'Amelia & Jordan'
    },
    {
      quote: 'They captured the quiet in-between moments that meant the most. Absolutely magical.',
      name: 'Priya & Noah'
    },
    {
      quote: 'Professional, kind, and incredibly thoughtful. We cried seeing our gallery.',
      name: 'Lena & Marco'
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Love Notes</h2>
        <p className="mt-3 text-gray-700/90">Words from couples we were honored to celebrate with.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="bg-white/70 backdrop-blur border border-gray-200 rounded-2xl p-6 text-left shadow-sm">
              <p className="text-gray-800">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
