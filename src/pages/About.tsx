import { useEffect, useRef, type ReactNode } from 'react'

import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Compass,
  Cross,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Palette,
  ShieldCheck,
  Sparkles,
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

const milestones = [
  { year: '1957', title: 'Foundation of Lycée St-Elie', note: 'The beginning of a community shaped by learning, faith and service.' },
  { year: '1975', title: 'Expansion of the school community', note: 'Welcoming more families and strengthening the school’s role in the region.' },
  { year: '1995', title: 'New academic programs', note: 'Broadening opportunities and pathways for a new generation of learners.' },
  { year: '2010', title: 'Modern learning spaces', note: 'Renewing classrooms and resources for a changing educational landscape.' },
  { year: 'Today', title: 'The journey continues', note: 'Building on our heritage while advancing excellence and innovation.' },
]

const values = [
  { icon: Cross, title: 'Faith', text: 'Growing with a strong moral and spiritual foundation.' },
  { icon: Trophy, title: 'Excellence', text: 'Encouraging every student to reach their highest potential.' },
  { icon: HeartHandshake, title: 'Respect', text: 'Building relationships based on dignity and understanding.' },
  { icon: ShieldCheck, title: 'Responsibility', text: 'Helping students become accountable and independent.' },
  { icon: Users, title: 'Community', text: 'Creating a school where everyone feels they belong.' },
  { icon: HandHeart, title: 'Service', text: 'Learning to use our talents for the good of others.' },
]

const differences = [
  { icon: BookOpen, text: 'Strong academic foundation' },
  { icon: Cross, text: 'Faith and character formation' },
  { icon: Users, text: 'Close student-teacher relationships' },
  { icon: Palette, text: 'Arts and creativity' },
  { icon: Trophy, text: 'Sports and student activities' },
  { icon: HandHeart, text: 'Community engagement' },
  { icon: Lightbulb, text: 'Future-ready learning' },
]

const stats = [
  { value: 1200, suffix: '+', label: 'Students' },
  { value: 90, suffix: '+', label: 'Educators' },
  { value: 60, suffix: '+', label: 'Years of Education' },
  { value: 5000, suffix: '+', label: 'Alumni' },
]

const leaders = [
  { name: 'Father Dr. Eid Bou Rached', role: 'Principal', image: school3, note: 'Guiding the school’s mission, culture and long-term vision.' },
  { name: 'Vice Principal Name', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80', note: 'Supporting students, teachers and the rhythm of daily school life.' },
  { name: 'Coordinator Name', role: 'Academic Coordinator', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80', note: 'Advancing teaching quality and meaningful learning experiences.' },
  { name: 'Coordinator Name', role: 'Student Life Coordinator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80', note: 'Helping every student participate, connect and belong.' },
]

const gallery = [
  { image: school1, label: 'Campus', className: 'md:col-span-2 md:row-span-2' },
  { image: school2, label: 'Learning spaces', className: '' },
  { image: school3, label: 'Student life', className: '' },
  { image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80', label: 'Classrooms', className: '' },
  { image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80', label: 'Laboratories', className: '' },
]

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
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-school-cream text-slate-900">
        <section className="relative isolate min-h-[78vh] overflow-hidden bg-gradient-to-br from-white via-school-cream to-amber-50 px-6 pb-24 pt-40 lg:px-8">
          <div className="absolute -right-32 top-10 -z-10 h-[32rem] w-[32rem] rounded-full border-[1px] border-school-gold/25" />
          <div className="absolute -right-12 top-32 -z-10 h-72 w-72 rounded-full border-[42px] border-school-burgundy/5" />
          <div className="absolute bottom-16 left-0 -z-10 h-px w-1/3 bg-gradient-to-r from-school-burgundy/50 to-transparent" />
          <div className="mx-auto flex min-h-[55vh] max-w-7xl items-center">
            <Reveal className="max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-school-burgundy">About Lycée St-Elie</p>
              <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] text-school-navy md:text-7xl lg:text-[6.5rem]">
                Our Story.<span className="block text-school-burgundy">Our Mission.</span><span className="block text-school-navy">Our Future.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                For generations, Lycée St-Elie has been a place where knowledge, faith, character and community come together.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -bottom-7 -left-7 h-44 w-44 rounded-full border-[24px] border-school-gold/15" />
              <img src={school3} alt="Placeholder portrait of the school principal" className="relative h-[560px] w-full rounded-[10rem_10rem_2rem_2rem] object-cover shadow-2xl" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Leadership & Purpose</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-school-navy md:text-5xl">A Message from Our Principal</h2>
              <div className="mt-8 border-l-4 border-school-gold pl-7 text-lg leading-8 text-slate-700 md:text-xl">
                <p>“At Lycée St-Elie, education is more than academic achievement. It is about helping every student discover their potential, grow in confidence, develop strong values, and prepare to contribute positively to society.</p>
                <p className="mt-5">Our mission is to provide an environment where students are challenged, supported, respected, and inspired every day.”</p>
              </div>
              <div className="mt-8">
                <p className="text-lg font-black text-school-navy">Father Dr. Eid Bou Rached</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-school-burgundy">Principal · Lycée St-Elie</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Our Heritage</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">For decades, Lycée St-Elie has served generations of students and families, building a tradition of learning, faith, service and community.</p>
              <p className="mt-3 text-sm font-semibold text-slate-500">Timeline dates are placeholders pending confirmation of the school’s official history.</p>
            </Reveal>
            <div className="relative mt-16 grid gap-8 md:grid-cols-5 md:gap-4">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-school-navy/15 md:left-0 md:top-7 md:block md:h-px md:w-full" />
              {milestones.map((item, index) => (
                <Reveal key={item.year} className="relative border-l-2 border-school-gold pl-7 md:border-0 md:pl-0 md:pt-12" >
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-school-burgundy ring-4 ring-school-cream md:left-0 md:top-[22px]" />
                  <p className="text-xl font-black text-school-burgundy">{item.year}</p>
                  <h3 className="mt-2 font-bold text-school-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                  <span className="sr-only">Milestone {index + 1}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-7 px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="rounded-[2rem] bg-school-navy p-9 text-white shadow-xl md:p-14">
              <Target className="text-school-gold" size={34} />
              <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-school-gold">Our Mission</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Education for the whole person.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">To provide a holistic education that combines academic excellence, strong values, personal growth, faith, responsibility and service.</p>
            </Reveal>
            <Reveal className="rounded-[2rem] border border-school-burgundy/15 bg-rose-50 p-9 shadow-xl md:p-14">
              <Compass className="text-school-burgundy" size={34} />
              <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Our Vision</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-school-navy md:text-4xl">Prepared to shape the future.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-700">To prepare confident, compassionate and capable young people who are ready to shape their future and contribute positively to their communities.</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Our Foundation</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">The Values That Guide Us</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
                <Reveal key={title} className="group rounded-2xl border border-school-navy/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-school-gold/60 hover:shadow-xl">
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
                <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">The St-Elie Experience</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-school-navy md:text-5xl">What Makes St-Elie Different</h2>
                <p className="mt-6 text-lg leading-8 text-slate-700">A learning experience shaped by high expectations, personal attention and a genuine sense of belonging.</p>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {differences.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3 border-b border-slate-200 pb-4 font-bold text-slate-800"><Icon size={20} className="shrink-0 text-school-burgundy" />{text}</div>)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={school2} alt="Students at Lycée St-Elie" className="h-80 w-full rounded-[2rem] object-cover" />
                <img src={school3} alt="School life at Lycée St-Elie" className="mt-14 h-80 w-full rounded-[2rem] object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-school-navy-dark py-20 text-white md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-school-navy-dark via-school-navy to-school-navy-dark opacity-80" />
          <Reveal className="relative mx-auto grid max-w-7xl grid-cols-2 gap-9 px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((stat) => <div key={stat.label} className="text-center"><p className="text-4xl font-black md:text-6xl"><Counter end={stat.value} suffix={stat.suffix} /></p><div className="mx-auto mt-4 h-1 w-10 rounded-full bg-school-gold" /><p className="mt-4 font-semibold text-slate-200">{stat.label}</p></div>)}
          </Reveal>
        </section>

        <section className="bg-school-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">People & Purpose</p>
              <h2 className="mt-4 text-4xl font-black text-school-navy md:text-5xl">Our Leadership</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">Meet the people who guide the vision and daily life of Lycée St-Elie.</p>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((leader) => <Reveal key={leader.role} className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><img src={leader.image} alt={`Placeholder portrait for ${leader.role}`} className="h-72 w-full object-cover object-top" /><div className="p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-school-burgundy">{leader.role}</p><h3 className="mt-2 text-xl font-black text-school-navy">{leader.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{leader.note}</p></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div><p className="text-sm font-black uppercase tracking-[0.25em] text-school-burgundy">Our Campus</p><h2 className="mt-4 text-4xl font-black leading-tight text-school-navy md:text-5xl">A Place to Learn, Grow and Belong</h2></div>
              <p className="text-lg leading-8 text-slate-700">Our campus is designed to give students the space, resources and experiences they need to learn, connect and thrive.</p>
            </Reveal>
            <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
              {gallery.map((item) => <Reveal key={item.label} className={`group relative overflow-hidden rounded-2xl ${item.className}`}><img src={item.image} alt={`${item.label} at Lycée St-Elie`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-school-navy-dark/80 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 font-bold text-white">{item.label}</p></Reveal>)}
            </div>
          </div>
        </section>

        <section className="bg-school-burgundy px-6 py-20 text-white md:py-24">
          <Reveal className="mx-auto max-w-5xl text-center">
            <Sparkles className="mx-auto text-school-gold" size={34} />
            <h2 className="mt-5 text-4xl font-black md:text-6xl">Come Experience Lycée St-Elie</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rose-50">Discover our community, meet our team and see what makes our school special.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-school-burgundy transition hover:bg-school-cream">Visit Our School <ArrowRight size={18} /></Link>
              <Link to="/#admissions" className="rounded-xl bg-school-gold px-6 py-3.5 font-bold text-school-navy-dark transition hover:bg-amber-300">Admissions</Link>
              <Link to="/#contact" className="rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">Contact Us</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
