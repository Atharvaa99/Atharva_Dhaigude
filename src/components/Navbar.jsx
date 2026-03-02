import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 48px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,11,15,0.92)' : 'transparent',
      borderBottom: scrolled ? '1px solid #1C2A3A' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease', fontFamily: 'var(--font-mono)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ color: 'var(--accent)', fontSize: '18px', fontWeight: '700', letterSpacing: '2px' }}>ATH</span>
        <span style={{ color: 'var(--text3)', fontSize: '12px' }}>_DEV</span>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {['projects', 'skills', 'contact'].map((item) => (
          <a key={item} href={'#' + item} style={{
            color: 'var(--text2)', textDecoration: 'none', fontSize: '12px',
            letterSpacing: '1.5px', textTransform: 'uppercase', transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}
          >
            {'./'+item}
          </a>
        ))}
      </div>

      <div style={{ color: 'var(--text3)', fontSize: '12px', letterSpacing: '1px' }}>
        <span style={{ color: 'var(--accent)', marginRight: '6px' }}>▶</span>
        {time}
      </div>
    </nav>
  )
}