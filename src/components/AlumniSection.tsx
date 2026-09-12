import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Globe2,
  HeartHandshake,
  Search,
  UserRoundPen,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function AlumniSection() {
  const { t } = useTranslation()

  const alumniFeatures = [
    {
      icon: UserRoundPen,
      title: t('home.alumni.update_your_profile'),
      description:
        t('home.alumni.keep_your_contact_location_education_and_professional'),
    },
    {
      icon: Search,
      title: t('home.alumni.find_your_community'),
      description:
        t('home.alumni.reconnect_with_classmates_and_discover_alumni_by'),
    },
    {
      icon: CalendarDays,
      title: t('home.alumni.reunions_events'),
      description:
        t('home.alumni.stay_informed_about_alumni_gatherings_reunions_networking'),
    },
    {
      icon: HeartHandshake,
      title: t('home.alumni.become_a_mentor'),
      description:
        t('home.alumni.support_current_students_through_career_advice_university'),
    },
    {
      icon: Briefcase,
      title: t('home.alumni.career_opportunities'),
      description:
        t('home.alumni.share_internships_job_opportunities_company_visits_and'),
    },
    {
      icon: Globe2,
      title: t('home.alumni.global_alumni_network'),
      description:
        t('home.alumni.stay_connected_with_lyce_saintelie_graduates_living'),
    },
  ]

  return (
    <section
  id="alumni"
  className="bg-school-navy-dark py-24 text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-school-gold">
              {t('home.alumni.lyce_saintelie_alumni')}</p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              {t('home.alumni.once_a_student')}<span className="block text-school-gold">
                {t('home.alumni.always_part_of_our_community')}</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {t('home.alumni.graduation_is_not_the_end_of_the')}</p>

            <div className="mt-8 flex flex-wrap gap-4">
           <Link
  to="/alumni"
  className="inline-flex items-center gap-2 rounded-xl bg-school-burgundy px-6 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark"
>
  {t('home.alumni.join_the_alumni_network')}<ArrowRight className="rtl:rotate-180" size={18} />
</Link>

              <Link to="/alumni#join" className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                {t('home.alumni.update_my_details')}</Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
              alt={t('home.alumni.alumni_community')}
              className="h-[470px] w-full rounded-3xl object-cover"
            />

            <div className="absolute -bottom-7 left-6 right-6 grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="p-5 text-center">
                <p className="text-2xl font-black text-slate-800">3,500+</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {t('home.alumni.alumni')}</p>
              </div>

              {/* <div className="border-x border-slate-200 p-5 text-center">
                <p className="text-2xl font-black text-slate-800">42</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Countries
                </p>
              </div> */}

              <div className="p-5 text-center">
                <p className="text-2xl font-black text-slate-800">25+</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {t('home.alumni.years')}</p>
              </div>
            </div>
          </div>
        </div>

<p className="mt-14 text-sm text-slate-300">{t('common.statisticsNote')}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {alumniFeatures.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-school-burgundy text-white">
                  <Icon size={23} />
                </div>

                <h3 className="text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-school-burgundy px-8 py-10 text-white md:px-12">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 font-bold">
                <Users size={21} />
                {t('home.alumni.alumni_database_initiative')}</div>

              <h3 className="text-3xl font-black">
                {t('home.alumni.help_us_reconnect_with_your_classmates')}</h3>

              <p className="mt-3 max-w-2xl leading-7 text-rose-50">
                {t('home.alumni.if_you_graduated_from_lyce_saintelie_update')}</p>
            </div>

            <Link to="/alumni#join" className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:bg-school-cream">
              {t('home.alumni.update_alumni_profile')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniSection