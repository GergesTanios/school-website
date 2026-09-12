import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SchoolPage from '../components/SchoolPage'
import { admissionSteps, admissionFaq } from '../data/school'

export default function Admissions() {
  const { t } = useTranslation()
  return <SchoolPage eyebrow={t('nav.admissions')} title={t('admissionsPage.title')} description={t('admissionsPage.subtitle')}>
    <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('admissionsPage.welcome.title')}</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{t('admissionsPage.welcome.text')}</p><p className="mt-6 max-w-3xl rounded-xl border border-school-gold/50 bg-school-cream p-5 text-sm leading-7 text-slate-700">{t('admissionsPage.placeholder')}</p></div></section>
    <section className="px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('admissionsPage.process')}</h2><ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{admissionSteps.map((step, index) => <li key={step} className="rounded-2xl border border-school-navy/10 bg-white p-7"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-school-burgundy text-xl font-black text-white" aria-hidden="true">{index + 1}</span><h3 className="mt-5 text-xl font-bold text-school-navy">{t(`admissionsPage.steps.${step}.title`)}</h3><p className="mt-4 leading-7 text-slate-600">{t(`admissionsPage.steps.${step}.text`)}</p></li>)}</ol></div></section>
    <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div><h2 className="text-3xl font-black text-school-navy">{t('admissionsPage.documents.title')}</h2><p className="mt-5 leading-8 text-slate-700">{t('admissionsPage.documents.text')}</p><ul className="mt-6 list-disc space-y-3 ps-5 text-slate-700">{['identity', 'records', 'forms'].map(item => <li key={item}>{t(`admissionsPage.documents.${item}`)}</li>)}</ul></div>
      <div><h2 className="text-3xl font-black text-school-navy">{t('admissionsPage.faq')}</h2><div className="mt-6 divide-y divide-slate-200">{admissionFaq.map(id => <details key={id} className="py-5"><summary className="cursor-pointer text-lg font-bold text-school-navy">{t(`admissionsPage.questions.${id}.question`)}</summary><p className="mt-4 leading-7 text-slate-600">{t(`admissionsPage.questions.${id}.answer`)}</p></details>)}</div></div>
    </div></section>
    <section className="bg-school-burgundy px-6 py-20 text-white"><div className="mx-auto max-w-5xl text-center"><h2 className="text-3xl font-black md:text-5xl">{t('admissionsPage.cta.title')}</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">{t('admissionsPage.cta.text')}</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Link to="/contact#message" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-school-burgundy">{t('common.bookVisit')}<ArrowRight size={18} className="rtl:rotate-180" /></Link><Link to="/contact" className="rounded-xl bg-school-gold px-6 py-3.5 font-bold text-school-navy-dark">{t('common.contactAdmissions')}</Link></div></div></section>
  </SchoolPage>
}
