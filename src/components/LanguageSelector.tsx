import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'

const names = { en: 'English', fr: 'Français', ar: 'العربية' }

export default function LanguageSelector() {
  const { t, i18n } = useTranslation()
  return (
    <div role="group" aria-label={t('nav.language')} dir="ltr" className="flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-300">
      {languages.map((language, index) => (
        <span key={language} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden="true" className="text-white/30">|</span>}
          <button
            type="button"
            lang={language}
            aria-label={names[language]}
            aria-pressed={i18n.resolvedLanguage === language}
            onClick={() => void i18n.changeLanguage(language)}
            className={`rounded px-1.5 py-2 transition hover:text-white focus-visible:outline-2 focus-visible:outline-school-gold ${i18n.resolvedLanguage === language ? 'text-school-gold' : ''}`}
          >
            {language.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
