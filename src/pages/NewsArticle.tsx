import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsImage from '../components/NewsImage'
import NewsCard from '../components/NewsCard'
import NewsDate from '../components/NewsDate'
import { resolveArticleTranslation, newsArticles } from '../data/news'

export default function NewsArticle() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const article = newsArticles.find(item => item.slug === slug)
  const { translation: articleContent, language } = resolveArticleTranslation(article, i18n.resolvedLanguage ?? i18n.language)
  const direction = language === 'ar' ? 'rtl' : 'ltr'
  const related = newsArticles.filter(item => item.id !== article?.id).slice(0, 3)
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="bg-school-cream pb-20 pt-32 text-slate-900 md:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link to="/news" className="mb-8 inline-flex items-center gap-2 font-bold text-school-burgundy"><ArrowLeft size={18} className="rtl:rotate-180" aria-hidden="true" />{t('newsUI.back')}</Link>
        {article ? <>
          <article>
            <header dir={direction} lang={language} className="news-copy mx-auto max-w-5xl text-start">
              {(article.date || articleContent.category) && <p className="mb-5 flex flex-wrap gap-3 text-sm font-bold text-school-burgundy">{articleContent.category && <span>{articleContent.category}</span>}{article.date && <NewsDate date={article.date} />}</p>}
              <h1 className="text-3xl font-black text-school-navy sm:text-4xl md:text-5xl lg:text-6xl">{articleContent.title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">{articleContent.excerpt}</p>
            </header>
            <NewsImage key={article.slug} src={article.images[0]} alt={articleContent.imageAlt || articleContent.title} eager className="mt-10 aspect-[4/3] w-full rounded-3xl md:aspect-[16/7]" />
            <div dir={direction} lang={language} className="news-copy mx-auto mt-12 max-w-3xl space-y-7 text-start text-lg leading-9 text-slate-700">
              {articleContent.content.map((paragraph, index) => <p key={`${article.id}-${index}`}>{paragraph}</p>)}
            </div>
            {article.images.length > 1 && <section className="mt-16" aria-labelledby="article-gallery-title">
              <h2 id="article-gallery-title" className="text-2xl font-bold text-school-navy">{t('newsUI.gallery')}</h2>
              <div className={`mt-7 grid gap-6 md:grid-cols-2 ${article.images.length > 3 ? 'lg:grid-cols-3' : ''}`}>
                {article.images.slice(1).map((src, index) => <NewsImage key={`${src}-${index}`} src={src} alt={t('newsUI.galleryImage', { title: articleContent.title, number: index + 2 })} className="aspect-[4/3] w-full rounded-2xl" />)}
              </div>
            </section>}
          </article>
          {related.length > 0 && <section className="mt-20" aria-labelledby="related-news-title"><h2 id="related-news-title" className="text-3xl font-black text-school-navy">{t('newsUI.related')}</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map(item => <NewsCard key={item.id} article={item} />)}</div></section>}
        </> : <section className="py-20"><h1 className="text-4xl font-black text-school-navy">{t('newsUI.notFound')}</h1><p className="mt-6 text-lg text-slate-700">{t('newsUI.notFoundText')}</p></section>}
      </div>
    </main>
    <Footer />
  </>
}
