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

const alumniFeatures = [
  {
    icon: UserRoundPen,
    title: 'Update Your Profile',
    description:
      'Keep your contact, location, education, and professional information up to date.',
  },
  {
    icon: Search,
    title: 'Find Your Community',
    description:
      'Reconnect with classmates and discover alumni by graduation year, country, or profession.',
  },
  {
    icon: CalendarDays,
    title: 'Reunions & Events',
    description:
      'Stay informed about alumni gatherings, reunions, networking evenings, and school events.',
  },
  {
    icon: HeartHandshake,
    title: 'Become a Mentor',
    description:
      'Support current students through career advice, university guidance, and mentoring.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description:
      'Share internships, job opportunities, company visits, and professional connections.',
  },
  {
    icon: Globe2,
    title: 'Global Alumni Network',
    description:
      'Stay connected with Lycée Saint-Elie  graduates living, studying, and working around the world.',
  },
]

function AlumniSection() {
  return (
    <section
  id="alumni"
  className="bg-school-navy-dark py-24 text-white"
>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-school-gold">
              Lycée Saint-Elie  Alumni
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Once a Student.
              <span className="block text-school-gold">
                Always Part of Our Community.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Graduation is not the end of the Lycée Saint-Elie  journey. Our alumni
              remain part of a lifelong community built around connection,
              opportunity, mentorship, and shared experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
           <Link
  to="/alumni"
  className="inline-flex items-center gap-2 rounded-xl bg-school-burgundy px-6 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark"
>
  Join the Alumni Network
  <ArrowRight size={18} />
</Link>

              <button className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Update My Details
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
              alt="Alumni community"
              className="h-[470px] w-full rounded-3xl object-cover"
            />

            <div className="absolute -bottom-7 left-6 right-6 grid grid-cols-3 overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="p-5 text-center">
                <p className="text-2xl font-black text-slate-800">3,500+</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Alumni
                </p>
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
                  Years
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {alumniFeatures.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
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
                Alumni Database Initiative
              </div>

              <h3 className="text-3xl font-black">
                Help us reconnect with your classmates.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-slate-800">
                If you graduated from Lycée Saint-Elie, update your information
                and help us rebuild a strong, active alumni network.
              </p>
            </div>

            <button className="shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:bg-slate-800">
              Update Alumni Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniSection