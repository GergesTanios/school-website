import { useTranslation } from 'react-i18next'

export default function NewsDate({ date }: { date: string | null }) {
  const { t, i18n } = useTranslation()
  if (!date) return <span>{t('newsPage.datePending')}</span>
  return <time dateTime={date}>{new Intl.DateTimeFormat(i18n.resolvedLanguage, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`))}</time>
}
