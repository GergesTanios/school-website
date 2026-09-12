import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { newsArticles, resolveArticleTranslation } from '../data/news'
import { useReducedMotion } from '../lib/motion'
import NewsImage from './NewsImage'
import NewsDate from './NewsDate'

const featuredNews = newsArticles.filter(article => article.featured === true)
const SLIDE_MS = 5000
const FADE_MS = 600

function subscribeIntro(callback: () => void) {
  const observer = new MutationObserver(callback)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-intro-complete'] })
  return () => observer.disconnect()
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener('visibilitychange', callback)
  return () => document.removeEventListener('visibilitychange', callback)
}

type OutgoingSlide = { index: number; transform: string; opacity: string }
type SlideState = { index: number; revision: number; outgoing: OutgoingSlide | null }

function Hero() {
  const { t, i18n } = useTranslation()
  const reducedMotion = useReducedMotion()
  const introComplete = useSyncExternalStore(subscribeIntro, () => document.documentElement.hasAttribute('data-intro-complete'), () => false)
  const tabVisible = useSyncExternalStore(subscribeVisibility, () => document.visibilityState === 'visible', () => true)
  const [slide, setSlide] = useState<SlideState>({ index: 0, revision: 0, outgoing: null })
  const remainingTime = useRef(SLIDE_MS)
  const timerRevision = useRef(0)
  const activeVisual = useRef<HTMLDivElement>(null)
  const activeLayer = useRef<HTMLDivElement>(null)
  const running = introComplete && tabVisible
  const article = featuredNews[slide.index]

  const { translation: articleContent, language } = resolveArticleTranslation(article, i18n.resolvedLanguage ?? i18n.language)
  const direction = language === 'ar' ? 'rtl' : 'ltr'
  const selectSlide = useCallback((index: number) => {
    if (!featuredNews.length) return
    // Freeze the outgoing image at its current zoom, including mid-slide manual changes.
    const transform = activeVisual.current ? getComputedStyle(activeVisual.current).transform : 'none'
    const opacity = activeLayer.current ? getComputedStyle(activeLayer.current).opacity : '1'
    setSlide(current => ({
      index: (index + featuredNews.length) % featuredNews.length,
      revision: current.revision + 1,
      outgoing: { index: current.index, transform, opacity },
    }))
  }, [])

  useEffect(() => {
    if (timerRevision.current !== slide.revision) {
      remainingTime.current = SLIDE_MS
      timerRevision.current = slide.revision
    }
    if (!running || featuredNews.length < 2) return
    const startedAt = performance.now()
    const timer = window.setTimeout(() => selectSlide(slide.index + 1), remainingTime.current)
    return () => {
      window.clearTimeout(timer)
      remainingTime.current = Math.max(0, remainingTime.current - (performance.now() - startedAt))
    }
  }, [slide.index, slide.revision, running, selectSlide])

  useEffect(() => {
    if (!slide.outgoing) return
    const revision = slide.revision
    const timer = window.setTimeout(() => {
      setSlide(current => current.revision === revision ? { ...current, outgoing: null } : current)
    }, FADE_MS)
    return () => window.clearTimeout(timer)
  }, [slide.revision, slide.outgoing])

  useEffect(() => {
    const nextImage = featuredNews[(slide.index + 1) % featuredNews.length]?.images[0]
    if (!nextImage || featuredNews.length < 2) return
    const image = new Image()
    image.src = nextImage
  }, [slide.index])

  const outgoingArticle = slide.outgoing ? featuredNews[slide.outgoing.index] : undefined
  const { translation: outgoingContent } = resolveArticleTranslation(outgoingArticle, i18n.resolvedLanguage ?? i18n.language)
  return (
    <section id="home" role="region" aria-roledescription={t('newsUI.carousel')} aria-label={t('newsUI.featuredNews')} data-slide-id={article?.id} className="hero-news relative flex min-h-screen items-center overflow-hidden bg-school-navy-dark pt-20">
      {outgoingArticle && slide.outgoing && <div key={`outgoing-${slide.revision}`} aria-hidden="true" className="hero-news-outgoing absolute inset-0" style={{ '--fade-from': slide.outgoing.opacity } as CSSProperties}>
        <div className="absolute inset-0" style={{ transform: slide.outgoing.transform }}>
          <NewsImage src={outgoingArticle.images[0]} alt={outgoingContent.imageAlt || outgoingContent.title} eager className="h-full w-full" />
        </div>
      </div>}
      {article && <div key={`slide-${slide.revision}`} ref={activeLayer} aria-hidden="true" className={`absolute inset-0 ${slide.revision > 0 ? 'hero-news-enter' : ''}`}>
        <div ref={activeVisual} className={`hero-news-visual absolute inset-0 ${reducedMotion ? '' : 'hero-news-image'}`} style={{ animationPlayState: running ? 'running' : 'paused' }}>
          <NewsImage src={article.images[0]} alt={articleContent.imageAlt || articleContent.title} eager className="h-full w-full" />
        </div>
      </div>}
      <div aria-hidden="true" className={`hero-news-overlay absolute inset-0 ${article && direction === 'rtl' ? 'hero-news-overlay--rtl' : ''}`} />

      <div className="hero-reveal-content relative z-20 mx-auto w-full max-w-7xl px-6 pb-44 pt-20 md:pb-48 md:pt-24 lg:px-8">
        <div className="mb-6 inline-flex rounded-full border border-school-gold/40 bg-black/20 px-5 py-2.5 text-sm font-bold text-school-gold backdrop-blur-md">{t('home.hero.lyce_saintelie_darbesim_saida')}</div>
        <div dir={article ? direction : undefined} lang={article ? language : undefined} className={`news-copy max-w-4xl text-start ${article && direction === 'rtl' ? 'ml-auto' : 'mr-auto'}`}>
          {article && (articleContent.category || article.date) && <p className="mb-5 flex flex-wrap gap-3 text-sm font-semibold text-school-gold">{articleContent.category && <span>{articleContent.category}</span>}{article.date && <NewsDate date={article.date} />}</p>}
          <h1 className="text-[1.75rem] font-black leading-tight tracking-tight text-school-gold sm:text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[4rem]">{articleContent.title || t('nav.news_events')}</h1>
          <p className="mt-6 line-clamp-3 max-w-3xl text-lg leading-8 text-slate-100 md:line-clamp-none md:text-xl">{articleContent.excerpt || t('newsUI.empty')}</p>
          <div className="mt-8">
            <Link to={article ? `/news/${article.slug}` : '/news'} className="inline-flex items-center gap-2 rounded-xl bg-school-burgundy px-6 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark" lang={i18n.resolvedLanguage} dir={i18n.dir()}>
              <span>{t('home.read_more')}</span><ArrowRight size={19} className={i18n.resolvedLanguage === 'ar' ? 'rotate-180' : ''} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {featuredNews.length > 1 && <div className="hero-reveal-content absolute inset-x-0 bottom-24 z-30 px-6 md:bottom-28" role="group" aria-label={t('newsUI.controls')}>
        <div dir="ltr" className="mx-auto flex w-fit max-w-full items-center justify-center">
          <div className="flex min-w-0 flex-wrap justify-center">{featuredNews.map((item, index) => <button key={item.id} type="button" onClick={() => selectSlide(index)} aria-label={t('home.hero.go_to_slide', { number: index + 1 })} aria-pressed={slide.index === index} className="flex h-11 w-8 items-center justify-center rounded-lg sm:w-10">
            <span aria-hidden="true" className={`h-2.5 rounded-full ${slide.index === index ? 'w-6 bg-school-gold' : 'w-2.5 bg-white/60'}`} />
          </button>)}</div>
        </div>
      </div>}
      {/* Logo-inspired bottom waves */}
<div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 130"
    preserveAspectRatio="none"
    className="block h-[90px] w-full md:h-[115px]"
  >
    {/* Burgundy layer */}
    <path
      d="M0,45
         C220,95 360,105 560,75
         C780,40 930,85 1120,105
         C1270,120 1360,105 1440,85
         L1440,130 L0,130 Z"
      fill="#8E1037"
    />

    {/* Gold accent */}
    <path
      d="M0,38
         C220,85 365,96 560,67
         C780,33 930,76 1120,96
         C1270,112 1360,97 1440,77"
      fill="none"
      stroke="#F2B84B"
      strokeWidth="5"
    />

    {/* White foreground */}
    <path
      d="M0,58
         C220,108 380,114 580,84
         C800,51 960,95 1150,112
         C1290,124 1380,109 1440,94
         L1440,130 L0,130 Z"
      fill="white"
    />
  </svg>
</div>
    </section>
  )
}

export default Hero
