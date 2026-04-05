import { useRef, useState } from 'react'
import { SOCIAL } from '../data'

// 👇 Points to your local Node.js server (or set VITE_API_URL in .env)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/send-email'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a0b0c8">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Contact() {
  const [status, setStatus] = useState('') // '' | 'sending' | 'success' | 'error'
  const formRef = useRef(null)

  const sendEmail = async e => {
    e.preventDefault()
    setStatus('sending')

    const fd = new FormData(formRef.current)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          message: fd.get('message'),
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section alt">
      <h2 className="sec-title">Get In <span>Touch</span></h2>
      <div className="contact-grid">

        {/* LEFT - contact info */}
        <div>
          <p className="contact-intro">
            I'm actively looking for opportunities in AI/ML Engineering, Full Stack Development,
            and Data Analytics. If you have a role, project, or just want to connect — reach out!
          </p>
          <div className="contact-items">
            <a href={`mailto:${SOCIAL.email}`} className="c-link">
              <div className="c-ico" style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)' }}>✉️</div>
              <div><div className="c-label">EMAIL</div><div className="c-val">{SOCIAL.email}</div></div>
            </a>
            <a href={`tel:${SOCIAL.phone}`} className="c-link">
              <div className="c-ico" style={{ background: 'rgba(0,224,150,0.08)', border: '1px solid rgba(0,224,150,0.15)' }}>📱</div>
              <div><div className="c-label">PHONE</div><div className="c-val">{SOCIAL.phone}</div></div>
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="c-link">
              <div className="c-ico" style={{ background: 'rgba(0,119,181,0.1)', border: '1px solid rgba(0,119,181,0.2)' }}>💼</div>
              <div><div className="c-label">LINKEDIN</div><div className="c-val">Mohamed Aqeeb</div></div>
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="c-link">
              <div className="c-ico" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <GithubIcon />
              </div>
              <div><div className="c-label">GITHUB</div><div className="c-val">github.com/aqeebb</div></div>
            </a>
          </div>
        </div>

        {/* RIGHT - contact form */}
        <form className="form" ref={formRef} onSubmit={sendEmail}>
          <div className="form-row">
            <label className="form-lbl">Your Name</label>
            <input className="form-inp" type="text" name="name" required />
          </div>
          <div className="form-row">
            <label className="form-lbl">Email Address</label>
            <input className="form-inp" type="email" name="email" required />
          </div>
          <div className="form-row">
            <label className="form-lbl">Message</label>
            <textarea className="form-ta" name="message" required />
          </div>

          <button
            className="form-btn"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>

          {status === 'success' && (
            <div className="form-success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-error">
              ❌ Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
