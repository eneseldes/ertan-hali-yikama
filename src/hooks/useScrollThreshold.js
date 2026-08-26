import { useEffect, useRef, useState } from 'react'

// Scroll bir eşiği geçti mi geçmedi mi bilgisini rAF ile throttle ederek
// döndürür; native scroll event'inde her karede setState çağırmaktan kaçınır.
export function useScrollThreshold(threshold) {
  const [past, setPast] = useState(() => window.scrollY > threshold)
  const ticking = useRef(false)

  useEffect(() => {
    const check = () => {
      ticking.current = false
      setPast((prev) => {
        const next = window.scrollY > threshold
        return prev === next ? prev : next
      })
    }
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(check)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
