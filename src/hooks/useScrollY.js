import { useSyncExternalStore } from 'react'

// Header, FloatingActions ve iki ayrı ParallaxBubbles kendi scroll listener'ını
// ve kendi rAF döngüsünü kurunca, her scroll karesinde 4 bağımsız React render
// aynı anda tetikleniyordu — mobilde bu birikimli iş yükü kasmaya yol açıyordu.
// Burada tek bir native scroll listener + tek bir rAF döngüsü paylaşılıyor.
let scrollY = typeof window !== 'undefined' ? window.scrollY : 0
let ticking = false
const listeners = new Set()

function handleScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    scrollY = window.scrollY
    ticking = false
    listeners.forEach((listener) => listener())
  })
}

let started = false
function ensureStarted() {
  if (started) return
  started = true
  window.addEventListener('scroll', handleScroll, { passive: true })
}

function subscribe(listener) {
  ensureStarted()
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return scrollY
}

function getServerSnapshot() {
  return 0
}

export function useScrollY() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
