import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useReducedMotion } from '../lib/motion'

interface CounterProps { end: number; suffix?: string; duration?: number }

function Counter({ end, suffix = '', duration = 1800 }: CounterProps) {
  const { i18n } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element || reducedMotion) return
    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      let start: number | null = null
      const animate = (timestamp: number) => {
        start ??= timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [end, duration, reducedMotion])
  const format = (value: number) => value.toLocaleString(i18n.resolvedLanguage)
  return <span ref={ref}><span aria-hidden="true">{format(reducedMotion ? end : count)}{suffix}</span><span className="sr-only">{format(end)}{suffix}</span></span>
}

export default Counter
