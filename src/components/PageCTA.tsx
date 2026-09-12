import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

export default function PageCTA({ title, description }: { title: string; description: string }) {
  const { t } = useTranslation()
  return <section className="bg-school-burgundy px-6 py-20 text-white md:py-24">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">{description}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link to="/contact#message" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-school-burgundy hover:bg-school-cream">{t('common.bookVisit')}<ArrowRight size={18} className="rtl:rotate-180" /></Link>
        <Link to="/admissions" className="rounded-xl bg-school-gold px-6 py-3.5 font-bold text-school-navy-dark hover:bg-amber-300">{t('nav.admissions')}</Link>
      </div>
    </div>
  </section>
}
