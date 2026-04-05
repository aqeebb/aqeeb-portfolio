import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.13
      trail.current.y += (pos.current.y - trail.current.y) * 0.13
      if (trailRef.current) {
        trailRef.current.style.left = trail.current.x + 'px'
        trailRef.current.style.top = trail.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  )
}
