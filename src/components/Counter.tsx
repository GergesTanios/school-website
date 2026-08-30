import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({
  end,
  suffix = '',
  duration = 1800,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return

        started.current = true

        let startTime: number | null = null

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp

          const progress = Math.min(
            (timestamp - startTime) / duration,
            1
          )

          const value = Math.floor(progress * end)

          setCount(value)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(end)
          }
        }

        requestAnimationFrame(animate)
        observer.disconnect()
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default Counter