import { useTranslation } from 'react-i18next'
import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'


import {
  Briefcase,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Loader2,
  Mail,
  MapPin,
  Users,
} from 'lucide-react'


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { supabase } from '../lib/supabase'

type AlumniFormData = {
  firstName: string
  lastName: string
  graduationYear: string

  email: string
  phone: string
  preferredContact: string

  country: string
  city: string

  university: string
  degree: string

  profession: string
  jobTitle: string
  company: string
  linkedinUrl: string

  mentorship: boolean
  events: boolean
  volunteering: boolean
  careers: boolean
  newsletter: boolean

  notes: string
}

const initialFormData: AlumniFormData = {
  firstName: '',
  lastName: '',
  graduationYear: '',

  email: '',
  phone: '',
  preferredContact: 'Email',

  country: '',
  city: '',

  university: '',
  degree: '',

  profession: '',
  jobTitle: '',
  company: '',
  linkedinUrl: '',

  mentorship: false,
  events: true,
  volunteering: false,
  careers: false,
  newsletter: true,

  notes: '',
}

function Alumni() {
  const { t } = useTranslation()

  const [formData, setFormData] =
    useState<AlumniFormData>(initialFormData)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const errorRef = useRef<HTMLDivElement>(null)
  useEffect(() => { if (error) errorRef.current?.focus() }, [error])

  const updateField = (
    field: keyof AlumniFormData,
    value: string | boolean,
  ) => {
    setError('')
    setSuccess(false)
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError('')

    const graduationYear = Number(formData.graduationYear)
    const currentYear = new Date().getFullYear()

    if (
      !Number.isInteger(graduationYear) ||
      graduationYear < 1950 ||
      graduationYear > currentYear
    ) {
      setError('validation.year')
      setLoading(false)
      return
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('validation.names')
      setLoading(false)
      return
    }

    if (!formData.email.trim()) {
      setError('validation.emailRequired')
      setLoading(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('validation.emailInvalid')
      setLoading(false)
      return
    }
    if (formData.linkedinUrl) {
      try {
        const url = new URL(formData.linkedinUrl)
        if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Invalid protocol')
      } catch {
        setError('validation.url')
        setLoading(false)
        return
      }
    }

    if (!supabase) {
      setError('validation.unavailable')
      setLoading(false)
      return
    }

    try {
      const { error: insertError } = await supabase
        .from('alumni')
        .insert({
          first_name: formData.firstName.trim(),
          last_name: formData.lastName.trim(),

          graduation_year: graduationYear,

          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim() || null,
          preferred_contact: formData.preferredContact,

          country: formData.country.trim() || null,
          city: formData.city.trim() || null,

          university: formData.university.trim() || null,
          degree: formData.degree.trim() || null,

          profession: formData.profession.trim() || null,
          job_title: formData.jobTitle.trim() || null,
          company: formData.company.trim() || null,

          linkedin_url: formData.linkedinUrl.trim() || null,

          interested_mentorship: formData.mentorship,
          interested_events: formData.events,
          interested_volunteering: formData.volunteering,
          interested_careers: formData.careers,

          newsletter: formData.newsletter,

          notes: formData.notes.trim() || null,
        })

      if (insertError) {
        setError('validation.save')
        setLoading(false)
        return
      }

    } catch {
      setError('validation.save')
      setLoading(false)
      return
    }
    setSuccess(true)
    setFormData(initialFormData)
    setLoading(false)

   
  }

  return (
    <>
<Navbar />

      <main id="main-content" tabIndex={-1} className="bg-school-cream">

        {/* =========================
            HERO
        ========================== */}

        {/* <section className="relative overflow-hidden bg-school-navy-dark px-6 pb-24 pt-40 text-white">

          <div className="absolute inset-0 bg-gradient-to-br from-school-navy-dark via-school-navy to-school-burgundy/50" />

          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-school-gold/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="rtl:rotate-180" size={17} />
              Back to Main Website
            </Link>

            <div className="max-w-4xl">

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-school-gold">
                Lycée Saint-Elie Alumni
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
                Once Saint-Elie,
                <span className="block text-school-gold">
                  Always Saint-Elie.
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                Graduation may mark the end of your school years, but it
                does not mark the end of your connection with Lycée
                Saint-Elie. Reconnect, share your journey, and stay part of
                our community.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#join"
                  className="inline-flex items-center gap-2 rounded-xl bg-school-burgundy px-7 py-4 font-bold text-white transition hover:bg-school-burgundy-dark"
                >
                  Join the Alumni Network
                  <Users size={19} />
                </a>

                <a
                  href="#community"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Discover the Community
                </a>

              </div>

            </div>

          </div>

        </section> */}

        {/* =========================
            WHY JOIN
        ========================== */}

        <section
          id="community"
          className="bg-white py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-burgundy">
                {t('alumni.our_alumni_community')}</p>

              <h1 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">
                {t('alumni.stay_connected_beyond_graduation')}</h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {t('alumni.we_want_to_reconnect_generations_of_lyce')}</p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <FeatureCard
                icon={<Users size={28} />}
                title={t('alumni.reconnect')}
                description={t('alumni.reconnect_with_classmates_and_former_school_friends')}
              />

              <FeatureCard
                icon={<CalendarDays size={28} />}
                title={t('alumni.events_reunions')}
                description={t('alumni.receive_updates_about_reunions_gatherings_and_alumni')}
              />

              <FeatureCard
                icon={<HeartHandshake size={28} />}
                title={t('alumni.mentorship')}
                description={t('alumni.support_current_students_by_sharing_your_knowledge')}
              />

              <FeatureCard
                icon={<Briefcase size={28} />}
                title={t('alumni.career_network')}
                description={t('alumni.share_jobs_internships_and_professional_opportunities')}
              />

            </div>

          </div>
        </section>

        {/* =========================
            FORM INTRO
        ========================== */}

        <section
          id="join"
          className="bg-slate-100 py-24"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            <div className="mb-12 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-school-burgundy text-white shadow-lg">
                <GraduationCap size={31} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-school-burgundy">
                {t('alumni.alumni_registration')}</p>

              <h2 className="mt-3 text-4xl font-black text-school-navy md:text-5xl">
                {t('alumni.join_the_alumni_network')}</h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {t('alumni.help_us_rebuild_and_strengthen_the_lyce')}</p>

            </div>

            {/* =========================
                FORM
            ========================== */}

            <form
              aria-busy={loading}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-7 shadow-xl md:p-12"
            >

              {/* PERSONAL INFO */}

              <FormSectionTitle
                icon={<Users size={21} />}
                title={t('alumni.personal_information')}
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label={t('alumni.first_name')}
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={(value) =>
                    updateField('firstName', value)
                  }
                />

                <FormInput
                  label={t('alumni.last_name')}
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={(value) =>
                    updateField('lastName', value)
                  }
                />

                <FormInput
                  label={t('alumni.graduation_year')}
                  required
                  type="number"
                  min="1950"
                  max={String(new Date().getFullYear())}
                  placeholder={t('alumni.example_2012')}
                  value={formData.graduationYear}
                  onChange={(value) =>
                    updateField('graduationYear', value)
                  }
                />

              </div>

              {/* CONTACT */}

              <FormSectionTitle
                icon={<Mail size={21} />}
                title={t('alumni.contact_information')}
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label={t('alumni.email_address')}
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(value) =>
                    updateField('email', value)
                  }
                />

                <FormInput
                  label={t('alumni.phone_number')}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+961 ..."
                  value={formData.phone}
                  onChange={(value) =>
                    updateField('phone', value)
                  }
                />

                <div>
                  <label htmlFor="preferred-contact" className="mb-2 block text-sm font-semibold text-slate-700">
                    {t('alumni.preferred_contact_method')}</label>

                  <select
                    id="preferred-contact"
                    value={formData.preferredContact}
                    onChange={(event) =>
                      updateField(
                        'preferredContact',
                        event.target.value,
                      )
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-school-navy focus:ring-2 focus:ring-school-navy/10"
                  >
                    <option value="Email">
                      {t('alumni.email')}</option>

                    <option value="Phone">
                      {t('alumni.phone')}</option>

                    <option value="WhatsApp">
                      {t('alumni.whatsapp')}</option>
                  </select>
                </div>

              </div>

              {/* LOCATION */}

              <FormSectionTitle
                icon={<MapPin size={21} />}
                title={t('alumni.where_are_you_now')}
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label={t('alumni.current_country')}
                  autoComplete="country-name"
                  placeholder={t('alumni.example_lebanon')}
                  value={formData.country}
                  onChange={(value) =>
                    updateField('country', value)
                  }
                />

                <FormInput
                  label={t('alumni.current_city')}
                  autoComplete="address-level2"
                  placeholder={t('alumni.example_saida')}
                  value={formData.city}
                  onChange={(value) =>
                    updateField('city', value)
                  }
                />

              </div>

              {/* EDUCATION */}

              <FormSectionTitle
                icon={<GraduationCap size={21} />}
                title={t('alumni.education_after_saintelie')}
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label={t('alumni.university_institution')}
                  placeholder={t('alumni.example_notre_dame_university')}
                  value={formData.university}
                  onChange={(value) =>
                    updateField('university', value)
                  }
                />

                <FormInput
                  label={t('alumni.degree_field_of_study')}
                  placeholder={t('alumni.example_computer_engineering')}
                  value={formData.degree}
                  onChange={(value) =>
                    updateField('degree', value)
                  }
                />

              </div>

              {/* PROFESSIONAL */}

              <FormSectionTitle
                icon={<Briefcase size={21} />}
                title={t('alumni.professional_information')}
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label={t('alumni.profession_industry')}
                  placeholder={t('alumni.example_engineering')}
                  value={formData.profession}
                  onChange={(value) =>
                    updateField('profession', value)
                  }
                />

                <FormInput
                  label={t('alumni.current_job_title')}
                  placeholder={t('alumni.example_software_engineer')}
                  value={formData.jobTitle}
                  onChange={(value) =>
                    updateField('jobTitle', value)
                  }
                />

                <FormInput
                  label={t('alumni.company_organization')}
                  placeholder={t('alumni.company_name')}
                  value={formData.company}
                  onChange={(value) =>
                    updateField('company', value)
                  }
                />

                <FormInput
                  label={t('alumni.linkedin_profile')}
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={formData.linkedinUrl}
                  onChange={(value) =>
                    updateField('linkedinUrl', value)
                  }
                />

              </div>

              {/* INTERESTS */}

              <FormSectionTitle
                icon={<HeartHandshake size={21} />}
                title={t('alumni.stay_involved')}
              />

              <p className="mt-5 text-sm leading-6 text-slate-500">
                {t('alumni.select_any_activities_you_would_be_interested')}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">

                <CheckOption
                  label={t('alumni.receive_alumni_news_and_newsletters')}
                  checked={formData.newsletter}
                  onChange={(checked) =>
                    updateField('newsletter', checked)
                  }
                />

                <CheckOption
                  label={t('alumni.attend_reunions_and_alumni_events')}
                  checked={formData.events}
                  onChange={(checked) =>
                    updateField('events', checked)
                  }
                />

                <CheckOption
                  label={t('alumni.mentor_current_lyce_saintelie_students')}
                  checked={formData.mentorship}
                  onChange={(checked) =>
                    updateField('mentorship', checked)
                  }
                />

                <CheckOption
                  label={t('alumni.share_jobs_or_internship_opportunities')}
                  checked={formData.careers}
                  onChange={(checked) =>
                    updateField('careers', checked)
                  }
                />

                <CheckOption
                  label={t('alumni.volunteer_for_school_or_alumni_initiatives')}
                  checked={formData.volunteering}
                  onChange={(checked) =>
                    updateField('volunteering', checked)
                  }
                />

              </div>

              {/* NOTES */}

              <div className="mt-10">

                <label htmlFor="alumni-notes" className="mb-2 block text-sm font-semibold text-slate-700">
                  {t('alumni.tell_us_about_your_journey')}</label>

                <textarea
                  id="alumni-notes"
                  rows={5}
                  value={formData.notes}
                  onChange={(event) =>
                    updateField(
                      'notes',
                      event.target.value,
                    )
                  }
                  placeholder={t('alumni.share_anything_you_would_like_us_to')}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-school-navy focus:ring-2 focus:ring-school-navy/10"
                />

              </div>

              {/* PRIVACY */}

              <div className="mt-8 rounded-2xl border border-school-navy/10 bg-school-cream p-5">

                <div className="flex items-start gap-3">

                  <div className="mt-0.5 text-school-burgundy">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-school-navy">
                      {t('alumni.your_privacy_matters')}</p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {t('alumni.your_contact_information_will_be_used_only')}</p>
                  </div>

                </div>

              </div>

              {/* ERROR */}

              {error && (
                <div ref={errorRef} tabIndex={-1} role="alert" className="mt-7 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                  {t(error)}
                </div>
              )}

              {/* SUCCESS */}

              {success && (
                <div role="status" className="mt-7 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-700">

                  <CheckCircle2
                    size={23}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      {t('alumni.welcome_to_the_alumni_network')}</p>

                    <p className="mt-1 text-sm">
                      {t('alumni.your_information_has_been_saved_successfully_thank')}</p>
                  </div>

                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-school-burgundy px-7 py-4 text-lg font-bold text-white transition hover:bg-school-burgundy-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={21}
                      className="animate-spin"
                    />

                    {t('alumni.saving_your_profile')}</>
                ) : (
                  <>
                    {t('alumni.join_the_alumni_network')}<GraduationCap size={21} />
                  </>
                )}
              </button>

            </form>

          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}

        <section className="bg-school-navy py-20 text-white">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-gold">
              {t('school.name')}</p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              {t('alumni.help_us_reconnect_our_community')}</h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t('alumni.know_a_former_classmate_who_has_lost')}</p>

            <a
              href="#join"
              className="mt-8 inline-flex rounded-xl bg-school-gold px-7 py-4 font-bold text-school-navy-dark transition hover:opacity-90"
            >
              {t('alumni.update_your_alumni_profile')}</a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

type FormInputProps = {
  label: string
  value: string
  type?: string
  placeholder?: string
  required?: boolean
  min?: string
  max?: string
  autoComplete?: string
  onChange: (value: string) => void
}

function FormInput({
  label,
  value,
  type = 'text',
  placeholder,
  required = false,
  min,
  max,
  autoComplete,
  onChange,
}: FormInputProps) {
  const id = useId()
  return (
    <div>

      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="ms-1 text-school-burgundy">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        type={type}
        dir={['email', 'tel', 'url', 'number'].includes(type) ? 'ltr' : undefined}
        value={value}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        autoComplete={autoComplete}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-school-navy focus:ring-2 focus:ring-school-navy/10"
      />

    </div>
  )
}

function FormSectionTitle({
  icon,
  title,
}: {
  icon: ReactNode
  title: string
}) {
  return (
    <div className="mt-12 flex items-center gap-3 border-b border-slate-200 pb-4 first:mt-0">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-school-navy/10 text-school-navy">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-school-navy">
        {title}
      </h3>

    </div>
  )
}

function CheckOption({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-school-navy/30 hover:bg-slate-50">

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
        className="mt-1 h-4 w-4 accent-[#8d1235]"
      />

      <span className="text-sm font-medium leading-6 text-slate-700">
        {label}
      </span>

    </label>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-school-burgundy/30 hover:shadow-xl">

      <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-school-navy/10 text-school-navy transition group-hover:bg-school-burgundy group-hover:text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-school-navy">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

    </article>
  )
}

export default Alumni