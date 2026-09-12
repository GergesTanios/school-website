import { newsArticles, getArticleTranslation } from '../data/news'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const pageKeys: Record<string, string> = { '/': 'home', '/about': 'about', '/academics': 'academics', '/student-life': 'studentLife', '/admissions': 'admissions', '/alumni': 'alumni', '/news': 'news', '/contact': 'contact' }

export default function SEO() {
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const key = pageKeys[pathname] ?? 'home'
  const isArticle = pathname.startsWith('/news/')
  const article = isArticle ? newsArticles.find(item => `/news/${item.slug}` === pathname) : undefined
  const articleContent = getArticleTranslation(article, i18n.resolvedLanguage ?? i18n.language)
  const title = article ? `${articleContent.title} | ${t('school.name')}` : isArticle ? `${t('newsUI.notFound')} | ${t('school.name')}` : t(`seo.${key}.title`)
  const description = articleContent.excerpt || (isArticle ? t('newsUI.notFoundText') : t(`seo.${key}.description`))
  useEffect(() => {
    document.title = title
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
  return null
}
