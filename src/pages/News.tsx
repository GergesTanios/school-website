import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SchoolPage from '../components/SchoolPage'
import NewsDate from '../components/NewsDate'
import NewsCard from '../components/NewsCard'
import { events, newsArticles, getArticleTranslation } from '../data/news'

export default function News() {
  const { t, i18n } = useTranslation()
  const [category, setCategory] = useState<string | null>(null)
  // Canonical English labels keep the active filter stable across language changes.
  const categoryKey = (article: (typeof newsArticles)[number]) => getArticleTranslation(article, 'en').category
  const categories = [...new Map(newsArticles.flatMap(article => {
    const key = categoryKey(article)
    return key ? [[key, getArticleTranslation(article, i18n.resolvedLanguage ?? i18n.language).category ?? key] as const] : []
  }))]
  const featured = newsArticles.find(article => article.featured)
  const filtered = newsArticles.filter(article => !category || categoryKey(article) === category)
  return <SchoolPage eyebrow={t('nav.news_events')} title={t('newsPage.title')} description={t('newsPage.subtitle')}>
    {featured && <section className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-school-burgundy">{t('newsPage.featured')}</h2>
      <NewsCard article={featured} featured />
    </div></section>}
    <section id="events" className="px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('newsPage.events')}</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{events.map(event => <article key={event.id} className="rounded-2xl border border-school-navy/10 bg-white p-7">
        <p className="text-sm font-bold text-school-burgundy"><NewsDate date={event.date} /></p>
        <h3 className="mt-4 text-2xl font-bold text-school-navy">{t(`newsPage.eventsList.${event.id}.title`)}</h3>
        <p className="mt-4 leading-7 text-slate-700">{t(`newsPage.eventsList.${event.id}.text`)}</p>
      </article>)}</div>
    </div></section>
    <section id="latest" className="bg-white px-6 py-20 lg:px-8"><div className="mx-auto max-w-7xl">
      <h2 className="text-3xl font-black text-school-navy md:text-4xl">{t('newsPage.latest')}</h2>
      {categories.length > 0 && <div role="group" aria-label={t('newsPage.categories')} className="mt-8 flex flex-wrap gap-3">
        {[[null, t('newsPage.categoriesList.all')], ...categories].map(([value, label]) => <button key={value ?? 'all'} type="button" aria-pressed={category === value} onClick={() => setCategory(value)} className={`rounded-xl border px-5 py-2.5 font-semibold transition ${category === value ? 'border-school-navy bg-school-navy text-white' : 'border-slate-300 bg-white text-school-navy hover:bg-school-cream'}`}><bdi>{label}</bdi></button>)}
      </div>}
      <p role="status" className="sr-only">{t('newsPage.results', { count: filtered.length })}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(article => <NewsCard key={article.id} article={article} />)}</div>
      {filtered.length === 0 && <p className="mt-8 text-slate-600">{t('newsUI.empty')}</p>}
    </div></section>
  </SchoolPage>
}
