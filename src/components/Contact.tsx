'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: '120px 24px 80px', position: 'relative', overflow: 'hidden', background: '#0c0c18' }}
    >
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div className="blob-teal" style={{ width: 500, height: 500, top: -100, left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>
            Contact
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#f5f5ff',
            marginBottom: 20,
          }}>
            Let's build something<br />
            <span className="gradient-teal text-glow">worth measuring.</span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#8888aa',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 44px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}>
            Open to full-time Data Scientist roles. If you're building something that needs rigorous ML, sharp statistical thinking, and a bias toward impact — let's talk.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}>
            <a href={`mailto:${data.email}`} className="btn-primary" style={{ fontSize: '0.85rem', padding: '14px 32px' }}>
              Send Me an Email
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '13px 30px' }}>
              View LinkedIn
            </a>
          </div>

          {/* Contact info row */}
          <div style={{
            display: 'flex',
            gap: 32,
            justifyContent: 'center',
            flexWrap: 'wrap',
            paddingTop: 32,
            borderTop: '1px solid #22223a',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.4s',
          }}>
            <a href={`mailto:${data.email}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#2dd4bf', fontSize: '0.85rem' }}>✉</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#a8a8c8' }}>{data.email}</span>
            </a>
            <a href={`tel:${data.phone}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#2dd4bf', fontSize: '0.85rem' }}>☎</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#a8a8c8' }}>{data.phone}</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#2dd4bf', fontSize: '0.85rem' }}>◎</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#a8a8c8' }}>{data.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ maxWidth: 1200, margin: '64px auto 0', padding: '24px 0 0', borderTop: '1px solid #22223a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>
          © {new Date().getFullYear()} {data.name}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>
          Data Scientist · Cleveland, OH
        </div>
      </div>
    </section>
  )
}
