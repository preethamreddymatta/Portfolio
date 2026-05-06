'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

// Simulated mini bar chart data for the hero visual
const chartData = [
  { label: 'Jan', val: 42 }, { label: 'Feb', val: 58 }, { label: 'Mar', val: 51 },
  { label: 'Apr', val: 72 }, { label: 'May', val: 65 }, { label: 'Jun', val: 80 },
  { label: 'Jul', val: 74 }, { label: 'Aug', val: 88 }, { label: 'Sep', val: 83 },
  { label: 'Oct', val: 95 }, { label: 'Nov', val: 89 }, { label: 'Dec', val: 97 },
]

function AnimatedChart() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [])
  return (
    <div style={{
      background: '#13131f',
      border: '1px solid #22223a',
      borderRadius: 12,
      padding: '20px',
      width: '100%',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>
          RETENTION_MODEL // LIVE
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2dd4bf', display: 'inline-block', boxShadow: '0 0 6px #2dd4bf' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#2dd4bf' }}>active</span>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 80 }}>
        {chartData.map((d, i) => (
          <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
            <div style={{
              width: '100%',
              height: visible ? `${d.val}%` : '0%',
              background: i >= 9
                ? 'linear-gradient(180deg, #2dd4bf, #14b8a6)'
                : 'rgba(45,212,191,0.18)',
              borderRadius: '3px 3px 0 0',
              transition: `height 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 60}ms`,
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        {chartData.filter((_, i) => i % 3 === 0).map(d => (
          <span key={d.label} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#6b6b8a' }}>{d.label}</span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, padding: '10px 0 0', borderTop: '1px solid #22223a' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>ACCURACY</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#2dd4bf', fontWeight: 600 }}>97.3%</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>CHURN ↓</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#f59e0b', fontWeight: 600 }}>−5%</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>RETENTION ↑</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#2dd4bf', fontWeight: 600 }}>+10%</div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ value, label, sub, delay }: { value: string; label: string; sub: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700 }} className="gradient-teal">
        {value}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#2dd4bf', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: '#6b6b8a', marginTop: 3, lineHeight: 1.4 }}>
        {sub}
      </div>
    </div>
  )
}

export default function Hero() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 200)
    setTimeout(() => setSubtitleVisible(true), 600)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Ambient blobs */}
      <div className="blob-teal" style={{ width: 500, height: 500, top: -100, right: -100 }} />
      <div className="blob-amber" style={{ width: 400, height: 400, bottom: 0, left: -150 }} />

      {/* Grid bg */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
          gap: 64,
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left column */}
          <div>
            {/* Role badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              borderRadius: 99,
              border: '1px solid rgba(45,212,191,0.25)',
              background: 'rgba(45,212,191,0.06)',
              marginBottom: 28,
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2dd4bf', boxShadow: '0 0 8px #2dd4bf' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#2dd4bf', letterSpacing: '0.1em' }}>
                DATA SCIENTIST · BOLT
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#f5f5ff',
              marginBottom: 24,
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}>
              I make data<br />
              <span className="gradient-teal text-glow">do something.</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#8888aa',
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 36,
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
              ML engineer at Bolt. Statistical thinker. Building models that reduce churn, predict demand, and translate signal into competitive edge.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              marginBottom: 56,
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}>
              <a href="#projects" className="btn-primary">
                View My Work
                <span>→</span>
              </a>
              <a href={`mailto:${data.email}`} className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }} className="stats-grid">
              {data.stats.map((s, i) => (
                <StatCard key={s.label} {...s} delay={700 + i * 120} />
              ))}
            </div>
          </div>

          {/* Right column — dashboard card */}
          <div style={{
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }} className="hero-visual">
            <div style={{ position: 'relative' }}>
              {/* Decorative ring */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '1px solid rgba(45,212,191,0.15)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: -14,
                left: -14,
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: '1px solid rgba(245,158,11,0.15)',
              }} />

              <AnimatedChart />

              {/* Floating model card */}
              <div style={{
                marginTop: 14,
                background: '#13131f',
                border: '1px solid #22223a',
                borderRadius: 10,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a', marginBottom: 3 }}>ACTIVE MODEL</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#e8e8f5' }}>Prophet Forecasting Pipeline</div>
                </div>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'rgba(45,212,191,0.1)',
                  border: '1px solid rgba(45,212,191,0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#2dd4bf',
                }}>
                  MAPE −24%
                </div>
              </div>

              {/* Tech stack row */}
              <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Python', 'MLflow', 'SageMaker', 'XGBoost', 'Prophet'].map((t) => (
                  <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        opacity: 0.5,
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#6b6b8a', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(180deg, #6b6b8a, transparent)',
          animation: 'fadeIn 2s ease infinite',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
