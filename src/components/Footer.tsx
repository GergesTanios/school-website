import { useTranslation } from 'react-i18next'
import {
  
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import logo from '../assets/lycee-st-elie-logo.png'
import { Link } from 'react-router-dom'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

function Footer() {
  const { t } = useTranslation()

  return (
   <footer
  id="contact"
  className="bg-school-navy-dark text-slate-300"
>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1">
<button
  onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? "instant" : "smooth" })}
  className="cursor-pointer bg-transparent border-0 p-0"
  aria-label={t('footer.back_to_top')}
>
  <img
    src={logo}
    alt={t('school.name')}
  />
</button>
</div>

              <div>
                <p className="font-bold text-white">{t('school.name')}</p>
                <p className="text-xs text-amber-400">
                  {t('footer.learn_grow_lead')}</p>
              </div>
            </div>

            <p className="mt-5 max-w-xs leading-7 text-slate-400">
              {t('footer.inspiring_students_to_learn_grow_lead_and')}</p>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">{t('footer.school')}</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/about">{t('footer.about_us')}</Link>
              <Link to="/academics">{t('footer.academics')}</Link>
              <Link to="/admissions">{t('footer.admissions')}</Link>
              <Link to="/student-life">{t('footer.student_life')}</Link>
              <Link to="/news">{t('footer.news_events')}</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">{t('footer.alumni')}</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="/alumni#community">{t('footer.alumni_network')}</Link>
              <Link to="/alumni#join">{t('footer.update_my_profile')}</Link>
              <Link to="/alumni#community">{t('footer.alumni_stories')}</Link>
              <Link to="/alumni#community">{t('footer.reunions')}</Link>
              <Link to="/alumni#community">{t('footer.mentorship')}</Link>
              <Link to="/alumni#community">{t('footer.career_opportunities')}</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">{t('footer.contact')}</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 text-amber-400" />
                <span>{t('school.location')}</span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-amber-400" />
                <span dir="ltr">+961 1 000 000</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-amber-400" />
                <span dir="ltr" className="break-all">info@lyceestelie.edu.lb</span>
              </div>
            </div>


           <div className="mt-6 flex gap-4" aria-hidden="true">
  <FaFacebookF size={20} />
  <FaInstagram size={20} />
  <FaLinkedinIn size={20} />
  <FaYoutube size={20} />
</div>
          </div>
        </div>

    <div className="mt-14 border-t border-white/10 pt-7 text-sm text-slate-400">
  {t('footer.2026_lyce_saintelie_all_rights_reserved')}</div>
      </div>
    </footer>
  )
}

export default Footer
