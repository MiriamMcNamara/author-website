import { useState } from 'react'
import styles from './Contact.module.css'

// To enable this form:
// 1. Create a free account at https://formspree.io using mimiwritesbooks@icloud.com
// 2. Create a new form and copy the form ID (looks like "xabc1234")
// 3. Replace "YOUR_FORM_ID" below with your actual ID
const FORMSPREE_ID = 'xreddoav'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <p className="section-label">Say hello</p>
          <h2 className={styles.heading}>Get in touch</h2>
          <p className={styles.subtext}>
            Whether you're a reader, a fellow author, or you'd like to get in touch
            about something else — I'd love to hear from you.
          </p>

          {status === 'sent' ? (
            <div className={styles.successMessage}>
              <p>Thank you for your message — I'll be in touch soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="What's on your mind?"
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <p className={styles.errorMessage}>
                  Something went wrong. Please try again, or email me directly at{' '}
                  <a href="mailto:mimiwritesbooks@icloud.com">
                    mimiwritesbooks@icloud.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
