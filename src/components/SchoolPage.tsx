import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type SchoolPageProps = { eyebrow: string; title: string; description: string; children: ReactNode }

// Reuses the original placeholder page's branded gradient, typography and shell.
export default function SchoolPage({ eyebrow, title, description, children }: SchoolPageProps) {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="bg-school-cream text-slate-900">
      <section className="bg-gradient-to-br from-white via-school-cream to-amber-50 px-6 pb-20 pt-36 md:pb-24 md:pt-44 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-school-burgundy">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-school-navy sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">{description}</p>
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </>
}
