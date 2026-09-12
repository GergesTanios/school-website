import { useTranslation } from 'react-i18next'
import { BookOpen, Languages, FlaskConical, Palette, HeartHandshake } from 'lucide-react'
import SchoolPage from '../components/SchoolPage'
import PageCTA from '../components/PageCTA'
import { programs } from '../data/school'

const areas = [
  { id: 'languages', icon: Languages },
  { id: 'science', icon: FlaskConical },
  { id: 'arts', icon: Palette },
] as const

export default function Academics() {
  const { t } = useTranslation()
  return <SchoolPage eyebrow={t('nav.academics')} title={t('academicsPage.title')} description={t('academicsPage.subtitle')}>
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div><BookOpen className="text-school-burgundy" size={32} /><h2 className="mt-5 text-3xl font-black text-school-navy md:text-4xl">{t('academicsPage.approach.title')}</h2></div>
        <div><p className="text-lg leading-8 text-slate-700">{t('academicsPage.approach.text')}</p><p className="mt-6 rounded-xl border border-school-gold/50 bg-school-cream p-5 text-sm leading-7 text-slate-700">{t('academicsPage.placeholder')}</p></div>
      </div>
    </section>
    <section id="programs" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('academicsPage.cycles')}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{programs.map(program => <article key={program.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <img src={program.image} alt={t('common.schoolPhoto')} loading="lazy" className="h-56 w-full object-cover" />
          <div className="p-6"><h3 className="text-xl font-bold text-school-navy">{t(program.title)}</h3><p className="mt-3 leading-7 text-slate-600">{t(program.description)}</p></div>
        </article>)}</div>
      </div>
    </section>
    <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('academicsPage.areas')}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{areas.map(({ id, icon: Icon }) => <article key={id} className="rounded-2xl border border-slate-200 p-7"><Icon className="text-school-burgundy" size={28} /><h3 className="mt-5 text-xl font-bold text-school-navy">{t(`academicsPage.${id}.title`)}</h3><p className="mt-3 leading-7 text-slate-600">{t(`academicsPage.${id}.text`)}</p></article>)}</div>
    </div></section>
    <section className="px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
      <article className="rounded-3xl bg-school-navy p-8 text-white md:p-10"><HeartHandshake size={30} className="text-school-gold" /><h2 className="mt-5 text-3xl font-black">{t('academicsPage.support.title')}</h2><p className="mt-5 leading-8 text-slate-200">{t('academicsPage.support.text')}</p></article>
      <article className="rounded-3xl border border-school-navy/10 bg-white p-8 md:p-10"><h2 className="text-3xl font-black text-school-navy">{t('academicsPage.achievements.title')}</h2><p className="mt-5 leading-8 text-slate-700">{t('academicsPage.achievements.text')}</p></article>
    </div></section>
    <PageCTA title={t('academicsPage.cta.title')} description={t('academicsPage.cta.text')} />
  </SchoolPage>
}
