'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

const techIcons: Record<string, string> = {
  Python: '🐍', SQL: '🗄️', XGBoost: '⚡', Prophet: '📈', Docker: '🐳',
  MLflow: '🔬', 'AWS SageMaker': '☁️', Tableau: '📊', R: '📉', Flask: '🌐',
}

function SkillGroup({ category, skills, index }: { category: string; skills: typeof data.skills[keyof typeof data.skills]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
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
    <div
      ref={ref}
      className="card"
      style={{
        padding: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: '#2dd4bf',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: 22,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <span style={{ width: 16, height: 1, background: '#2dd4bf', display: 'block' }} />
        {category}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#a8a8c8' }}>
                {skill.name}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a' }}>
                {skill.level}%
              </span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  transition: `width 1.2s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.1 + 0.2}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)
  const [techVisible, setTechVisible] = useState(false)
  const techRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeadVisible(true) }, { threshold: 0.1 })
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTechVisible(true) }, { threshold: 0.1 })
    if (headRef.current) obs1.observe(headRef.current)
    if (techRef.current) obs2.observe(techRef.current)
    return () => { obs1.disconnect(); obs2.disconnect() }
  }, [])

  const categories = Object.entries(data.skills)

  const allTech = ['Python', 'SQL', 'XGBoost', 'Prophet', 'Docker', 'MLflow', 'AWS SageMaker', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'R', 'Flask', 'Tableau', 'Power BI', 'ARIMA', 'SARIMA', 'LSTM', 'TF-IDF', 'Linux', 'Git']

  return (
    <section id="skills" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-teal" style={{ width: 450, height: 450, top: -100, left: -100 }} />
      <div className="blob-violet" style={{ width: 400, height: 400, bottom: -100, right: -100 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            marginBottom: 56,
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-label" style={{ marginBottom: 16 }}>Skills</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#f5f5ff',
          }}>
            The full ML<br />
            <span className="gradient-teal">stack.</span>
          </h2>
        </div>

        {/* Skill bars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          marginBottom: 48,
        }} className="skills-grid">
          {categories.map(([cat, skills], i) => (
            <SkillGroup key={cat} category={cat} skills={skills} index={i} />
          ))}
        </div>

        {/* Tech cloud */}
        <div
          ref={techRef}
          style={{
            background: '#13131f',
            border: '1px solid #22223a',
            borderRadius: 12,
            padding: 32,
            opacity: techVisible ? 1 : 0,
            transform: techVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#6b6b8a',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Full Tech Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {allTech.map((t, i) => (
              <span
                key={t}
                className="tag"
                style={{
                  fontSize: '0.72rem',
                  opacity: techVisible ? 1 : 0,
                  transition: `opacity 0.4s ease ${0.4 + i * 0.03}s`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
