// Contact.jsx
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="p-10 flex flex-col items-center text-center"
      style={{ background: '#0a0a14' }}
    >
      <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
        Contact
      </h2>
      <p className="text-sm mb-8" style={{ color: '#94a3b8' }}>
        Got a project in mind? Send me a message.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full mx-auto">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg text-sm outline-none transition-all duration-300"
          placeholder="Name"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            color: '#cbd5e1',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#7c3aed'
            e.currentTarget.style.background = 'rgba(124,58,237,0.06)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
          }}
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg text-sm outline-none transition-all duration-300"
          placeholder="Email"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            color: '#cbd5e1',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#7c3aed'
            e.currentTarget.style.background = 'rgba(124,58,237,0.06)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
          }}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="p-3 rounded-lg text-sm outline-none transition-all duration-300 resize-none"
          placeholder="Message"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            color: '#cbd5e1',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#7c3aed'
            e.currentTarget.style.background = 'rgba(124,58,237,0.06)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.2)'
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
          }}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="p-3 rounded-lg text-sm font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            color: '#ffffff',
            boxShadow: '0 0 20px rgba(124,58,237,0.35)',
            opacity: status === 'sending' ? 0.6 : 1,
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          }}
          onMouseEnter={(e) => {
            if (status !== 'sending') e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.35)'
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="text-sm" style={{ color: '#4ade80' }}>
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm" style={{ color: '#f87171' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}