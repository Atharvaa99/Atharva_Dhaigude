import { useState, useEffect } from 'react'

const ROLES = ['Full Stack Developer', 'Backend Engineer', 'Node.js Developer', 'API Architect']

const btnPrimary = {
  fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '1px',
  padding: '14px 32px', background: 'var(--accent)', color: '#080B0F',
  textDecoration: 'none', fontWeight: '700', border: '1px solid var(--accent)',
  transition: 'all 0.2s', display: 'inline-block',
}

const btnSecondary = {
  fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '1px',
  padding: '14px 32px', background: 'transparent', color: 'var(--text2)',
  textDecoration: 'none', border: '1px solid var(--border)',
  transition: 'all 0.2s', display: 'inline-block',
}

function PrimaryBtn({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      style={{ ...btnPrimary, background: hov ? 'transparent' : 'var(--accent)', color: hov ? 'var(--accent)' : '#080B0F' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  )
}

function SecondaryBtn({ href, children }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ ...btnSecondary, borderColor: hov ? 'var(--accent)' : 'var(--border)', color: hov ? 'var(--accent)' : 'var(--text2)' }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIndex]
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
      return () => clearTimeout(t)
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(t)
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 40)
      return () => clearTimeout(t)
    }
    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % ROLES.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,255,209,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', animation: 'fadeUp 0.8s ease both', paddingTop: '80px' }}>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text3)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--accent)' }}>atharva@portfolio</span>
          <span>:</span>
          <span style={{ color: 'var(--purple)' }}>~/</span>
          <span style={{ color: 'var(--text2)' }}>$ whoami</span>
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 10vw, 120px)', lineHeight: 0.9, letterSpacing: '4px', color: 'var(--text)', marginBottom: '24px' }}>
          ATHARVA<br />
          <span style={{ WebkitTextStroke: '1px rgba(0,255,209,0.4)', color: 'transparent' }}>DHAIGUDE</span>
        </h1>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2.5vw, 22px)', color: 'var(--accent)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '4px', minHeight: '36px' }}>
          <span style={{ color: 'var(--text3)' }}>&gt;&nbsp;</span>
          <span>{displayed}</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1.2em', background: 'var(--accent)', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }} />
        </div>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--text2)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '48px' }}>
          Backend-first developer specializing in Node.js, Express and MongoDB.
          Building production-grade APIs across FinTech, AI, and IoT healthcare.
          Final year E&TC student at SPPU, Pune.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <PrimaryBtn href="#projects">./view_projects</PrimaryBtn>
          <SecondaryBtn href="https://github.com/Atharvaa99">./github</SecondaryBtn>
        </div>

        <div style={{ display: 'flex', gap: '24px', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
          {[
            { val: '3', label: 'Live Projects' },
            { val: 'Node.js', label: 'Primary Stack' },
            { val: '2026', label: 'Graduating' },
            { val: 'Pune, IN', label: 'Based In' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--accent)', letterSpacing: '2px' }}>{val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}