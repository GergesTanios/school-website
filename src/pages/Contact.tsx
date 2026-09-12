import { useTranslation } from 'react-i18next'
import { cloneElement, useId, useState, type FormEvent, type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
} from 'lucide-react'


import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MAPS_URL = 'https://maps.app.goo.gl/KE4UC7VhLAFRNuzG9?g_st=ic'

// Replace these placeholders when the school's official contact details are confirmed.

type FormValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialForm: FormValues = { name: '', email: '', phone: '', subject: '', message: '' }

function Contact() {
  const { t } = useTranslation()

  const CONTACT_DETAILS = {
    school: t('school.name'),
    location: t('school.location'),
    phone: '+961 XX XXX XXX',
    phoneHref: 'tel:+961XXXXXXXX',
    email: 'info@lyceestelie.edu.lb',
    admissionsEmail: 'admissions@lyceestelie.edu.lb',
    hours: t('contact.monday_friday_800_am_300_pm'),
  }
  const contactCards = [
    { icon: MapPin, eyebrow: t('contact.visit_us'), title: CONTACT_DETAILS.location, detail: CONTACT_DETAILS.school, href: MAPS_URL, external: true },
    { icon: Phone, eyebrow: t('contact.call_us'), title: CONTACT_DETAILS.phone, detail: t('contact.main_school_line_placeholder'), href: CONTACT_DETAILS.phoneHref },
    { icon: Mail, eyebrow: t('contact.email_us'), title: CONTACT_DETAILS.email, detail: CONTACT_DETAILS.admissionsEmail, href: `mailto:${CONTACT_DETAILS.email}` },
    { icon: Clock3, eyebrow: t('contact.working_hours'), title: CONTACT_DETAILS.hours, detail: t('contact.office_hours_placeholder') },
  ]
const subjects = ["contact.general_inquiry", "contact.admissions", "contact.academic_information", "contact.student_life", "contact.alumni", "contact.technical_support", "contact.other"]

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [success, setSuccess] = useState(false)

  const update = (field: keyof FormValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSuccess(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}

    if (!form.name.trim()) nextErrors.name = 'validation.name'
    if (!form.email.trim()) nextErrors.email = 'validation.emailRequired'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'validation.emailInvalid'
    if (!form.subject) nextErrors.subject = 'validation.subject'
    if (!form.message.trim()) nextErrors.message = 'validation.message'

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      const formElement = event.currentTarget
      requestAnimationFrame(() => formElement.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus())
      setSuccess(false)
      return
    }

    // TODO: connect a delivery service or Supabase function. Only claim delivery after server confirmation.
    setSuccess(true)
    setErrors({})
  }

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="overflow-hidden bg-school-cream text-slate-900">
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-school-navy-dark via-school-navy to-[#0b4d86] px-6 pb-24 pt-40 text-white lg:px-8">
          <div className="absolute -right-32 top-4 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10" />
<img
  src="/images/logo.png"
  alt=""
  className="absolute -right-16 top-8 -z-10 h-130 w-130 object-contain opacity-50"
/>
  <div className="absolute bottom-0 left-0 -z-10 h-28 w-full bg-gradient-to-r from-school-burgundy/30 via-transparent to-school-gold/10 [clip-path:polygon(0_68%,100%_0,100%_100%,0_100%)]" />
          <div className="mx-auto max-w-7xl py-16 md:py-24">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-school-gold">{t('contact.contact_lyce_stelie')}</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.045em] md:text-7xl lg:text-[6.2rem]">{t('contact.lets_stay_connected')}</h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">{t('contact.whether_you_are_a_parent_student_alumnus')}</p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {contactCards.map(({ icon: Icon, eyebrow, title, detail, href, external }, index) => {
                const content = <><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-school-navy/10 text-school-navy"><Icon size={23} /></div><p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-school-burgundy">{eyebrow}</p><h2 dir="auto" className="mt-2 whitespace-pre-line break-words text-lg font-black text-school-navy">{title}</h2><p className="mt-2 break-words text-sm leading-6 text-slate-600">{detail}</p></>
                return href ? <a key={index} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-school-gold hover:shadow-lg">{content}</a> : <article key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{content}</article>
              })}
            </div>
          </div>
        </section>

        <section className="bg-school-cream py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('contact.our_location')}</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">{t('contact.find_us')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{t('contact.lyce_stelie_is_located_in_darbessim_saida')}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-school-burgundy px-6 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark"><ExternalLink size={18} />{t('contact.open_in_google_maps')}</a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-school-navy/20 bg-white px-6 py-3.5 font-bold text-school-navy transition hover:bg-school-navy hover:text-white"><Navigation size={18} />{t('contact.get_directions')}</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-school-navy/10 bg-white shadow-xl">
              <iframe title={t('contact.map_showing_lyce_stelie_in_darbessim_saida')} src="https://www.google.com/maps?q=Lyc%C3%A9e%20St-Elie%20Darbessim%20Saida%20Lebanon&output=embed" className="h-[360px] w-full border-0 md:h-[480px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">{t('contact.send_a_message')}</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-school-navy md:text-5xl">{t('contact.how_can_we_help')}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">{t('contact.share_your_question_with_us_this_demonstration')}</p>
              <div className="mt-9 rounded-2xl bg-school-navy p-7 text-white"><Mail className="text-school-gold" /><p className="mt-5 font-bold">{t('contact.prefer_email')}</p><a href={`mailto:${CONTACT_DETAILS.email}`} className="mt-1 block break-all text-slate-200 underline decoration-school-gold/60 underline-offset-4">{CONTACT_DETAILS.email}</a></div>
            </div>

            <form id="message" onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label={t('contact.full_name')} error={errors.name} required><input value={form.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" className="contact-input" aria-invalid={Boolean(errors.name)} /></Field>
                <Field label={t('contact.email_address')} error={errors.email} required><input dir="ltr" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" className="contact-input" aria-invalid={Boolean(errors.email)} /></Field>
                <Field label={t('contact.phone_number')}><input dir="ltr" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} autoComplete="tel" placeholder={t('contact.optional')} className="contact-input" /></Field>
                <Field label={t('contact.subject')} error={errors.subject} required><select value={form.subject} onChange={(e) => update('subject', e.target.value)} className="contact-input" aria-invalid={Boolean(errors.subject)}><option value="">{t('contact.select_a_subject')}</option>{subjects.map((subject) => <option key={subject} value={subject}>{t(subject)}</option>)}</select></Field>
                <Field label={t('contact.message')} error={errors.message} required className="md:col-span-2"><textarea rows={6} value={form.message} onChange={(e) => update('message', e.target.value)} className="contact-input resize-none" aria-invalid={Boolean(errors.message)} /></Field>
              </div>
              {success && <div role="status" className="mt-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800"><CheckCircle2 className="mt-0.5 shrink-0" size={22} /><div><p className="font-bold">{t('contact.demoTitle')}</p><p className="mt-1 text-sm leading-6">{t('contact.demoText')}</p></div></div>}
              <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-school-burgundy px-7 py-4 font-bold text-white transition hover:bg-school-burgundy-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-school-burgundy sm:w-auto">{t('contact.send_message')}<Send size={18} /></button>
            </form>
          </div>
        </section>

        {/* <section className="bg-school-navy-dark py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-2xl font-black">Need immediate assistance?</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={CONTACT_DETAILS.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-bold hover:bg-white/20"><Phone size={18} />Call Us</a>
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-bold hover:bg-white/20"><Mail size={18} />Email Us</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-school-gold px-5 py-3 font-bold text-school-navy-dark hover:bg-amber-300"><MapPin size={18} />Visit the School</a>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-school-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Departments</p><h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">Contact the Right Team</h2></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {departments.map((department) => <article key={department.title} className="rounded-2xl border border-school-navy/10 bg-white p-6"><h3 className="text-xl font-black text-school-navy">{department.title}</h3><p className="mt-3 min-h-18 text-sm leading-6 text-slate-600">{department.description}</p><a href={`mailto:${department.email}`} className="mt-5 inline-flex break-all font-bold text-school-burgundy hover:text-school-burgundy-dark">{department.email}</a></article>)}
            </div>
            <p className="mt-5 text-center text-sm text-slate-500">Department email addresses are placeholders and should be confirmed before publication.</p>
          </div>
        </section> */}

        <section className="bg-school-burgundy px-6 py-20 text-white md:py-24">
          <div className="mx-auto max-w-5xl text-center"><h2 className="text-4xl font-black md:text-6xl">{t('contact.we_look_forward_to_welcoming_you')}</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">{t('contact.visit_lyce_stelie_and_discover_our_community')}</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-school-burgundy hover:bg-school-cream">{t('contact.plan_a_visit')}<ArrowRight className="rtl:rotate-180" size={18} /></a><Link to="/admissions" className="rounded-xl bg-school-gold px-6 py-3.5 font-bold text-school-navy-dark hover:bg-amber-300">{t('contact.admissions')}</Link></div></div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({ label, error, required, className = '', children }: { label: string; error?: string; required?: boolean; className?: string; children: ReactElement<{ id?: string; required?: boolean; 'aria-describedby'?: string; 'aria-labelledby'?: string }> }) {
  const { t } = useTranslation()
  const id = useId()
  return <label htmlFor={id} className={`block ${className}`}><span id={`${id}-label`} className="mb-2 block text-sm font-bold text-slate-700">{label}{required && <span className="ms-1 text-school-burgundy" aria-hidden="true">*</span>}</span>{cloneElement(children, { id, required, 'aria-labelledby': `${id}-label`, 'aria-describedby': error ? `${id}-error` : undefined })}{error && <span id={`${id}-error`} role="alert" className="mt-2 block text-sm font-semibold text-red-700">{t(error)}</span>}</label>
}

export default Contact
