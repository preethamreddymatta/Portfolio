'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

export default function About() {
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

  const certs = data.certifications
  const edu = data.education

  return (
    <section id="about" ref={ref} style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-violet" style={{ width: 400, height: 400, top: 0, left: -200 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <div className="section-label" style={{ marginBottom: 20 }}>About</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#f5f5ff',
              marginBottom: 32,
            }}>
              From raw data to<br />
              <span className="gradient-amber">real outcomes.</span>
            </h2>

            {data.about.map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: '#8888aa',
                lineHeight: 1.8,
                marginBottom: i < data.about.length - 1 ? 18 : 0,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.7s ease ${0.15 + i * 0.12}s, transform 0.7s ease ${0.15 + i * 0.12}s`,
              }}>
                {para}
              </p>
            ))}

            {/* Education */}
            <div style={{ marginTop: 40 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#6b6b8a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Education</div>
              {edu.map((e, i) => (
                <div key={i} style={{
                  padding: '14px 0',
                  borderTop: i === 0 ? '1px solid #22223a' : 'none',
                  borderBottom: '1px solid #22223a',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#e8e8f5', fontWeight: 500 }}>{e.school}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#8888aa', marginTop: 3 }}>{e.degree}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#6b6b8a' }}>{e.period}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a', marginTop: 2 }}>{e.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(24px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            {/* What I build */}
            <div style={{
              background: '#13131f',
              border: '1px solid #22223a',
              borderRadius: 12,
              padding: 28,
              marginBottom: 20,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#6b6b8a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>
                What I Build
              </div>
              {[
                { emoji: '📊', label: 'Predictive Models', desc: 'XGBoost, Random Forest, LSTM, Neural Networks' },
                { emoji: '🔮', label: 'Demand Forecasting', desc: 'ARIMA, SARIMA, Prophet — 24% MAPE improvement' },
                { emoji: '🧪', label: 'Statistical Analysis', desc: 'A/B Testing, LTV Modeling, Segmentation' },
                { emoji: '💬', label: 'NLP Systems', desc: 'Sentiment analysis, TF-IDF, Word Embeddings' },
                { emoji: '🎯', label: 'Recommendation Engines', desc: 'Hybrid cosine + kNN on 250K+ listings' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: 14,
                  padding: '10px 0',
                  borderBottom: i < 4 ? '1px solid #22223a' : 'none',
                }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#e8e8f5', fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#6b6b8a', marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{
              background: '#13131f',
              border: '1px solid #22223a',
              borderRadius: 12,
              padding: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#6b6b8a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>
                Certifications · DeepLearning.AI
              </div>
              {certs.map((c, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  padding: '8px 0',
                  borderBottom: i < certs.length - 1 ? '1px solid #1a1a2e' : 'none',
                }}>
                  <span style={{ color: '#2dd4bf', marginTop: 4, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#a8a8c8', lineHeight: 1.5 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
