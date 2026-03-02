import { useState } from 'react'

const PROJECTS = [
  {
    id: '01', name: 'TremorWatch', tagline: 'IoT Nursing Dashboard',
    description: 'Real-time Parkinson tremor detection dashboard for nurses. Live HR charts, SPO2 monitoring and 500ms tremor alerts with automated IoT device lifecycle management.',
    stack: ['Node.js', 'React', 'MongoDB', 'JWT', 'IoT'],
    link: 'https://wearable-tremor-detector-frontend.vercel.app',
    accent: '#00FFD1', tag: 'HEALTHCARE',
    details: ['500ms tremor alerts', 'Dead-mans switch', 'Real-time HR charts', 'Device lifecycle mgmt'],
  },
  {
    id: '02', name: 'Financial Ledger', tagline: 'Banking System',
    description: 'Double-entry bookkeeping system with immutable ledgers and atomic MongoDB transactions. ACID compliance, idempotency keys and token blacklisting.',
    stack: ['Node.js', 'React', 'MongoDB', 'JWT'],
    link: 'https://bank-ledger-frontend-du31.vercel.app',
    accent: '#C4A450', tag: 'FINTECH',
    details: ['ACID transactions', 'Idempotency keys', 'Immutable ledgers', 'Token blacklisting'],
  },
  {
    id: '03', name: 'NeuralChat', tagline: 'AI Chatbot',
    description: 'Hybrid context management AI chatbot with sliding window of last 10 messages plus AI-generated summaries. Multi-model LLaMA 3 support via Groq API.',
    stack: ['Node.js', 'React', 'MongoDB', 'Groq API', 'LLaMA 3'],
    link: 'https://neural-chat-frontend.vercel.app',
    accent: '#7C6AFF', tag: 'AI',
    details: ['Hybrid context mgmt', 'Multi-model support', 'Auto chat titling', 'Markdown rendering'],
  },
]

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : '0, 255, 209'
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid', borderColor: hovered ? project.accent : 'var(--border)',
        background: hovered ? 'rgba(' + hexToRgb(project.accent) + ', 0.04)' : 'var(--bg2)',
        padding: '32px 40px', transition: 'all 0.3s ease',
        cursor: 'default', position: 'relative', overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, ' + project.accent + ', transparent)',
        }} />
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr auto', gap: '32px', alignItems: 'center' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '36px', letterSpacing: '2px', lineHeight: 1,
            color: hovered ? project.accent : 'var(--text3)', transition: 'color 0.3s',
          }}>{project.id}</div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', marginTop: '4px',
            color: hovered ? project.accent : 'var(--text3)', transition: 'color 0.3s',
          }}>{project.tag}</div>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', letterSpacing: '2px', color: 'var(--text)', margin: 0 }}>{project.name}</h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>{project.tagline}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7, maxWidth: '420px', margin: 0 }}>{project.description}</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
            {project.stack.map(s => (
              <span key={s} style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', padding: '3px 8px', letterSpacing: '0.5px',
                color: hovered ? project.accent : 'var(--text3)',
                border: '1px solid ' + (hovered ? project.accent + '40' : 'var(--border)'),
                transition: 'all 0.3s',
              }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {project.details.map(d => (
            <div key={d} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: project.accent, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.3s' }}>▸</span>
              {d}
            </div>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px',
          padding: '12px 20px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 0.3s',
          border: '1px solid ' + (hovered ? project.accent : 'var(--border)'),
          color: hovered ? project.accent : 'var(--text3)',
          background: hovered ? 'rgba(' + hexToRgb(project.accent) + ', 0.08)' : 'transparent',
        }}>
          LAUNCH ↗
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 48px', position: 'relative' }}>
      <div style={{ marginBottom: '64px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <span style={{ color: 'var(--accent)' }}>//</span> 02. projects
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '3px', color: 'var(--text)', lineHeight: 1, margin: 0 }}>
          DEPLOYED<br />
          <span style={{ WebkitTextStroke: '1px var(--border)', color: 'transparent' }}>SYSTEMS</span>
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}