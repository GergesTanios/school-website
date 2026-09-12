import { Link } from 'react-router-dom'
import { programs, statistics } from '../data/school'
import { newsArticles } from '../data/news'
import NewsCard from '../components/NewsCard'
import school3 from '../assets/school-3.jpg'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  FlaskConical,
  Lightbulb,
  Music,
  Palette,
  Trophy,
  Users,
} from 'lucide-react'

import AlumniSection from '../components/AlumniSection'
import Footer from '../components/Footer'
import LandingIntro from '../components/LandingIntro'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'

function Home() {
  const { t } = useTranslation()

  const studentLife = [
    { icon: Trophy, label: t('home.sports') },
    { icon: Palette, label: t('home.arts') },
    { icon: Music, label: t('home.music') },
    { icon: FlaskConical, label: t('home.science') },
    { icon: Lightbulb, label: t('home.innovation') },
    { icon: Users, label: t('home.leadership') },
  ]

  return (
    <>
      <Navbar introAware />

      <main id="main-content" tabIndex={-1}>
        <LandingIntro />

        {/* ABOUT */}
        <section id="about" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85"
                alt={t('home.students_learning')}
                className="h-[520px] w-full rounded-3xl object-cover"
              />

              <div className="absolute bottom-6 right-6 rounded-2xl bg-white p-6 shadow-xl">
                <p className="text-3xl font-black text-school-navy">25+</p>
                <p className="text-sm text-slate-500">
                  {t('home.years_inspiring_students')}</p>
                  {/* <p className="mt-2 max-w-48 text-xs text-slate-600">{t('')}</p> */}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-burgundy">
                {t('common.whySchool')}</p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-school-navy md:text-5xl">
                {t('home.education_that_goes_beyond_the_classroom')}</h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t('home.lyce_saintelie_combines_academic_excellence_creativity_technology')}</p>

              <p className="mt-5 leading-8 text-slate-600">
                {t('home.our_relationship_with_students_does_not_stop')}</p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-school-navy"
              >
                {t('home.discover_more')}<ArrowRight className="rtl:rotate-180" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ACADEMICS */}
        <section id="academics" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-burgundy">
                {t('home.academics')}</p>

              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">
                {t('home.learning_at_every_stage')}</h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {t('home.every_stage_of_the_lyce_saintelie_journey')}</p>
            </div>

            {/* <p className="mt-6 text-center text-sm text-slate-600">{t('')}</p> */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program, index) => (
                <article
                  key={index}
                  className="group overflow-hidden rounded-2xl bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={program.image}
                      alt={t(program.title)}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-school-navy">
                      {t(program.title)}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {t(program.description)}
                    </p>

                    <Link to="/academics#programs" className="mt-5 inline-flex font-bold text-school-burgundy">
                      {t('home.learn_more')}</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT LIFE */}
        <section id="student-life" className="bg-amber-50 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
                {t('home.student_life')}</p>

              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">
                {t('home.discover_participate_belong')}</h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {t('home.education_is_more_than_academics_students_explore')}</p>

<Link to="/student-life" className="mt-6 inline-flex items-center gap-2 font-bold text-school-burgundy">{t('home.discover_more')}<ArrowRight size={18} className="rtl:rotate-180" /></Link>
              <div className="mt-9 grid grid-cols-2 gap-4">
                {studentLife.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <Icon size={21} className="text-school-burgundy" />

                      <span className="font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=85"
              alt={t('home.student_activities')}
              className="h-[500px] w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        {/* STATS */}
      <section className="bg-school-navy py-16">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">

    {statistics.map((stat, index) => (
      <div
        key={index}
        className="relative text-center"
      >

        <p className="text-4xl font-black text-white md:text-5xl">
          <Counter
            end={stat.value}
            suffix={stat.suffix}
          />
        </p>

        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-school-gold" />

        <p className="mt-3 font-medium text-slate-200">
          {t(stat.label)}
        </p>

      </div>
    ))}

  </div>
<p className="mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-slate-200">{t('common.statisticsNote')}</p>
</section>


        <section className="bg-school-cream px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <img src={school3} alt={t('about.placeholder_portrait_of_the_school_principal')} loading="lazy" className="h-96 w-full rounded-3xl object-cover" />
            <div><p className="text-sm font-bold uppercase tracking-widest text-school-burgundy">{t('about.leadership_purpose')}</p><h2 className="mt-4 text-3xl font-black text-school-navy md:text-4xl">{t('common.principalPreview')}</h2><p className="mt-6 text-lg leading-8 text-slate-700">{t('common.principalExcerpt')}</p><Link to="/about#principal" className="mt-6 inline-flex items-center gap-2 font-bold text-school-burgundy">{t('common.readMessage')}<ArrowRight size={18} className="rtl:rotate-180" /></Link></div>
          </div>
        </section>

        {/* NEWS */}
        <section id="news" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-burgundy">
                  {t('home.latest_updates')}</p>

                <h2 className="mt-4 text-4xl font-black text-slate-800   md:text-5xl">
                  {t('home.news_events')}</h2>
              </div>

              <Link to="/news" className="font-bold text-school-navy">
                {t('home.view_all_news')}</Link>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {newsArticles.map(article => <NewsCard key={article.id} article={article} />)}
            </div>
          </div>
        </section>

        <AlumniSection />

        {/* ADMISSIONS */}
        <section id="admissions" className="relative overflow-hidden py-28">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85"
            alt={t('home.school_campus')}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/80" />

          <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-gold">
              {t('home.admissions')}</p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              {t('home.your_childs_journey_starts_here')}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {t('home.discover_an_education_designed_to_inspire_curiosity')}</p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="rounded-xl bg-school-burgundy px-7 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark">
                {t('home.start_your_application')}</Link>

              <Link to="/contact#message" className="rounded-xl border border-white/25 px-7 py-3.5 font-bold transition hover:bg-white/10">
                {t('home.book_a_school_tour')}</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
