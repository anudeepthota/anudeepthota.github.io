import type { ReactNode } from 'react'
import './glowing-shadow.css'

interface GlowingShadowProps {
  children: ReactNode
  className?: string
}

export function GlowingShadow({ children, className }: GlowingShadowProps) {
  return (
    <div
      className={`glow-container ${className ?? ''}`}
      role="group"
      aria-label="Highlighted portrait"
    >
      <span className="glow" aria-hidden />
      <div className="glow-content">{children}</div>
    </div>
  )
}
