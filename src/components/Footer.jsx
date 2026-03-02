export default function Footer() {
  return (
    <footer id="contact" style={{
      padding: '80px 48px 48px',
      borderTop: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(0,255,209,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Big CTA heading */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text3)',
            letterSpacing: '2px',
            marginBottom: '12px',
          }}>
            <span style={{ color: 'var(--accent)' }}>//</span> 04. contact
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '3px',
            lineHeight: 1,
            color: 'var(--text)',
          }}>
            LET'S<br />
            <span style={{
              WebkitTextStroke: '1px var(--border)',
              color: 'transparent',
            }}>CONNECT</span>
          </h2>
        </div>

        {/* Contact links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '2px',
          marginBottom: '64px',
        }}>
          {[
            {
              label: 'EMAIL',
              value: 'atharvadhaigude@icloud.com',
              href: 'mailto:atharvadhaigude@icloud.com',
              icon: '✉',
            },
            {
              label: 'GITHUB',
              value: 'github.com/Atharvaa99',
              href: 'https://github.com/Atharvaa99',
              icon: '⌥',
            },
            {
              label: 'PHONE',
              value: '+91 7391053555',
              href: 'tel:+917391053555',
              icon: '◎',
            },
            {
              label: 'LOCATION',
              value: 'Pune, Maharashtra, IN',
              href: null,
              icon: '◉',
            },
          ].map(({ label, value, href, icon }) => (
            <ContactBlock key={label} label={label} value={value} href={href} icon={icon} />
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '32px',
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ color: 'var(--accent)' }}>ATH_DEV</span>
            <span>© 2025</span>
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              animation: 'glow-pulse 2s ease-in-out infinite',
            }} />
            OPEN TO OPPORTUNITIES
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text3)',
          }}>
            PUNE, IN — SPPU 2026
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactBlock({ label, value, href, icon }) {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '28px 32px',
        border: '1px solid',
        borderColor: hovered ? 'var(--accent)' : 'var(--border)',
        background: hovered ? 'var(--accent-dim)' : 'var(--bg2)',
        transition: 'all 0.3s ease',
        cursor: href ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        }} />
      )}

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text3)',
          letterSpacing: '2px',
        }}>{label}</span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '16px',
          color: hovered ? 'var(--accent)' : 'var(--text3)',
          transition: 'color 0.3s',
        }}>{icon}</span>
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: hovered ? 'var(--accent)' : 'var(--text)',
        transition: 'color 0.3s',
        wordBreak: 'break-all',
      }}>{value}</div>
    </div>
  )

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" style={{ textDecoration: 'none' }}>
      {inner}
    </a>
  ) : inner
}

import { useState } from 'react'