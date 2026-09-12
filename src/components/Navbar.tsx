import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { navigation } from '../data/school'
import LanguageSelector from './LanguageSelector'

import logo from '../assets/lycee-st-elie-logo.png'

type NavbarProps = {
  introAware?: boolean
}

function Navbar({ introAware = false }: NavbarProps) {
  const { t } = useTranslation()

  const navLinks = navigation.map(link => ({ ...link, label: t(`nav.${link.key}`) }))

  const toggleRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  return (
    <>
    <a href="#main-content" className="skip-link">{t('common.skip')}</a>
    <header onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }} className={`fixed left-0 top-0 z-50 w-full overflow-hidden border-b border-white/10 bg-school-navy-dark/95 backdrop-blur-xl ${introAware ? 'intro-navigation' : ''}`}>
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <NavLink to="/" onClick={() => setOpen(false)} end className="flex min-w-0 items-center gap-3 pe-3" aria-label={t('nav.lyce_saintelie_home')}>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1">
            <img src={logo} alt="" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-bold tracking-wide text-white">{t('school.name')}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.12em] text-school-gold">{t('school.location')}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-3 xl:flex" aria-label={t('nav.main_navigation')}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `relative text-sm font-medium transition hover:text-white after:absolute after:-bottom-2 after:start-0 after:h-0.5 after:bg-school-gold after:transition-all ${isActive ? 'text-school-gold after:w-full' : 'text-slate-200 after:w-0'}`}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/admissions"
            className={({ isActive }) => `rounded-xl bg-school-burgundy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-school-burgundy-dark ${isActive ? 'ring-2 ring-school-gold ring-offset-2 ring-offset-school-navy-dark' : ''}`}
          >
            {t('nav.admissions')}</NavLink>
          <LanguageSelector />
        </nav>

        <button type="button" ref={toggleRef} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)} className="text-white xl:hidden" aria-label={t('nav.toggle_navigation')} aria-expanded={open}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 right-0 z-0 h-7 overflow-hidden opacity-50 md:inset-x-0 md:h-10 md:opacity-100" aria-hidden="true">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="h-full w-full">
          <path d="M820 63 C1040 58 1220 50 1440 30" fill="none" stroke="#8e1037" strokeWidth="4" opacity="0.28" />
          <path d="M860 66 C1060 62 1240 55 1440 40" fill="none" stroke="#f2b84b" strokeWidth="2.5" opacity="0.35" />
          <path d="M900 68 C1090 66 1270 60 1440 50" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        </svg>
      </div>

      {open && (
        <nav id="mobile-navigation" className="relative z-10 border-t border-white/10 max-h-[calc(100dvh-80px)] overflow-y-auto bg-school-navy-dark px-6 py-5 xl:hidden" aria-label={t('nav.mobile_navigation')}>
          <div className="flex flex-col gap-4">
            <LanguageSelector />
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `border-s-2 py-1 ps-3 font-medium transition ${isActive ? 'border-school-gold text-school-gold' : 'border-transparent text-slate-200 hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/admissions"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `mt-2 rounded-xl bg-school-burgundy px-5 py-3 text-center font-bold text-white transition hover:bg-school-burgundy-dark ${isActive ? 'ring-2 ring-school-gold' : ''}`}
            >
              {t('nav.admissions')}</NavLink>
          </div>
        </nav>
      )}
    </header>
    </>
  )
}

export default Navbar
