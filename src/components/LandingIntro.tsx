import { useTranslation } from 'react-i18next'
import { useEffect, useState, type CSSProperties } from 'react'

import Hero from './Hero'
import { useReducedMotion } from '../lib/motion'

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
  const { t } = useTranslation()

  const reducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<IntroPhase>(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'done' : 'start')
  const [showTitle, setShowTitle] = useState(false)
  const animationStarted = phase !== 'start'

  useEffect(() => {
    if (reducedMotion) return
    const timings = { merging: 200, merged: 1900, fading: 2400, revealing: 2550, done: 2800 }

    // Change this one value to fine-tune the independent title reveal.
    const titleTimer = window.setTimeout(() => setShowTitle(true), 450)

    const timers = (Object.entries(timings) as [Exclude<IntroPhase, 'start'>, number][]).map(
      ([nextPhase, delay]) => window.setTimeout(() => setPhase(nextPhase), delay),
    )

    return () => {
      window.clearTimeout(titleTimer)
      timers.forEach(window.clearTimeout)
    }
  }, [reducedMotion])

  useEffect(() => {
    const revealSite = reducedMotion || phase === 'revealing' || phase === 'done'
    document.documentElement.toggleAttribute('data-intro-revealing', revealSite)
    document.documentElement.toggleAttribute('data-intro-complete', reducedMotion || phase === 'done')
  }, [phase, reducedMotion])

  useEffect(
    () => () => {
      document.documentElement.removeAttribute('data-intro-revealing')
      document.documentElement.removeAttribute('data-intro-complete')
    },
    [],
  )

  return (
    <section className="landing-intro" style={introStyle} aria-label={t('home.intro.lyce_saintelie_introduction')}>
      <div className="landing-intro__site">
        <Hero />
      </div>

      {!reducedMotion && phase !== 'done' && (
        <div aria-hidden="true" className={`landing-intro__sequence landing-intro__sequence--${phase}${animationStarted ? ' landing-intro__sequence--active' : ''}`}>
          <div className="landing-intro__overlay" />

          <div className={`landing-intro__title${showTitle ? ' landing-intro__title--visible' : ''}`}>
            <p>
              {t('home.intro.rooted_in_faith')}<span>{t('home.intro.sailing_toward_the_future')}</span>
            </p>
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
            <span className="sr-only">{t('school.name')}</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default LandingIntro
