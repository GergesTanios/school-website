import { useTranslation } from 'react-i18next'
import { useEffect, useRef, type ReactNode } from 'react'

import {
  BookOpen,
  Compass,
  Cross,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Palette,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from 'lucide-react'

import school1 from '../assets/school-1.jpg'
import school2 from '../assets/school-2.jpg'
import school3 from '../assets/school-3.jpg'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('about-reveal--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`about-reveal ${className}`}>{children}</div>
}

function About() {
  const { t } = useTranslation()

  const milestones = [
    { year: '1957', title: t('about.foundation_of_lyce_stelie'), note: t('about.the_beginning_of_a_community_shaped_by') },
    { year: '1975', title: t('about.expansion_of_the_school_community'), note: t('about.welcoming_more_families_and_strengthening_the_schools') },
    { year: '1995', title: t('about.new_academic_programs'), note: t('about.broadening_opportunities_and_pathways_for_a_new') },
    { year: '2010', title: t('about.modern_learning_spaces'), note: t('about.renewing_classrooms_and_resources_for_a_changing') },
    { year: t('about.today'), title: t('about.the_journey_continues'), note: t('about.building_on_our_heritage_while_advancing_excellence') },
  ]
  const values = [
    { icon: Cross, title: t('about.faith'), text: t('about.growing_with_a_strong_moral_and_spiritual') },
    { icon: Trophy, title: t('about.excellence'), text: t('about.encouraging_every_student_to_reach_their_highest') },
    { icon: HeartHandshake, title: t('about.respect'), text: t('about.building_relationships_based_on_dignity_and_understanding') },
    { icon: ShieldCheck, title: t('about.responsibility'), text: t('about.helping_students_become_accountable_and_independent') },
    { icon: Users, title: t('about.community'), text: t('about.creating_a_school_where_everyone_feels_they') },
    { icon: HandHeart, title: t('about.service'), text: t('about.learning_to_use_our_talents_for_the') },
  ]
  const differences = [
    { icon: BookOpen, text: t('about.strong_academic_foundation') },
    { icon: Cross, text: t('about.faith_and_character_formation') },
    { icon: Users, text: t('about.close_studentteacher_relationships') },
    { icon: Palette, text: t('about.arts_and_creativity') },
    { icon: Trophy, text: t('about.sports_and_student_activities') },
    { icon: HandHeart, text: t('about.community_engagement') },
    { icon: Lightbulb, text: t('about.futureready_learning') },
  ]
  const stats = [
    { value: 1200, suffix: '+', label: t('about.students') },
    { value: 90, suffix: '+', label: t('about.educators') },
    { value: 60, suffix: '+', label: t('about.years_of_education') },
    { value: 5000, suffix: '+', label: t('about.alumni') },
  ]
  const leaders = [
    { name: t('about.father_dr_eid_bou_rached'), role: t('about.principal'), image: school3, note: t('about.guiding_the_schools_mission_culture_and_longterm') },
    { name: t('about.vice_principal_name'), role: t('about.vice_principal'), image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80', note: t('about.supporting_students_teachers_and_the_rhythm_of') },
    { name: t('about.coordinator_name'), role: t('about.academic_coordinator'), image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80', note: t('about.advancing_teaching_quality_and_meaningful_learning_experiences') },
    { name: t('about.coordinator_name'), role: t('about.student_life_coordinator'), image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80', note: t('about.helping_every_student_participate_connect_and_belong') },
  ]
  const gallery = [
    { image: school1, label: t('about.campus'), className: 'md:col-span-2 md:row-span-2' },
    { image: school2, label: t('about.learning_spaces'), className: '' },
    { image: school3, label: t('about.student_life'), className: '' },
    { image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80', label: t('about.classrooms'), className: '' },
    { image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80', label: t('about.laboratories'), className: '' },
  ]

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="overflow-hidden bg-school-cream text-slate-900">
        <section className="relative isolate min-h-[78vh] overflow-hidden bg-gradient-to-br from-white via-school-cream to-amber-50 px-6 pb-24 pt-40 lg:px-8">
          <div className="absolute -right-32 top-10 -z-10 h-[32rem] w-[32rem] rounded-full border-[1px] border-school-gold/25" />
          <div className="absolute -right-12 top-32 -z-10 h-72 w-72 rounded-full border-[42px] border-school-burgundy/5" />
          <div className="absolute bottom-16 left-0 -z-10 h-px w-1/3 bg-gradient-to-r from-school-burgundy/50 to-transparent" />
          <div className="mx-auto flex min-h-[55vh] max-w-7xl items-center">
            <Reveal className="max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-school-burgundy">{t('about.about_lyce_stelie')}</p>
              <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] text-school-navy md:text-7xl lg:text-[6.5rem]">
                {t('about.our_story')}<span className="block text-school-burgundy">{t('about.our_mission')}</span><span className="block text-school-navy">{t('about.our_future')}</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                {t('about.for_generations_lyce_stelie_has_been_a')}</p>
            </Reveal>
          </div>
        </section>

        <section id="principal" className="bg-white py-24 md:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -bottom-7 -left-7 h-44 w-44 rounded-full border-[24px] border-school-gold/15" />
              <img src={school3} alt={t('about.placeholder_portrait_of_the_school_principal')} className="relative h-[560px] w-full rounded-[10rem_10rem_2rem_2rem] object-cover shadow-2xl" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.leadership_purpose')}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-school-navy md:text-5xl">{t('about.a_message_from_our_principal')}</h2>
              <div className="mt-8 border-s-4 border-school-gold ps-7 text-lg leading-8 text-slate-700 md:text-xl">
                <p>{t('about.at_lyce_stelie_education_is_more_than')}</p>
                <p className="mt-5">{t('about.our_mission_is_to_provide_an_environment')}</p>
              </div>
              <div className="mt-8">
                <p className="text-lg font-black text-school-navy">{t('about.father_dr_eid_bou_rached')}</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-school-burgundy">{t('about.principal_lyce_stelie')}</p>
              </div>
            </div>
          </Reveal>
       
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.our_heritage')}</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">{t('about.our_story')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{t('about.for_decades_lyce_stelie_has_served_generations')}</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">{t('about.timeline_dates_are_placeholders_pending_confirmation_of')}</p>
            </Reveal>
            <div className="relative mt-16 grid gap-8 md:grid-cols-5 md:gap-4">
              <div className="absolute start-4 top-0 hidden h-full w-px bg-school-navy/15 md:start-0 md:top-7 md:block md:h-px md:w-full" />
              {milestones.map((item, index) => (
                <Reveal key={index} className="relative border-s-2 border-school-gold ps-7 md:border-0 md:ps-0 md:pt-12" >
                  <span className="absolute -start-[7px] top-1 h-3 w-3 rounded-full bg-school-burgundy ring-4 ring-school-cream md:start-0 md:top-[22px]" />
                  <p className="text-xl font-black text-school-burgundy">{item.year}</p>
                  <h3 className="mt-2 font-bold text-school-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  <span className="sr-only">{t('about.milestone')}{index + 1}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="rounded-[2rem] bg-school-navy p-9 text-white shadow-xl md:p-14">
              <Target className="text-school-gold" size={34} />
              <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-school-gold">{t('about.our_mission')}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{t('about.education_for_the_whole_person')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">{t('about.to_provide_a_holistic_education_that_combines')}</p>
            </Reveal>
            <Reveal className="rounded-[2rem] border border-school-burgundy/15 bg-rose-50 p-9 shadow-xl md:p-14">
              <Compass className="text-school-burgundy" size={34} />
              <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.our_vision')}</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-school-navy md:text-4xl">{t('about.prepared_to_shape_the_future')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{t('about.to_prepare_confident_compassionate_and_capable_young')}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.our_foundation')}</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">{t('about.the_values_that_guide_us')}</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={index} className="group rounded-2xl border border-school-navy/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-school-gold/60 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-school-navy/10 text-school-navy transition group-hover:bg-school-burgundy group-hover:text-white"><Icon size={24} /></div>
                  <h3 className="mt-5 text-xl font-black text-school-navy">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.the_stelie_experience')}</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-school-navy md:text-5xl">{t('about.what_makes_stelie_different')}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-700">{t('about.a_learning_experience_shaped_by_high_expectations')}</p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {differences.map(({ icon: Icon, text }, index) => <div key={index} className="flex items-center gap-3 border-b border-slate-200 pb-4 font-bold text-slate-800"><Icon size={20} className="shrink-0 text-school-burgundy" />{text}</div>)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={school2} alt={t('about.students_at_lyce_stelie')} className="h-80 w-full rounded-[2rem] object-cover" />
                <img src={school3} alt={t('about.school_life_at_lyce_stelie')} className="mt-14 h-80 w-full rounded-[2rem] object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-school-navy-dark py-20 text-white md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy-dark via-school-navy to-school-navy-dark opacity-80" />
          <Reveal className="relative mx-auto grid max-w-7xl grid-cols-2 gap-9 px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((stat, index) => <div key={index} className="text-center"><p className="text-4xl font-black md:text-6xl"><Counter end={stat.value} suffix={stat.suffix} /></p><div className="mx-auto mt-4 h-1 w-10 rounded-full bg-school-gold" /><p className="mt-4 font-semibold text-slate-200">{stat.label}</p></div>)}
          </Reveal>
          <p className="relative mx-auto mt-8 max-w-3xl px-6 text-center text-sm text-slate-200">{t('common.statisticsNote')}</p>
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.people_purpose')}</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">{t('about.our_leadership')}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{t('about.meet_the_people_who_guide_the_vision')}</p>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((leader, index) => <Reveal key={index} className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><img src={leader.image} alt={t("about.leader_portrait", { role: leader.role })} className="h-72 w-full object-cover object-top" /><div className="p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-school-burgundy">{leader.role}</p><h3 className="mt-2 text-xl font-black text-school-navy">{leader.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{leader.note}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div><p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('about.our_campus')}</p><h2 className="mt-4 text-4xl font-black leading-tight text-school-navy md:text-5xl">{t('about.a_place_to_learn_grow_and_belong')}</h2></div>
              <p className="text-lg leading-8 text-slate-700">{t('about.our_campus_is_designed_to_give_students')}</p>
            </Reveal>
            <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
              {gallery.map((item, index) => <Reveal key={index} className={`group relative overflow-hidden rounded-2xl ${item.className}`}><img src={item.image} alt={t("about.gallery_alt", { label: item.label })} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-school-navy-dark/80 via-transparent to-transparent" /><p className="absolute bottom-5 start-5 font-bold text-white">{item.label}</p></Reveal>)}
            </div>
          </div>
        </section>

        {/* <section className="bg-school-burgundy px-6 py-20 text-white md:py-24">
          <Reveal className="mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto text-school-gold" size={34} />
            <h2 className="mt-5 text-4xl font-black md:text-6xl">Come Experience Lycée St-Elie</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">Discover our community, meet our team and see what makes our school special.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-school-burgundy transition hover:bg-school-cream">Visit Our School <ArrowRight className="rtl:rotate-180" size={18} /></Link>
              <Link to="/#admissions" className="rounded-xl bg-school-gold px-6 py-3.5 font-bold text-school-navy-dark transition hover:bg-amber-300">Admissions</Link>
              <Link to="/#contact" className="rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">Contact Us</Link>
            </div>
          </Reveal>
        </section> */}
      </main>
      <Footer />
    </>
  )
}

export default About
