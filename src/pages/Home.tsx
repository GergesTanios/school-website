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
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Counter from '../components/Counter'

const stats = [
  {
    value: 1200,
    suffix: '+',
    label: 'Students',
  },
  {
    value: 3500,
    suffix: '+',
    label: 'Alumni',
  },
  {
    value: 60,
    suffix: '+',
    label: 'Teachers & Educators',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Years of Education',
  },
]

const programs = [
  {
    title: 'Early Years',
    description:
      'A nurturing environment focused on curiosity, exploration, creativity, and confidence.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Primary School',
    description:
      'Strong academic foundations combined with collaboration and discovery.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Middle School',
    description:
      'Developing independence, critical thinking, confidence, and responsibility.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Secondary School',
    description:
      'Preparing students for university, careers, leadership, and life.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80',
  },
]

const studentLife = [
  { icon: Trophy, label: 'Sports' },
  { icon: Palette, label: 'Arts' },
  { icon: Music, label: 'Music' },
  { icon: FlaskConical, label: 'Science' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Users, label: 'Leadership' },
]

const news = [
  {
    date: '24 AUG 2026',
    category: 'Achievement',
    title: 'Students Win National Science Competition',
  },
  {
    date: '16 AUG 2026',
    category: 'Campus',
    title: 'Our New Innovation & Technology Lab Opens',
  },
  {
    date: '05 AUG 2026',
    category: 'Alumni',
    title: 'Alumni Career Networking Evening Announced',
  },
]

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* ABOUT */}
        <section id="about" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85"
                alt="Students learning"
                className="h-[520px] w-full rounded-3xl object-cover"
              />

              <div className="absolute bottom-6 right-6 rounded-2xl bg-white p-6 shadow-xl">
                <p className="text-3xl font-black text-white">25+</p>
                <p className="text-sm text-slate-500">
                  Years inspiring students
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Welcome to Lycée Saint-Elie 
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Education that goes beyond the classroom.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Lycée Saint-Elie combines academic excellence, creativity,
                technology, leadership, character development, and community
                engagement to prepare students for a changing world.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our relationship with students does not stop at graduation.
                Alumni remain an important part of our community through
                networking, mentorship, events, and opportunities.
              </p>

              <a
                href="#academics"
                className="mt-8 inline-flex items-center gap-2 font-bold text-white"
              >
                Discover More
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
      <section className="bg-school-navy py-16">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">

    {stats.map((stat) => (
      <div
        key={stat.label}
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
          {stat.label}
        </p>

      </div>
    ))}

  </div>
</section>


        {/* ACADEMICS */}
        <section id="academics" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                Academics
              </p>

              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                Learning at Every Stage
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every stage of the Lycée Saint-Elie  journey helps students grow
                academically, socially, and personally.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="group overflow-hidden rounded-2xl bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">
                      {program.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {program.description}
                    </p>

                    <button className="mt-5 font-bold text-amber-600">
                      Learn More →
                    </button>
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
                Student Life
              </p>

              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                Discover. Participate. Belong.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Education is more than academics. Students explore their
                interests, build friendships, develop talents, and contribute
                to their community.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-4">
                {studentLife.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                    >
                      <Icon size={21} className="text-amber-600" />

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
              alt="Student activities"
              className="h-[500px] w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        {/* IMPORTANT ALUMNI SECTION */}
        <AlumniSection />

        {/* NEWS */}
        <section id="news" className="bg-slate-00 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
                  Latest Updates
                </p>

                <h2 className="mt-4 text-4xl font-black text-slate-800   md:text-5xl">
                  News & Events
                </h2>
              </div>

              <button className="font-bold text-white">
                View All News →
              </button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-600 p-7 transition hover:border-amber-400 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-amber-600">{item.category}</span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold leading-snug text-slate-800">
                    {item.title}
                  </h3>

                  <button className="mt-8 flex items-center gap-2 font-bold text-slate-700">
                    Read More
                    <ArrowRight size={17} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ADMISSIONS */}
        <section id="admissions" className="relative overflow-hidden py-28">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85"
            alt="School campus"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/80" />

          <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-school-gold">
              Admissions
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Your Child&apos;s Journey Starts Here.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover an education designed to inspire curiosity, develop
              confidence, build character, and create connections that last a
              lifetime.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-school-burgundy px-7 py-3.5 font-bold text-white transition hover:bg-amber-400">
                Start Your Application
              </button>

              <button className="rounded-xl border border-white/25 px-7 py-3.5 font-bold transition hover:bg-white/10">
                Book a School Tour
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home