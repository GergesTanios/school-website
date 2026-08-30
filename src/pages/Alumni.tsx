import { useState } from 'react'
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
  const [formData, setFormData] =
    useState<AlumniFormData>(initialFormData)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const updateField = (
    field: keyof AlumniFormData,
    value: string | boolean,
  ) => {
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
      !graduationYear ||
      graduationYear < 1950 ||
      graduationYear > currentYear
    ) {
      setError('Please enter a valid graduation year.')
      setLoading(false)
      return
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter your first and last name.')
      setLoading(false)
      return
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address.')
      setLoading(false)
      return
    }

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
  console.error('SUPABASE ERROR:', insertError)

  setError(
    `Supabase error: ${insertError.message} | Code: ${insertError.code}`,
  )

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

      <main className="bg-school-cream">

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
              <ArrowLeft size={17} />
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
                Our Alumni Community
              </p>

              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">
                Stay Connected Beyond Graduation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We want to reconnect generations of Lycée Saint-Elie
                graduates and create a community where alumni can meet,
                contribute, mentor, and create opportunities.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <FeatureCard
                icon={<Users size={28} />}
                title="Reconnect"
                description="Reconnect with classmates and former school friends."
              />

              <FeatureCard
                icon={<CalendarDays size={28} />}
                title="Events & Reunions"
                description="Receive updates about reunions, gatherings and alumni activities."
              />

              <FeatureCard
                icon={<HeartHandshake size={28} />}
                title="Mentorship"
                description="Support current students by sharing your knowledge and experience."
              />

              <FeatureCard
                icon={<Briefcase size={28} />}
                title="Career Network"
                description="Share jobs, internships and professional opportunities."
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
                Alumni Registration
              </p>

              <h2 className="mt-3 text-4xl font-black text-school-navy md:text-5xl">
                Join the Alumni Network
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Help us rebuild and strengthen the Lycée Saint-Elie alumni
                community by telling us where life has taken you.
              </p>

            </div>

            {/* =========================
                FORM
            ========================== */}

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-7 shadow-xl md:p-12"
            >

              {/* PERSONAL INFO */}

              <FormSectionTitle
                icon={<Users size={21} />}
                title="Personal Information"
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label="First Name"
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={(value) =>
                    updateField('firstName', value)
                  }
                />

                <FormInput
                  label="Last Name"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={(value) =>
                    updateField('lastName', value)
                  }
                />

                <FormInput
                  label="Graduation Year"
                  required
                  type="number"
                  min="1950"
                  max={String(new Date().getFullYear())}
                  placeholder="Example: 2012"
                  value={formData.graduationYear}
                  onChange={(value) =>
                    updateField('graduationYear', value)
                  }
                />

              </div>

              {/* CONTACT */}

              <FormSectionTitle
                icon={<Mail size={21} />}
                title="Contact Information"
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label="Email Address"
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
                  label="Phone Number"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+961 ..."
                  value={formData.phone}
                  onChange={(value) =>
                    updateField('phone', value)
                  }
                />

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Preferred Contact Method
                  </label>

                  <select
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
                      Email
                    </option>

                    <option value="Phone">
                      Phone
                    </option>

                    <option value="WhatsApp">
                      WhatsApp
                    </option>
                  </select>
                </div>

              </div>

              {/* LOCATION */}

              <FormSectionTitle
                icon={<MapPin size={21} />}
                title="Where Are You Now?"
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label="Current Country"
                  autoComplete="country-name"
                  placeholder="Example: Lebanon"
                  value={formData.country}
                  onChange={(value) =>
                    updateField('country', value)
                  }
                />

                <FormInput
                  label="Current City"
                  autoComplete="address-level2"
                  placeholder="Example: Saida"
                  value={formData.city}
                  onChange={(value) =>
                    updateField('city', value)
                  }
                />

              </div>

              {/* EDUCATION */}

              <FormSectionTitle
                icon={<GraduationCap size={21} />}
                title="Education After Saint-Elie"
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label="University / Institution"
                  placeholder="Example: Notre Dame University"
                  value={formData.university}
                  onChange={(value) =>
                    updateField('university', value)
                  }
                />

                <FormInput
                  label="Degree / Field of Study"
                  placeholder="Example: Computer Engineering"
                  value={formData.degree}
                  onChange={(value) =>
                    updateField('degree', value)
                  }
                />

              </div>

              {/* PROFESSIONAL */}

              <FormSectionTitle
                icon={<Briefcase size={21} />}
                title="Professional Information"
              />

              <div className="mt-7 grid gap-6 md:grid-cols-2">

                <FormInput
                  label="Profession / Industry"
                  placeholder="Example: Engineering"
                  value={formData.profession}
                  onChange={(value) =>
                    updateField('profession', value)
                  }
                />

                <FormInput
                  label="Current Job Title"
                  placeholder="Example: Software Engineer"
                  value={formData.jobTitle}
                  onChange={(value) =>
                    updateField('jobTitle', value)
                  }
                />

                <FormInput
                  label="Company / Organization"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(value) =>
                    updateField('company', value)
                  }
                />

                <FormInput
                  label="LinkedIn Profile"
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
                title="Stay Involved"
              />

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Select any activities you would be interested in.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">

                <CheckOption
                  label="Receive alumni news and newsletters"
                  checked={formData.newsletter}
                  onChange={(checked) =>
                    updateField('newsletter', checked)
                  }
                />

                <CheckOption
                  label="Attend reunions and alumni events"
                  checked={formData.events}
                  onChange={(checked) =>
                    updateField('events', checked)
                  }
                />

                <CheckOption
                  label="Mentor current Lycée Saint-Elie students"
                  checked={formData.mentorship}
                  onChange={(checked) =>
                    updateField('mentorship', checked)
                  }
                />

                <CheckOption
                  label="Share jobs or internship opportunities"
                  checked={formData.careers}
                  onChange={(checked) =>
                    updateField('careers', checked)
                  }
                />

                <CheckOption
                  label="Volunteer for school or alumni initiatives"
                  checked={formData.volunteering}
                  onChange={(checked) =>
                    updateField('volunteering', checked)
                  }
                />

              </div>

              {/* NOTES */}

              <div className="mt-10">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Tell Us About Your Journey
                </label>

                <textarea
                  rows={5}
                  value={formData.notes}
                  onChange={(event) =>
                    updateField(
                      'notes',
                      event.target.value,
                    )
                  }
                  placeholder="Share anything you would like us to know about your journey after Lycée Saint-Elie..."
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
                      Your privacy matters
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Your contact information will be used only for Lycée
                      Saint-Elie alumni communication and community
                      activities. Private contact information will not be
                      displayed publicly without your permission.
                    </p>
                  </div>

                </div>

              </div>

              {/* ERROR */}

              {error && (
                <div className="mt-7 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              {/* SUCCESS */}

              {success && (
                <div className="mt-7 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-700">

                  <CheckCircle2
                    size={23}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      Welcome to the alumni network!
                    </p>

                    <p className="mt-1 text-sm">
                      Your information has been saved successfully. Thank
                      you for reconnecting with Lycée Saint-Elie.
                    </p>
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

                    Saving Your Profile...
                  </>
                ) : (
                  <>
                    Join the Alumni Network
                    <GraduationCap size={21} />
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
              Lycée Saint-Elie
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Help Us Reconnect Our Community.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Know a former classmate who has lost contact with the school?
              Share the alumni network with them and help us bring generations
              of Saint-Elie graduates together.
            </p>

            <a
              href="#join"
              className="mt-8 inline-flex rounded-xl bg-school-gold px-7 py-4 font-bold text-school-navy-dark transition hover:opacity-90"
            >
              Update Your Alumni Profile
            </a>

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
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-school-burgundy">
            *
          </span>
        )}
      </label>

      <input
        type={type}
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