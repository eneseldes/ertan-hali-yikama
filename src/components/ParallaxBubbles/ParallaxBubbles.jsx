import { useEffect, useMemo, useState } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import './ParallaxBubbles.scss'

// Köpükler boyuta göre büyükten büyüğe sırayla büyür.
const GROW_STAGGER_MS = 140

// Hız gruba göre orantılanır: en küçük köpük MAX_SPEED, en büyüğü MIN_SPEED alır.
const MIN_SPEED = 0.08
const MAX_SPEED = 0.36

function computeSpeeds(bubbles) {
  const sizes = bubbles.map((b) => b.size)
  const min = Math.min(...sizes)
  const max = Math.max(...sizes)
  const range = max - min || 1

  return Object.fromEntries(
    bubbles.map((b) => {
      const t = (b.size - min) / range
      const speed = MAX_SPEED - t * (MAX_SPEED - MIN_SPEED)
      return [b.id, speed]
    }),
  )
}

// Hero'daki, ortalanmış metni saran köpükler.
export const HERO_BUBBLES = [
  { id: 'h1', top: '25%', left: '15%', size: 95, opacity: 0.5, blur: 0 },
  { id: 'h2', top: '70%', right: '10%', size: 130, opacity: 0.35, blur: 1 },
  { id: 'h3', top: '80%', left: '20%', size: 46, opacity: 0.55, blur: 0 },
  { id: 'h4', top: '25%', right: '17%', size: 50, opacity: 0.6, blur: 0 },
  { id: 'h5', top: '52%', left: '5%', size: 70, opacity: 0.42, blur: 1 },
]

export default function ParallaxBubbles({ variant = 'blue', bubbles = HERO_BUBBLES, className = '', growIn = false }) {
  const scrollY = useScrollY()

  // growIn: köpükler yer değiştirmeden büyüyerek belirir (sadece Hero'da).
  const [ready, setReady] = useState(!growIn)

  useEffect(() => {
    if (!growIn) return
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setReady(true))
      return () => cancelAnimationFrame(raf2)
    })
    return () => cancelAnimationFrame(raf1)
  }, [growIn])

  const growDelays = useMemo(() => {
    if (!growIn) return {}
    const bySize = [...bubbles].sort((a, b) => a.size - b.size)
    return Object.fromEntries(bySize.map((b, i) => [b.id, i * GROW_STAGGER_MS]))
  }, [bubbles, growIn])

  const speeds = useMemo(() => computeSpeeds(bubbles), [bubbles])

  return (
    <div
      className={`parallax-bubbles parallax-bubbles--${variant} ${ready ? '' : 'parallax-bubbles--pre'} ${className}`.trim()}
      aria-hidden="true"
    >
      {bubbles.map((b) => {
        const offset = scrollY * speeds[b.id] * -1
        return (
          <span
            key={b.id}
            className="parallax-bubbles__bubble-wrap"
            style={{
              top: b.top,
              left: b.left,
              right: b.right,
              width: b.size,
              height: b.size,
              transform: `translate3d(0, ${offset}px, 0)`,
            }}
          >
            <span
              className="parallax-bubbles__bubble"
              style={{
                opacity: b.opacity,
                filter: b.blur ? `blur(${b.blur}px)` : undefined,
                transitionDelay: growIn ? `${growDelays[b.id]}ms` : undefined,
              }}
            />
          </span>
        )
      })}
    </div>
  )
}
