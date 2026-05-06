'use client'
import { useState, useEffect } from 'react'
import { data } from '@/lib/data'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
        borderBottom: scrolled ? '1px solid #22223a' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: '#2dd4bf',
          textDecoration: 'none',
          letterSpacing: '0.06em',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#080810',
          fontWeight: 700,
          fontSize: '0.7rem',
        }}>
          PR
        </span>
        <span style={{ color: '#a8a8c8' }}>preetham<span style={{ color: '#2dd4bf' }}>.dev</span></span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
        className="hidden-mobile"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            <span className="nav-dot" />
            {item.label}
          </a>
        ))}
        <a href={`mailto:${data.email}`} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.75rem' }}>
          Hire Me
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: '1px solid #22223a',
          borderRadius: 6,
          padding: '6px 10px',
          color: '#a8a8c8',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
        }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          background: '#0c0c18',
          borderBottom: '1px solid #22223a',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          zIndex: 99,
        }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{ fontSize: '0.9rem', padding: '8px 0' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
