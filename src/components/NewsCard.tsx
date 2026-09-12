import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { resolveArticleTranslation, type NewsArticle } from '../data/news'
import NewsImage from './NewsImage'
import NewsDate from './NewsDate'

export default function NewsCard({ article, featured = false }: { article: NewsArticle; featured?: boolean }) {
  const { t, i18n } = useTranslation()
  const { translation: articleContent, language } = resolveArticleTranslation(article, i18n.resolvedLanguage ?? i18n.language)
  const direction = language === 'ar' ? 'rtl' : 'ltr'
  const to = `/news/${article.slug}`
  return <article className={featured ? 'grid overflow-hidden rounded-3xl bg-school-navy-dark text-white lg:grid-cols-2' : 'overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'}>
    <Link to={to} aria-label={articleContent.title} lang={language} className="block">
      <NewsImage src={article.images[0]} alt={articleContent.imageAlt || articleContent.title} eager={featured} className={featured ? 'h-80 w-full lg:h-full lg:min-h-96' : 'h-56 w-full'} />
    </Link>
    <div className={featured ? 'p-7 md:p-12' : 'p-7'}>
      <div dir={direction} lang={language} className="news-copy text-start">
        {(articleContent.category || article.date) && <p className={`mb-4 flex flex-wrap gap-3 text-sm font-bold ${featured ? 'text-school-gold' : 'text-school-burgundy'}`}>
          {articleContent.category && <span>{articleContent.category}</span>}{article.date && <NewsDate date={article.date} />}
        </p>}
        <h3 className={featured ? 'text-3xl font-black md:text-4xl' : 'text-2xl font-bold text-school-navy'}><Link to={to}>{articleContent.title}</Link></h3>
        <p className={`mt-5 leading-8 ${featured ? 'text-slate-200' : 'text-slate-600'}`}>{articleContent.excerpt}</p>
      </div>
      <Link to={to} className={`mt-6 inline-flex items-center gap-2 font-bold ${featured ? 'text-school-gold' : 'text-school-burgundy'}`}>
        {t('home.read_more')}<ArrowRight size={18} className="rtl:rotate-180" aria-hidden="true" />
      </Link>
    </div>
  </article>
}
