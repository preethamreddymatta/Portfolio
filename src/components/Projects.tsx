'use client'
import { useEffect, useRef, useState } from 'react'
import { data } from '@/lib/data'

const colorMap = {
  teal: { accent: '#2dd4bf', bg: 'rgba(45,212,191,0.06)', border: 'rgba(45,212,191,0.2)', tag: 'tag' },
  amber: { accent: '#f59e0b', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.2)', tag: 'tag tag-amber' },
  violet: { accent: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.2)', tag: 'tag tag-violet' },
}

function ProjectCard({ project, index }: { project: typeof data.projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const c = colorMap[project.color]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isFeatured = project.featured

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: isFeatured ? 32 : 26,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
        gridColumn: isFeatured ? 'span 1' : 'span 1',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: `linear-gradient(90deg, ${c.accent}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: isFeatured ? '1.5rem' : '1.2rem' }}>{project.icon}</span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: c.accent,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '3px 8px',
              background: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: 4,
            }}>
              {project.featured ? 'Featured' : 'Project'}
            </span>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: isFeatured ? '1.25rem' : '1.05rem',
            fontWeight: 600,
            color: '#f5f5ff',
            lineHeight: 1.3,
          }}>
            {project.title}
          </h3>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#6b6b8a',
            marginTop: 4,
            letterSpacing: '0.05em',
          }}>
            {project.subtitle}
          </div>
        </div>
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: 8,
            border: '1px solid #22223a',
            background: '#1a1a2e',
            color: '#6b6b8a',
            textDecoration: 'none',
            fontSize: '0.9rem',
            flexShrink: 0,
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = c.accent; (e.currentTarget as HTMLElement).style.color = c.accent }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#22223a'; (e.currentTarget as HTMLElement).style.color = '#6b6b8a' }}
          title="View on GitHub"
        >
          ↗
        </a>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        color: '#8888aa',
        lineHeight: 1.75,
        marginBottom: 20,
      }}>
        {project.description}
      </p>

      {/* Outcomes */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#6b6b8a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>
          Key Outcomes
        </div>
        {project.outcomes.map((o, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 7, alignItems: 'flex-start' }}>
            <span style={{ color: c.accent, flexShrink: 0, marginTop: 2, fontSize: '0.75rem' }}>→</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#a8a8c8', lineHeight: 1.5 }}>{o}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {project.tags.map(t => (
          <span key={t} className={c.tag} style={{ fontSize: '0.65rem' }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
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

  const featured = data.projects.filter(p => p.featured)
  const others = data.projects.filter(p => !p.featured)

  return (
    <section id="projects" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div className="blob-teal" style={{ width: 500, height: 500, top: 0, right: -200 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 56,
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
          className="projects-header"
        >
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Featured Work</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#f5f5ff',
            }}>
              Projects that<br />
              <span className="gradient-teal">moved metrics.</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right' }} className="projects-meta">
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#6b6b8a', letterSpacing: '0.1em' }}>
              {data.projects.length} PROJECTS
            </div>
            <a href={data.github} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#2dd4bf', textDecoration: 'none', letterSpacing: '0.05em' }}>
              github.com/preet →
            </a>
          </div>
        </div>

        {/* Featured projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 20 }} className="featured-grid">
          {featured.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            {others.map((p, i) => <ProjectCard key={p.title} project={p} index={i + featured.length} />)}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .projects-header { flex-direction: column; align-items: flex-start !important; gap: 16px; }
          .projects-meta { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
