const SKILLS = [
  {
    category: 'Backend',
    icon: '⬡',
    color: 'var(--accent)',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Auth', 'bcrypt', 'Express Validator'],
  },
  {
    category: 'Database',
    icon: '◈',
    color: 'var(--gold)',
    items: ['MongoDB', 'Mongoose', 'MySQL', 'ACID Transactions', 'TTL Indexes', 'Aggregation'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    color: 'var(--purple)',
    items: ['React.js', 'Vite', 'JavaScript ES6+', 'HTML', 'CSS', 'Axios'],
  },
  {
    category: 'AI & APIs',
    icon: '✦',
    color: '#FF4D6D',
    items: ['Groq API', 'LLaMA 3', 'Context Management', 'Prompt Engineering'],
  },
  {
    category: 'DevOps',
    icon: '⬢',
    color: 'var(--accent)',
    items: ['Docker', 'Git & GitHub', 'Render', 'Vercel', 'Postman', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '120px 48px',
      position: 'relative',
      borderTop: '1px solid var(--border)',
    }}>

      {/* Background accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,255,209,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text3)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          <span style={{ color: 'var(--accent)' }}>//</span> 03. skills
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 7vw, 80px)',
          letterSpacing: '3px',
          color: 'var(--text)',
          lineHeight: 1,
        }}>
          TECH<br />
          <span style={{
            WebkitTextStroke: '1px var(--border)',
            color: 'transparent',
          }}>STACK</span>
        </h2>
      </div>

      {/* Skills grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2px',
      }}>
        {SKILLS.map((group) => (
          <SkillBlock key={group.category} group={group} />
        ))}
      </div>

      {/* Currently learning strip */}
      <div style={{
        marginTop: '48px',
        padding: '20px 32px',
        border: '1px solid var(--border)',
        background: 'var(--bg2)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '2px',
          whiteSpace: 'nowrap',
        }}>$ currently_learning</span>
        <div style={{
          width: '1px',
          height: '20px',
          background: 'var(--border)',
        }} />
        {['System Design', 'Redis', 'Microservices', 'TypeScript'].map(item => (
          <span key={item} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text2)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              animation: 'glow-pulse 2s ease-in-out infinite',
            }} />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function SkillBlock({ group }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '32px',
        border: '1px solid',
        borderColor: hovered ? group.color : 'var(--border)',
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line on hover */}
      {hovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
        }} />
      )}

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
      }}>
        <span style={{
          fontSize: '20px',
          color: group.color,
          fontFamily: 'var(--font-mono)',
        }}>{group.icon}</span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          letterSpacing: '2px',
          color: 'var(--text)',
        }}>{group.category.toUpperCase()}</span>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {group.items.map((item, i) => (
          <div key={item} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: hovered ? 'var(--text)' : 'var(--text2)',
            transition: `color 0.2s ease ${i * 30}ms`,
          }}>
            <span style={{
              color: group.color,
              opacity: hovered ? 1 : 0.3,
              transition: `opacity 0.2s ease ${i * 30}ms`,
              fontSize: '8px',
            }}>◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'