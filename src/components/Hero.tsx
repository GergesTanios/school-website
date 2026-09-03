import { useEffect, useState } from 'react'
import { ArrowRight, Users } from 'lucide-react'

import { Link } from 'react-router-dom'

import school1 from '../assets/school-1.jpg'
import school2 from '../assets/school-2.jpg'
import school3 from '../assets/school-3.jpg'

const slides = [
  school1,
  school2,
  school3,
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* CAROUSEL BACKGROUND */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Lycée Saint-Elie campus ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-school-navy-dark/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-school-navy-dark/95 via-school-navy-dark/75 to-school-navy/20" />

      {/* CONTENT */}
      <div className="hero-reveal-content relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">

          <div className="mb-6 inline-flex rounded-full border border-school-gold/40 bg-black/20 px-5 py-2.5 text-sm font-bold text-school-gold backdrop-blur-md">
            Lycée Saint-Elie · Darbesim, Saida
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Educating Today.
            <span className="mt-2 block text-school-gold">
              Inspiring Tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-100 md:text-xl">
            A community where students learn, grow, build strong values,
            discover their potential, and remain connected long after
            graduation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl bg-school-burgundy px-6 py-3.5 font-bold text-white transition hover:bg-school-burgundy-dark"
            >
              Discover Our School
              <ArrowRight size={19} />
            </a>

 <Link
  to="/alumni"
  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
>
  <Users size={19} />
  Join Alumni Network
</Link>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={previousSlide}
        className="hidden"
        aria-label="Previous slide"
      >
        {/* <ChevronLeft size={24} /> */}
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="hidden"
        aria-label="Next slide"
      >
        {/* <ChevronRight size={24} /> */}
      </button>

      {/* DOTS */}
      <div className="hero-reveal-content absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-school-gold'
                : 'w-2.5 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
