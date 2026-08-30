import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/lycee-st-elie-logo.png'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Student Life', href: '#student-life' },
  { label: 'News & Events', href: '#news' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-school-navy-dark/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">

        <a href="#home" className="flex items-center gap-3">

<Link
  to="/"
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }}
  className="flex items-center gap-3"
>
  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1">
    <img
      src={logo}
      alt="Lycée Saint-Elie"
      className="h-full w-full object-contain"
    />
  </div>

  <div>
    <p className="text-lg font-bold tracking-wide text-white">
      Lycée Saint-Elie
    </p>

    <p className="text-xs uppercase tracking-[0.18em] text-school-gold">
      Darbesim · Saida · Lebanon
    </p>
  </div>
</Link>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition ${
                link.label === 'Alumni'
                  ? 'text-school-gold hover:text-white'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-xl bg-school-burgundy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-school-burgundy-dark"
          >
            Admissions
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <div className="border-t border-white/10 bg-school-navy-dark px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  )
}

export default Navbar