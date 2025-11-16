import { useState } from 'react'

export default function LeadCapture() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const date = form.get('date')
    // Simulate submit
    setStatus('Thank you! We\'ll be in touch within 24 hours.')
    e.currentTarget.reset()
  }

  return (
    <section id="inquire" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">Let\'s Begin Your Story</h2>
            <p className="mt-2 text-gray-700">Share a few details and we\'ll send availability and next steps.</p>
          </div>
          <form onSubmit={submit} className="grid sm:grid-cols-3 gap-4">
            <input name="name" required placeholder="Your name" className="sm:col-span-1 w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200" />
            <input type="email" name="email" required placeholder="Email address" className="sm:col-span-1 w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200" />
            <input type="date" name="date" required className="sm:col-span-1 w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200" />
            <textarea name="message" rows="4" placeholder="Tell us about your day" className="sm:col-span-3 w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-200" />
            <div className="sm:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
              <button className="inline-flex items-center rounded-full bg-rose-400/90 hover:bg-rose-400 text-white px-6 py-3 transition-colors">Send Inquiry</button>
              <a href="#inquire" className="text-gray-600 hover:text-gray-800 underline decoration-rose-300/60 decoration-2 underline-offset-4">Prefer email? hello@lunaandlens.com</a>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-emerald-700">{status}</p>}
        </div>
      </div>
    </section>
  )
}
