import { useEffect, useState, type CSSProperties } from 'react'

import Hero from './Hero'

type IntroPhase = 'start' | 'merging' | 'merged' | 'fading' | 'revealing' | 'done'

// All coordinates share this 3:2 wrapper. Adjust crossFinal to fine-tune assembly.
const LOGO_LAYOUT = {
  rest: { x: '0%', y: '0%', width: '100%' },
  crossFinal: { x: '45%', y: '-7%', width: '32%' },
  desktop: {
    stage: { right: '4vw', top: '8vh', width: 'min(58vw, 52rem)' },
    crossStart: { x: '-38vw', y: '8vh', rotation: '-3deg', scale: '0.92' },
    restStart: { x: '6vw', y: '1.2vh' },
  },
  mobile: {
    stage: { right: '3vw', top: '9vh', width: '94vw' },
    crossStart: { x: '-30vw', y: '-7vh' },
    restStart: { x: '4vw' },
  },
} as const

type IntroStyle = CSSProperties & Record<`--${string}`, string>

const introStyle: IntroStyle = {
  '--logo-right': LOGO_LAYOUT.desktop.stage.right,
  '--logo-top': LOGO_LAYOUT.desktop.stage.top,
  '--logo-width': LOGO_LAYOUT.desktop.stage.width,
  '--cross-start-x': LOGO_LAYOUT.desktop.crossStart.x,
  '--cross-start-y': LOGO_LAYOUT.desktop.crossStart.y,
  '--cross-start-rotation': LOGO_LAYOUT.desktop.crossStart.rotation,
  '--cross-start-scale': LOGO_LAYOUT.desktop.crossStart.scale,
  '--rest-start-x': LOGO_LAYOUT.desktop.restStart.x,
  '--rest-start-y': LOGO_LAYOUT.desktop.restStart.y,
  '--mobile-logo-right': LOGO_LAYOUT.mobile.stage.right,
  '--mobile-logo-top': LOGO_LAYOUT.mobile.stage.top,
  '--mobile-logo-width': LOGO_LAYOUT.mobile.stage.width,
  '--mobile-cross-start-x': LOGO_LAYOUT.mobile.crossStart.x,
  '--mobile-cross-start-y': LOGO_LAYOUT.mobile.crossStart.y,
  '--mobile-rest-start-x': LOGO_LAYOUT.mobile.restStart.x,
}

function LandingIntro() {
  const [phase, setPhase] = useState<IntroPhase>('start')
  const [showTitle, setShowTitle] = useState(false)
  const animationStarted = phase !== 'start'

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timings = reducedMotion
      ? { merging: 100, merged: 100, fading: 600, revealing: 750, done: 1000 }
      : { merging: 200, merged: 1900, fading: 2400, revealing: 2550, done: 2800 }

    // Change this one value to fine-tune the independent title reveal.
    const titleTimer = window.setTimeout(() => setShowTitle(true), 450)

    const timers = (Object.entries(timings) as [Exclude<IntroPhase, 'start'>, number][]).map(
      ([nextPhase, delay]) => window.setTimeout(() => setPhase(nextPhase), delay),
    )

    return () => {
      window.clearTimeout(titleTimer)
      timers.forEach(window.clearTimeout)
    }
  }, [])

  useEffect(() => {
    const revealSite = phase === 'revealing' || phase === 'done'
    document.documentElement.toggleAttribute('data-intro-revealing', revealSite)
    document.documentElement.toggleAttribute('data-intro-complete', phase === 'done')
  }, [phase])

  useEffect(
    () => () => {
      document.documentElement.removeAttribute('data-intro-revealing')
      document.documentElement.removeAttribute('data-intro-complete')
    },
    [],
  )

  return (
    <section className="landing-intro" style={introStyle} aria-label="Lycée Saint-Elie introduction">
      <div className="landing-intro__site">
        <Hero />
      </div>

      {phase !== 'done' && (
        <div className={`landing-intro__sequence landing-intro__sequence--${phase}${animationStarted ? ' landing-intro__sequence--active' : ''}`}>
          <div className="landing-intro__overlay" />

          <div className={`landing-intro__title${showTitle ? ' landing-intro__title--visible' : ''}`}>
            <h1>
              Rooted in Faith,
              <span>Sailing Toward the Future.</span>
            </h1>
          </div>

          <div className="logo-animation">
            <div className="logo-animation__frame">
              <img
                src="/images/logo-cross.png"
                alt=""
                className="logo-animation__cross"
                style={{ left: LOGO_LAYOUT.crossFinal.x, top: LOGO_LAYOUT.crossFinal.y, width: LOGO_LAYOUT.crossFinal.width }}
                draggable={false}
              />
              <img
                src="/images/logo-rest.png"
                alt=""
                className="logo-animation__rest"
                style={{ left: LOGO_LAYOUT.rest.x, top: LOGO_LAYOUT.rest.y, width: LOGO_LAYOUT.rest.width }}
                draggable={false}
              />
            </div>
            <span className="sr-only">Lycée Saint-Elie</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default LandingIntro
