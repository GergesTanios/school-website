import { useTranslation } from 'react-i18next'
import { Trophy, Music, Users, HeartHandshake } from 'lucide-react'
import SchoolPage from '../components/SchoolPage'
import PageCTA from '../components/PageCTA'
import { gallery } from '../data/school'

const activities = [{ id: 'sports', icon: Trophy }, { id: 'arts', icon: Music }, { id: 'clubs', icon: Users }, { id: 'service', icon: HeartHandshake }] as const

export default function StudentLife() {
  const { t } = useTranslation()
  return <SchoolPage eyebrow={t('nav.student_life')} title={t('studentLifePage.title')} description={t('studentLifePage.subtitle')}>
    <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
      <img src={gallery[1]} alt={t('common.schoolPhoto')} className="h-80 w-full rounded-3xl object-cover md:h-[460px]" />
      <div><p className="text-sm font-bold uppercase tracking-widest text-school-burgundy">{t('studentLifePage.activities')}</p><h2 className="mt-4 text-3xl font-black text-school-navy md:text-4xl">{t('studentLifePage.explore.title')}</h2><p className="mt-6 text-lg leading-8 text-slate-700">{t('studentLifePage.explore.text')}</p><p className="mt-6 text-sm leading-7 text-slate-600">{t('studentLifePage.placeholder')}</p></div>
    </div></section>
    <section className="px-6 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-x-12 gap-y-8 md:grid-cols-2">{activities.map(({ id, icon: Icon }) => <article key={id} className="flex items-start gap-5 border-b border-school-navy/15 pb-8"><Icon size={30} className="shrink-0 text-school-burgundy" /><div><h2 className="text-2xl font-black text-school-navy">{t(`studentLifePage.${id}.title`)}</h2><p className="mt-4 leading-8 text-slate-700">{t(`studentLifePage.${id}.text`)}</p></div></article>)}</div></section>
    <section className="bg-school-navy-dark px-6 py-20 text-white lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
      <div><p className="text-sm font-bold uppercase tracking-widest text-school-gold">{t('studentLifePage.leadership.title')}</p><h2 className="mt-4 text-3xl font-black md:text-4xl">{t('studentLifePage.leadership.heading')}</h2><p className="mt-6 text-lg leading-8 text-slate-200">{t('studentLifePage.leadership.text')}</p></div>
      <img src={gallery[2]} alt={t('common.schoolPhoto')} loading="lazy" className="h-80 w-full rounded-3xl object-cover" />
    </div></section>
    <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('studentLifePage.events.title')}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t('studentLifePage.events.text')}</p></div>
      <h2 className="mt-14 text-2xl font-bold text-school-navy">{t('studentLifePage.gallery')}</h2><p className="mt-3 text-sm text-slate-600">{t('studentLifePage.galleryNote')}</p>
      <div className="mt-7 grid gap-5 md:grid-cols-2">{gallery.map((image, index) => <img key={image} src={image} alt={t('common.schoolPhotoNumber', { number: index + 1 })} loading="lazy" className={`w-full rounded-2xl object-cover ${index === 0 ? 'h-80 md:row-span-2 md:h-full' : 'h-60'}`} />)}</div>
    </div></section>
    <PageCTA title={t('studentLifePage.cta.title')} description={t('studentLifePage.cta.text')} />
  </SchoolPage>
}
