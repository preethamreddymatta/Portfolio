'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

const colorMap = {
  teal: { accent: '#2dd4bf', bg: 'rgba(45,212,191,0.06)', border: 'rgba(45,212,191,0.18)' },
  amber: { accent: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.18)' },
  violet: { accent: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.18)' },
}

function ExperienceItem({ exp, index }: { exp: typeof data.experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[exp.color]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: 40,
        paddingBottom: 48,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
      className="exp-item"
    >
      {/* Left — meta */}
      <div style={{ paddingTop: 4 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a', lineHeight: 1.6 }}>
          {exp.period}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a', marginTop: 4 }}>
          {exp.location}
        </div>
        <div style={{
          display: 'inline-block',
          marginTop: 8,
          padding: '2px 8px',
          borderRadius: 4,
          background: c.bg,
          border: `1px solid ${c.border}`,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: c.accent,
          letterSpacing: '0.08em',
        }}>
          {exp.type}
        </div>
      </div>

      {/* Right — content */}
      <div style={{
        position: 'relative',
        paddingLeft: 28,
        borderLeft: `1px solid ${c.border}`,
      }}>
        {/* Dot */}
        <div style={{
          position: 'absolute',
          left: -5,
          top: 8,
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: c.accent,
          boxShadow: `0 0 8px ${c.accent}`,
        }} />

        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: c.accent, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
          {exp.company}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 600,
          color: '#f5f5ff',
          marginBottom: 16,
          lineHeight: 1.3,
        }}>
          {exp.role}
        </h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: c.accent, flexShrink: 0, marginTop: 3, fontSize: '0.7rem' }}>▸</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#8888aa', lineHeight: 1.7 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  const headRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadVisible(true) },
      { threshold: 0.1 }
    )
    if (headRef.current) observer.observe(headRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: '120px 24px', position: 'relative', background: '#0c0c18' }}>
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
      <div className="blob-amber" style={{ width: 400, height: 400, bottom: 0, right: -100 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            marginBottom: 64,
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-label" style={{ marginBottom: 16 }}>Experience</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#f5f5ff',
          }}>
            Where I've shipped<br />
            <span className="gradient-amber">real impact.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: 780 }}>
          {data.experience.map((exp, i) => (
            <ExperienceItem key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .exp-item { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  )
}
