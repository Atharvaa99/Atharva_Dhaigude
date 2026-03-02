import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      const isClickable = el.closest('a, button, [role="button"]')
      setHovering(!!isClickable)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  useEffect(() => {
    let animFrame
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      setTrail(prev => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }))
      animFrame = requestAnimationFrame(animate)
    }
    animFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame)
  }, [pos])

  return (
    <>
      {/* Dot */}
      <div style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: clicking ? '6px' : '8px',
        height: clicking ? '6px' : '8px',
        background: hovering ? 'transparent' : 'var(--accent)',
        border: hovering ? '1px solid var(--accent)' : 'none',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'width 0.1s, height 0.1s, background 0.2s',
        boxShadow: '0 0 8px var(--accent)',
      }} />

      {/* Trail ring */}
      <div style={{
        position: 'fixed',
        left: trail.x,
        top: trail.y,
        width: hovering ? '44px' : clicking ? '24px' : '32px',
        height: hovering ? '44px' : clicking ? '24px' : '32px',
        border: '1px solid ' + (hovering ? 'var(--accent)' : 'rgba(0,255,209,0.3)'),
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99998,
        transition: 'width 0.2s, height 0.2s, border-color 0.2s',
      }} />
    </>
  )
}