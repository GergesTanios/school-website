import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ImageIcon } from 'lucide-react'

type NewsImageProps = { src?: string; alt: string; className?: string; eager?: boolean }

/** Missing editorial photos use a branded surface, never an unrelated stock photo. */
export default function NewsImage({ src, alt, className = '', eager = false }: NewsImageProps) {
  const { t } = useTranslation()
  const [failedSource, setFailedSource] = useState<string>()
  const missing = !src || failedSource === src
  return <div className={`relative overflow-hidden bg-gradient-to-br from-school-navy via-school-navy-dark to-school-burgundy ${className}`}>
    {missing ? <div role="img" aria-label={`${alt} — ${t('newsUI.imagePending')}`} className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-white/80">
      <ImageIcon aria-hidden="true" size={32} />
      <span className="text-sm">{t('newsUI.imagePending')}</span>
    </div> : <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} onError={() => setFailedSource(src)} className="h-full w-full object-cover" />}
  </div>
}
